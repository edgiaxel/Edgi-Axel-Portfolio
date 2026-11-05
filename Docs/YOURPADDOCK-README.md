# Your Paddock

Every development. One briefing. Understand the story behind the timing screen.

Your Paddock is a Formula 1 briefing app. It pulls the calendar, results, and standings from Jolpica, and headlines from Formula 1, BBC Sport, Motorsport.com, Autosport, and RaceFans. New and changed articles are stored with a content hash so a refresh does not invent a second copy of the same story. Ask Paddock answers a question from those stored articles. Citations are checked against the evidence pack before they are shown. If no article states the exact point, the answer is labeled as an assumption drawn from the closest pieces.

This is an independent fan project. It is not affiliated with Formula 1, the FIA, teams, or drivers.

## What you need

- Python 3.13 (tested with 3.13.5) and `pip`
- Node.js 20 or newer (tested with 24) and npm
- A Postgres database. The app is written for [Neon](https://neon.com) Lakebase Postgres. A local Postgres works if you set `DATABASE_URL` yourself.
- Optional, for Ask Paddock and claim extraction: [Ollama](https://ollama.com) with `gemma3:4b`
- Optional: a Sentry DSN, a Browserbase API key (FIA document titles), a SerpApi key (extra search links)

The API starts without the optional keys. Ask Paddock needs `LLM_PROVIDER=ollama` and a running Ollama, or an explicit `LLM_PROVIDER=gemini` plus `GEMINI_API_KEY`. It does not switch providers on its own.

## Configure

From the repo root:

```bash
cp .env.example .env
```

Fill these in `.env`. Leave the rest blank unless you use that integration.

```dotenv
APP_ENV=development
FRONTEND_ORIGIN=http://localhost:5173

DATABASE_URL=postgresql://USER:PASSWORD@HOST-pooler.REGION.aws.neon.tech/neondb?sslmode=require
DATABASE_URL_DIRECT=postgresql://USER:PASSWORD@HOST.REGION.aws.neon.tech/neondb?sslmode=require

LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=gemma3:4b
```

`DATABASE_URL` is the pooled Neon string (the host contains `-pooler`). The API uses it. `DATABASE_URL_DIRECT` is the unpooled string. Alembic uses it so migrations do not go through the pooler. If you only have one string, set `DATABASE_URL` and leave the direct one empty. The app also accepts `DATABASE_URL_UNPOOLED` as the direct string.

Do not commit `.env`. Anything named `VITE_*` is baked into the browser bundle, so never put a database URL or a private key there. A Sentry DSN in `VITE_SENTRY_DSN` is public by design.

## Run

Two terminals, after the database schema exists.

```bash
# terminal 1, from backend/
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

```bash
# terminal 2, from frontend/
npm install
npm run dev
```

Open http://127.0.0.1:5173. The Vite server proxies `/api` to the API on port 8000, so you do not set `VITE_API_BASE_URL` for local development.

Check the API:

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/api/v1/health/db
```

`/health` is the process check. `/api/v1/health/db` is the database check. It returns status and latency only, never the connection string.

Load the first season and the news feeds (from `backend/`, with the venv active and `.env` in place):

```bash
LLM_PROVIDER=none python -m app.jobs.refresh --trigger manual
```

`LLM_PROVIDER=none` on that command skips Gemma for the import. The dashboard still works. A later refresh with `LLM_PROVIDER=ollama` extracts claims from new articles. Unchanged articles are not extracted again.

### Ask Paddock locally

```bash
# install Ollama, then:
ollama pull gemma3:4b
ollama serve
```

Keep `LLM_PROVIDER=ollama` in `.env` and restart the API. One answer on CPU is often 20 to 90 seconds. The model used for this project is `gemma3:4b`.

## Pages

| Route | What it is |
|---|---|
| `/` | Next race, Paddock Pulse briefing, championship snapshot, newest developments, source freshness |
| `/news` | Article cards. The title opens the publisher. Development opens the stored story. |
| `/stories/:id` | The article text we are allowed to keep, plus the link back to the publisher |
| `/races` | Calendar, results, standings, and grand prix points trends from Jolpica. No model is involved. |
| `/ask` | A question answered from stored articles, with citations checked in code |
| `/settings` | Timezone and which optional integrations are configured |

## Trends

`GET /api/v1/trends?season=2026&window=5` sums stored grand prix results in round order. Overview shows two charts: points over the last five completed rounds, and finishing position for the driver with the most stored race points. Retirements and did-not-starts are marked and are not drawn as a finishing position. The charts are not official championship totals, because sprint results are not stored. Qualifying versus finish is not charted: qualifying classification is not in the database. The starting grid is not used as a substitute.

A forecast is not implemented. The coverage check is `docs/forecasting-feasibility.md`.

## Watchlist

Settings can follow driver family names, constructor names, and story categories. The list stays in this browser (`localStorage`). Overview sends it with the briefing request. Paddock Pulse ranks matching stories first, and the briefing fingerprint includes the list, so a change marks the saved briefing stale until you write it again. A scheduled refresh does not know the browser list, so it still builds the default briefing.

## Paddock Pulse

After a refresh that stores new or updated records, and only when a model is configured, the API writes a briefing in the background. Overview reads the saved briefing. Opening the page does not call the model.

The briefing is skipped when the selected stories and standings fingerprint has not changed. A failed generation leaves the previous successful briefing in place. `POST /api/v1/overview/pulse` asks for a new one and returns before the model finishes. With `LLM_PROVIDER=none`, including on Render, no briefing is generated.

## How an answer is built

Retrieval is SQL, not an agent. The question is folded (`redbull` becomes `red bull`), weak words such as `latest` are dropped, and the remaining words are matched against titles, excerpts, stored article text, and claims. Gemma receives that evidence pack and must cite labels such as `S1`. The validator drops unknown labels, invented URLs, and statements the cited text does not support. If the pack has articles but none state the exact point, the prompt asks for one inference that starts with `Assumption:`, and the page labels it that way.

Checking "Check Formula 1, BBC, Motorsport.com, Autosport, and RaceFans before answering" refreshes those feeds first and does not run extraction on that pass. If stored articles are thin, or the question asks what is latest, Ask can search SerpApi (or Browserbase Search when SerpApi is not set). At most three queries and five https pages on the permitted news hosts. Snippets are not evidence. A page counts only after it is fetched and parsed. The investigation stores the research status: stored only, live search completed, partial failure, unavailable, or failed.

## Sources

| Source | What is stored |
|---|---|
| Jolpica-F1 | Calendar, sessions, results, standings. Non-commercial CC BY-NC-SA 4.0. |
| Formula 1 RSS | Title, description, link. The feed has no publication date. Non-commercial RSS terms. |
| BBC Sport, Motorsport.com, Autosport, RaceFans | Title, excerpt, image URL, and a plain-text article body fetched when a story is opened. |
| FIA documents | Titles and links from the public documents index, only when `BROWSERBASE_API_KEY` is set. Hidden from the news list. |

Article bodies are plain text, capped, and limited to those hosts. Full HTML is not stored. Paywalls, logins, and CAPTCHAs are not bypassed.

## Tests

```bash
# backend, from backend/ with the venv active
pytest

# frontend
cd frontend && npm run lint && npm run build
```

Backend tests use a throwaway Postgres from `pixeltable-pgserver`. They do not use your Neon URL. Live source tests stay off unless you set `RUN_LIVE_SOURCE_TESTS=1`.

## Partners

Each one is off until its variable is set, except Neon and the model, which the briefing and Ask Paddock need.

| Partner | What it does here |
|---|---|
| Gemma via Ollama | `gemma3:4b` writes claim extraction and Ask Paddock answers. `LLM_PROVIDER=ollama` is explicit. The app does not switch to Gemini if Ollama fails. |
| Neon | Postgres for articles, content hashes, stories, claims, investigations, and Jolpica race tables. `DATABASE_URL` is the pooled string. Alembic uses the unpooled string. |
| Render | Hosts the API and the static site. The live briefing is [your-paddock-web.onrender.com](https://your-paddock-web.onrender.com). The host sets `LLM_PROVIDER=none`, so Ask Paddock there does not call Gemma. A free cron plan was rejected, so the 6-hour refresh is not scheduled. |
| Sentry | Errors and a sample of API traces. Configured when `SENTRY_DSN` is set. The frontend sends events only when `VITE_SENTRY_DSN` is set. Article text, cookies, and authorization headers are scrubbed. Source-map upload needs `SENTRY_AUTH_TOKEN`, which is separate and not required for error reporting. |
| Browserbase | Fetch reads the public FIA documents index (titles and links only) when `BROWSERBASE_API_KEY` is set. Those documents stay out of the news list. Search is the fallback for extra Ask links, and only if SerpApi is not set. Browser sessions are not used. |
| SerpApi | If you tick "Search for extra source links", Ask Paddock requests a bounded set of links. Those links are unverified and are not citations. |

`GET /api/v1/integrations/status` reports which of Sentry, SerpApi, and Browserbase are configured. It returns booleans only.

## Deploy

`render.yaml` describes the API, the static site, and a refresh every 6 hours. The blueprint sets `LLM_PROVIDER=none` because Render cannot reach Ollama on your laptop. The hosted site can show the briefing. Ask Paddock on Render stays off unless you set `LLM_PROVIDER=gemini` and `GEMINI_API_KEY` on purpose.

After the repo is on GitHub:

```bash
render login
render blueprints validate render.yaml
```

Create the blueprint from the Render dashboard (New, Blueprint, this repo) or with the CLI once you are logged in. Set these in the dashboard, not in git:

- API: `DATABASE_URL`, `DATABASE_URL_DIRECT` (or `DATABASE_URL_UNPOOLED`), `FRONTEND_ORIGIN` (the static site origin, no trailing path)
- Static site, before its build: `VITE_API_BASE_URL` (the API origin, no trailing slash)
- Optional: `SENTRY_DSN`, `VITE_SENTRY_DSN`, `SERPAPI_API_KEY`, `BROWSERBASE_API_KEY`

Run migrations once against the production database from your machine (`alembic upgrade head`). The app does not create tables on startup.

The API health check is `GET /health`. SSH into a running service is separate from deploying it: `render ssh` needs a service that has already deployed, plus the SSH public key on your Render account.

## Layout

```text
frontend/     React, TypeScript, Vite, Tailwind
backend/      FastAPI, Pydantic, SQLAlchemy, Alembic
render.yaml   Render blueprint
.env.example  every setting, with placeholders
```

Business logic sits in `backend/app/services/`. Source adapters are in `backend/app/sources/` and do not call the model or write the database. `PROJECT_BRIEF.md` is the product spec. `AGENTS.md` is for coding agents.

## Limits

- Standings and points come from Jolpica. The model is not asked to calculate them.
- Formula 1 RSS items are ordered by the time they were first seen, because the feed has no dates.
- Gemma on a laptop CPU is slow. A refresh extracts at most 10 new items.
- The hosted blueprint does not run Gemma.
- Jolpica and the Formula 1 RSS terms are non-commercial. Read them again before any commercial use.
