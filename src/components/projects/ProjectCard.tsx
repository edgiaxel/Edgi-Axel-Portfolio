import { Project } from "@/data/projects";
import { ExternalLink, GitBranch, Terminal } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-md border border-[#23324d] bg-[#0f172a]/70 p-5 transition-all hover:border-cyan-500/50 hover:bg-[#172136]/60">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
            {project.category}
          </span>
          <span
            className={`rounded px-2 py-0.5 font-mono text-[11px] ${
              project.status === "Completed"
                ? "bg-emerald-950/60 text-emerald-300 border border-emerald-800/40"
                : project.status === "In Progress"
                ? "bg-amber-950/60 text-amber-300 border border-amber-800/40"
                : "bg-purple-950/60 text-purple-300 border border-purple-800/40"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-[#f8fafc] group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">
          {project.summary}
        </p>

        {project.notes && (
          <p className="mt-2 text-xs italic text-cyan-400/80">
            Note: {project.notes}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-[#172136] px-2 py-0.5 text-[11px] font-mono text-[#94a3b8] border border-[#23324d]/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-[#172136] pt-4 text-xs font-medium">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-sm"
            aria-label={`${project.title} GitHub repository`}
          >
            <GitBranch className="h-4 w-4" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="inline-flex min-h-[44px] items-center gap-1.5 text-[#64748b] text-[11px]">
            <Terminal className="h-3.5 w-3.5" />
            <span>Repository Private/Coursework</span>
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-sm ml-auto"
            aria-label={`${project.title} live deployment`}
          >
            <span>Live Demo</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
