import { projectsData } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Projects | Edgi Axel",
  description: "Curated portfolio of software engineering projects, web applications, local AI tools, and research.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16 space-y-10">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] rounded-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
            Directory // Technical Works
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-5xl">
            Projects & Research
          </h1>
          <p className="max-w-2xl text-base text-[#94a3b8] leading-relaxed">
            Verified technical implementations spanning full-stack web applications, local vision inference,
            reinforcement learning experimentation, and academic software projects.
          </p>
        </div>
      </div>

      <ProjectGrid projects={projectsData} />
    </div>
  );
}
