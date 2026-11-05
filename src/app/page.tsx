import Link from "next/link";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowUpRight, FileText, FolderGit2 } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20 space-y-20">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded border border-[#23324d] bg-[#0f172a] px-3 py-1 font-mono text-xs text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>System Online // edgiaxel.tech</span>
        </div>

        <div className="space-y-3">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-[#f8fafc] sm:text-6xl">
            {profileData.fullName}
          </h1>
          <p className="text-xl font-medium text-cyan-400/90 sm:text-2xl">
            {profileData.title}
          </p>
        </div>

        <p className="max-w-2xl text-base text-[#94a3b8] leading-relaxed">
          {profileData.bio.en.professional}
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#090d16] hover:bg-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>Explore Projects</span>
          </Link>
          <Link
            href="/cv"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-[#23324d] bg-[#0f172a] px-5 py-2.5 text-sm font-medium text-[#f8fafc] hover:border-cyan-500/40 hover:bg-[#172136] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
          >
            <FileText className="h-4 w-4" />
            <span>View Curriculum Vitae</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#94a3b8] hover:text-cyan-400 transition-colors px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Selected Projects Vertical Slice */}
      <section aria-labelledby="featured-projects-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#23324d] pb-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              Selected Work
            </div>
            <h2 id="featured-projects-heading" className="text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl mt-1">
              Featured Engineering & AI Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
          >
            <span>View all ({projectsData.length}) projects</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Highlights & Background Summary */}
      <section aria-labelledby="overview-heading" className="rounded-md border border-[#23324d] bg-[#0f172a]/60 p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
            Profile Snapshot
          </div>
          <h2 id="overview-heading" className="text-xl font-bold text-[#f8fafc] sm:text-2xl">
            Software Engineering & Research Focus
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-1 border-l-2 border-cyan-400/80 pl-4">
            <span className="text-xs font-mono uppercase text-[#64748b]">Education</span>
            <p className="text-sm font-semibold text-[#f8fafc]">{profileData.education.institution}</p>
            <p className="text-xs text-[#94a3b8]">{profileData.education.degree}</p>
            <p className="text-xs font-mono text-cyan-400/90">GPA: {profileData.education.gpa}</p>
          </div>

          <div className="space-y-1 border-l-2 border-[#23324d] pl-4">
            <span className="text-xs font-mono uppercase text-[#64748b]">Undergraduate Thesis</span>
            <p className="text-sm font-semibold text-[#f8fafc]">RL Card Game Environment</p>
            <p className="text-xs text-[#94a3b8]">Comparative benchmark of DQN, PPO, and A2C algorithms (In Progress).</p>
          </div>

          <div className="space-y-1 border-l-2 border-[#23324d] pl-4">
            <span className="text-xs font-mono uppercase text-[#64748b]">Primary Tooling</span>
            <p className="text-sm font-semibold text-[#f8fafc]">Full-Stack Web & Local AI</p>
            <p className="text-xs text-[#94a3b8]">React, TypeScript, FastAPI, PyTorch, Ollama, Gemma 3 4B, Supabase.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
