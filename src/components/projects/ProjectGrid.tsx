"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories: { label: string; value: string }[] = [
    { label: "All Projects", value: "all" },
    { label: "Featured Work", value: "featured" },
    { label: "Academic & Research", value: "academic" },
    { label: "Game Jams", value: "jam" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#23324d] pb-4" role="tablist" aria-label="Project Categories">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat.value)}
              className={`min-h-[44px] px-4 rounded-sm text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] ${
                isSelected
                  ? "bg-cyan-400 text-[#090d16] font-semibold"
                  : "bg-[#0f172a] text-[#94a3b8] hover:bg-[#172136] hover:text-[#f8fafc] border border-[#23324d]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid listing */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-md border border-[#23324d] bg-[#0f172a] p-8 text-center text-sm text-[#94a3b8]">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
