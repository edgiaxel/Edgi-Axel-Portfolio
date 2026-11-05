import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import Link from "next/link";
import { ArrowLeft, BookOpen, Briefcase, GraduationCap, Award } from "lucide-react";

export const metadata = {
  title: "About | Edgi Axel",
  description: "Professional background, academic journey at STMIK LIKMI, experience, and technical competencies.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16 space-y-12">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] rounded-sm"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Home</span>
      </Link>

      {/* Header Profile */}
      <header className="space-y-4 border-b border-[#23324d] pb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
          Module 02 // Profile & Background
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-5xl">
          About Edgi Axel
        </h1>
        <p className="text-lg font-medium text-cyan-400/90">
          {profileData.title}
        </p>
        <p className="text-base text-[#94a3b8] leading-relaxed">
          {profileData.bio.en.professional}
        </p>
      </header>

      {/* Education & Research Section */}
      <section aria-labelledby="education-heading" className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-cyan-400" />
          <h2 id="education-heading" className="text-xl font-bold text-[#f8fafc]">
            Education & Academic Standing
          </h2>
        </div>

        <div className="rounded-md border border-[#23324d] bg-[#0f172a] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-semibold text-[#f8fafc]">
              {profileData.education.institution}
            </h3>
            <span className="font-mono text-xs text-cyan-400">
              {profileData.education.period}
            </span>
          </div>

          <p className="text-sm text-[#94a3b8]">
            {profileData.education.degree} (Concentration in {profileData.education.concentration})
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#94a3b8] pt-2 border-t border-[#172136]">
            <div>
              <span className="text-[#64748b]">Status:</span> {profileData.education.standing}
            </div>
            <div>
              <span className="text-[#64748b]">Current GPA:</span>{" "}
              <span className="text-emerald-400 font-semibold">{profileData.education.gpa}</span>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#94a3b8] space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
              Undergraduate Thesis Research (In Progress):
            </span>
            <p className="leading-relaxed">
              Evaluating Deep Q-Network (DQN), Proximal Policy Optimization (PPO), and Advantage Actor-Critic (A2C)
              reinforcement learning algorithms inside a custom turn-based card game environment with deterministic action spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section aria-labelledby="experience-heading" className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-cyan-400" />
          <h2 id="experience-heading" className="text-xl font-bold text-[#f8fafc]">
            Work Experience
          </h2>
        </div>

        <div className="space-y-4">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="rounded-md border border-[#23324d] bg-[#0f172a] p-6 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-[#f8fafc]">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-cyan-400">
                  {item.period}
                </span>
              </div>
              <p className="text-xs font-mono text-[#94a3b8]">
                {item.organization} — {item.location}
              </p>

              <ul className="list-disc list-inside space-y-1 text-sm text-[#94a3b8] pt-2">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities */}
      <section aria-labelledby="leadership-heading" className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-cyan-400" />
          <h2 id="leadership-heading" className="text-xl font-bold text-[#f8fafc]">
            Leadership & Community
          </h2>
        </div>

        <div className="rounded-md border border-[#23324d] bg-[#0f172a] p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-base font-semibold text-[#f8fafc]">
              President
            </h3>
            <span className="font-mono text-xs text-cyan-400">
              STMIK LIKMI
            </span>
          </div>
          <p className="text-xs font-mono text-[#94a3b8]">
            Computer and Electronic Student Club
          </p>
          <p className="text-sm text-[#94a3b8] leading-relaxed pt-1">
            Coordinated student club activities, technical discussions, learning workshops, and operational member initiatives.
          </p>
        </div>
      </section>

      {/* Creative Technology */}
      <section aria-labelledby="creative-heading" className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-cyan-400" />
          <h2 id="creative-heading" className="text-xl font-bold text-[#f8fafc]">
            Creative Technology & Digital Art
          </h2>
        </div>

        <div className="rounded-md border border-[#23324d] bg-[#0f172a] p-6 text-sm text-[#94a3b8] leading-relaxed space-y-2">
          <p>
            In addition to software engineering, Axel brings multidisciplinary experience in digital illustration,
            graphic design, Live2D rigging, and multimedia production.
          </p>
          <p className="text-xs text-[#64748b]">
            Note: Professional technical work and creative technology applications are maintained with clear boundaries.
          </p>
        </div>
      </section>
    </div>
  );
}
