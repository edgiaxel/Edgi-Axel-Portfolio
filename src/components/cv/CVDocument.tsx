"use client";

import { CVContent } from "@/data/cv-en";
import { GitBranch, Globe, Link2, Mail, MapPin } from "lucide-react";

interface CVDocumentProps {
  content: CVContent;
  variant: "professional" | "ats";
  showPhoto?: boolean;
  hasPhoto?: boolean;
}

export function CVDocument({
  content,
  variant,
  showPhoto = true,
  hasPhoto = false,
}: CVDocumentProps) {
  const isProfessional = variant === "professional";

  return (
    <article
      className={`cv-document mx-auto max-w-[820px] bg-[#0f172a] text-[#f8fafc] border border-[#23324d] rounded-md p-6 sm:p-10 shadow-xl print:bg-white print:text-[#0f172a] print:border-none print:p-0 print:shadow-none print:max-w-none ${
        isProfessional ? "cv-professional" : "cv-ats"
      }`}
    >
      {/* ================= HEADER ================= */}
      <header className="border-b border-[#23324d] pb-4 print:border-slate-300 print:pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f8fafc] print:text-[#090d16] print:text-xl">
              {content.header.fullName}
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-medium text-cyan-400 print:text-slate-800">
              {content.header.title}
            </p>

            {/* Contact links bar */}
            <div className="mt-2.5 flex flex-wrap items-center gap-y-1.5 gap-x-3 text-[11px] print:text-[10px] font-mono text-[#94a3b8] print:text-slate-700">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-cyan-400 print:text-slate-600 shrink-0" />
                <span>{content.header.location}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3 w-3 text-cyan-400 print:text-slate-600 shrink-0" />
                <a
                  href={`mailto:${content.header.email}`}
                  className="hover:underline hover:text-cyan-300 print:text-slate-800"
                >
                  {content.header.email}
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                <Globe className="h-3 w-3 text-cyan-400 print:text-slate-600 shrink-0" />
                <a
                  href={content.header.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 print:text-slate-800"
                >
                  edgiaxel.tech
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                <GitBranch className="h-3 w-3 text-cyan-400 print:text-slate-600 shrink-0" />
                <a
                  href={content.header.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 print:text-slate-800"
                >
                  github.com/edgiaxel
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                <Link2 className="h-3 w-3 text-cyan-400 print:text-slate-600 shrink-0" />
                <a
                  href={content.header.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 print:text-slate-800"
                >
                  linkedin.com/in/edgi-axel
                </a>
              </span>
            </div>
          </div>

          {/* Profile Photo: Only in Professional variant, when available and enabled */}
          {isProfessional && showPhoto && hasPhoto && (
            <div className="shrink-0 pl-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Profile.jpeg"
                alt="Edgi Axel Limandibrata"
                className="h-20 w-20 sm:h-22 sm:w-22 rounded-md object-cover border border-[#23324d] print:border-slate-300 shadow-sm print:h-18 print:w-18"
              />
            </div>
          )}
        </div>

        {/* Professional Summary */}
        <div className="mt-3 pt-3 border-t border-[#23324d]/60 print:border-slate-200 print:mt-2.5 print:pt-2">
          <p className="text-xs print:text-[10.5px] text-[#cbd5e1] print:text-slate-800 leading-relaxed">
            {content.summary}
          </p>
        </div>
      </header>

      {/* ================= CONTENT LAYOUT ================= */}
      {isProfessional ? (
        /* PROFESSIONAL: Balanced 2-Column Layout */
        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 print:mt-3 print:grid-cols-12 print:gap-x-5">
          {/* Main Column (Left, 7 of 12 cols in print) */}
          <div className="md:col-span-7 print:col-span-7 space-y-4 print:space-y-3">
            {/* Experience */}
            <section className="space-y-2.5 print:space-y-2">
              <h2 className="text-[11px] print:text-[10.5px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-1">
                {content.experienceTitle}
              </h2>
              <div className="space-y-3 print:space-y-2.5">
                {content.experience.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-1 print:space-y-0.5 break-inside-avoid"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs print:text-[10.5px] font-semibold text-[#f8fafc] print:text-[#090d16]">
                      <span>{item.role}</span>
                      <span className="font-mono text-[10.5px] print:text-[9.5px] text-cyan-400 print:text-slate-600 font-normal">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[11px] print:text-[9.5px] font-mono text-[#94a3b8] print:text-slate-600">
                      {item.organization} - {item.location}
                    </p>
                    <ul className="list-disc list-outside ml-3.5 text-[11px] print:text-[9.5px] text-[#cbd5e1] print:text-slate-700 space-y-0.5 pt-0.5 leading-snug">
                      {item.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Technical Projects */}
            <section className="space-y-2.5 print:space-y-2">
              <h2 className="text-[11px] print:text-[10.5px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-1">
                {content.selectedProjectsTitle}
              </h2>
              <div className="space-y-2.5 print:space-y-2">
                {content.selectedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="space-y-0.5 border-l-2 border-[#23324d] pl-2.5 print:border-slate-300 break-inside-avoid"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs print:text-[10.5px] font-semibold text-[#f8fafc] print:text-[#090d16]">
                        {project.title}
                      </span>
                      <span className="font-mono text-[10px] print:text-[9px] text-cyan-400 print:text-slate-600 shrink-0">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[11px] print:text-[9.5px] text-[#94a3b8] print:text-slate-700 leading-snug">
                      {project.summary}
                    </p>
                    <p className="text-[10px] print:text-[8.5px] font-mono text-[#64748b] print:text-slate-600">
                      Stack: {project.technologies.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Right, 5 of 12 cols in print) */}
          <div className="md:col-span-5 print:col-span-5 space-y-4 print:space-y-3">
            {/* Education */}
            <section className="space-y-1.5 break-inside-avoid">
              <h2 className="text-[11px] print:text-[10.5px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-1">
                {content.educationTitle}
              </h2>
              <div className="space-y-1 text-xs print:text-[10.5px]">
                <div className="font-semibold text-[#f8fafc] print:text-[#090d16]">
                  {content.education.institution}
                </div>
                <div className="text-[11px] print:text-[9.5px] text-[#cbd5e1] print:text-slate-700">
                  {content.education.degree}
                </div>
                <div className="flex justify-between items-center text-[10.5px] print:text-[9px] font-mono text-cyan-400 print:text-slate-600">
                  <span>{content.education.period}</span>
                  <span className="font-semibold text-emerald-400 print:text-[#090d16]">
                    GPA: {content.education.gpa}
                  </span>
                </div>
                {content.education.concentration && (
                  <p className="text-[10.5px] print:text-[9px] text-[#94a3b8] print:text-slate-600 italic">
                    {content.education.concentration}
                  </p>
                )}
                {content.education.thesis && (
                  <p className="text-[10.5px] print:text-[9px] text-[#94a3b8] print:text-slate-600 pt-0.5 leading-snug">
                    {content.education.thesis}
                  </p>
                )}
              </div>
            </section>

            {/* Technical Competencies */}
            <section className="space-y-1.5 break-inside-avoid">
              <h2 className="text-[11px] print:text-[10.5px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-1">
                {content.skillsTitle}
              </h2>
              <div className="space-y-1.5 text-[11px] print:text-[9.5px]">
                {content.skillCategories.map((cat) => (
                  <div key={cat.title} className="leading-snug">
                    <span className="font-semibold text-[#f8fafc] print:text-[#090d16]">
                      {cat.title}:
                    </span>{" "}
                    <span className="text-[#94a3b8] print:text-slate-700">
                      {cat.skills.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Leadership & Activities */}
            <section className="space-y-1.5 break-inside-avoid">
              <h2 className="text-[11px] print:text-[10.5px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-1">
                {content.leadershipTitle}
              </h2>
              <div className="space-y-1 text-xs print:text-[10px]">
                <p className="font-semibold text-[#f8fafc] print:text-[#090d16]">
                  {content.leadership.role} - {content.leadership.organization}
                </p>
                <ul className="list-disc list-outside ml-3.5 text-[10.5px] print:text-[9px] text-[#cbd5e1] print:text-slate-700 space-y-0.5 leading-snug">
                  {content.leadership.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Languages */}
            <section className="space-y-1.5 break-inside-avoid">
              <h2 className="text-[11px] print:text-[10.5px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-1">
                {content.languagesTitle}
              </h2>
              <div className="space-y-0.5 text-[11px] print:text-[9.5px] text-[#cbd5e1] print:text-slate-700">
                {content.languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-baseline">
                    <strong className="text-[#f8fafc] print:text-[#090d16] font-medium">
                      {lang.name}
                    </strong>
                    <span className="text-[10.5px] print:text-[9px] text-[#94a3b8] print:text-slate-600 font-mono">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      ) : (
        /* ATS CV: Linear Single-Column Layout */
        <div className="mt-4 space-y-3 print:mt-2.5 print:space-y-2">
          {/* Education */}
          <section className="space-y-1 break-inside-avoid">
            <h2 className="text-[11px] print:text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-0.5">
              {content.educationTitle}
            </h2>
            <div className="space-y-0.5 text-xs print:text-[9.5px]">
              <div className="flex justify-between items-baseline font-semibold text-[#f8fafc] print:text-[#090d16]">
                <span>{content.education.institution}</span>
                <span className="font-mono text-[10.5px] print:text-[9px] text-cyan-400 print:text-slate-600 font-normal">
                  {content.education.period}
                </span>
              </div>
              <p className="text-[11px] print:text-[9px] text-[#cbd5e1] print:text-slate-700">
                {content.education.degree} - GPA: {content.education.gpa}
              </p>
              {content.education.concentration && (
                <p className="text-[10.5px] print:text-[8.5px] text-[#94a3b8] print:text-slate-600">
                  {content.education.concentration}
                </p>
              )}
              {content.education.thesis && (
                <p className="text-[10.5px] print:text-[8.5px] text-[#94a3b8] print:text-slate-600 leading-snug">
                  {content.education.thesis}
                </p>
              )}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-1.5 break-inside-avoid">
            <h2 className="text-[11px] print:text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-0.5">
              {content.experienceTitle}
            </h2>
            <div className="space-y-2 print:space-y-1.5">
              {content.experience.map((item) => (
                <div key={item.id} className="space-y-0.5 break-inside-avoid">
                  <div className="flex justify-between items-baseline text-xs print:text-[9.5px] font-semibold text-[#f8fafc] print:text-[#090d16]">
                    <span>
                      {item.role} - {item.organization}
                    </span>
                    <span className="font-mono text-[10.5px] print:text-[9px] text-cyan-400 print:text-slate-600 font-normal">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[10.5px] print:text-[8.5px] font-mono text-[#94a3b8] print:text-slate-600">
                    {item.location}
                  </p>
                  <ul className="list-disc list-outside ml-4 text-[10.5px] print:text-[8.5px] text-[#cbd5e1] print:text-slate-700 space-y-0.5 leading-snug">
                    {item.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Technical Projects */}
          <section className="space-y-1.5 break-inside-avoid">
            <h2 className="text-[11px] print:text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-0.5">
              {content.selectedProjectsTitle}
            </h2>
            <div className="space-y-1.5 print:space-y-1">
              {content.selectedProjects.map((project) => (
                <div key={project.id} className="space-y-0.5 break-inside-avoid">
                  <div className="flex justify-between items-baseline text-xs print:text-[9.5px]">
                    <span className="font-semibold text-[#f8fafc] print:text-[#090d16]">
                      {project.title}
                    </span>
                    <span className="font-mono text-[10px] print:text-[8.5px] text-cyan-400 print:text-slate-600">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-[10.5px] print:text-[8.5px] text-[#94a3b8] print:text-slate-700 leading-snug">
                    {project.summary}
                  </p>
                  <p className="text-[10px] print:text-[8px] font-mono text-[#64748b] print:text-slate-600">
                    Stack: {project.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Competencies */}
          <section className="space-y-1 break-inside-avoid">
            <h2 className="text-[11px] print:text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-0.5">
              {content.skillsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-4 gap-y-0.5 text-[10.5px] print:text-[8.5px]">
              {content.skillCategories.map((cat) => (
                <div key={cat.title} className="leading-snug">
                  <span className="font-semibold text-[#f8fafc] print:text-[#090d16]">
                    {cat.title}:
                  </span>{" "}
                  <span className="text-[#94a3b8] print:text-slate-700">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Activities */}
          <section className="space-y-1 break-inside-avoid">
            <h2 className="text-[11px] print:text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-0.5">
              {content.leadershipTitle}
            </h2>
            <div className="space-y-0.5 text-[10.5px] print:text-[8.5px]">
              <p className="font-semibold text-[#f8fafc] print:text-[#090d16]">
                {content.leadership.role} - {content.leadership.organization}
              </p>
              <ul className="list-disc list-outside ml-4 text-[#cbd5e1] print:text-slate-700 space-y-0.5 leading-snug">
                {content.leadership.highlights.map((hl, idx) => (
                  <li key={idx}>{hl}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Languages */}
          <section className="space-y-1 break-inside-avoid">
            <h2 className="text-[11px] print:text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-[#090d16] border-b border-[#23324d] print:border-slate-300 pb-0.5">
              {content.languagesTitle}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] print:text-[8.5px] text-[#cbd5e1] print:text-slate-700">
              {content.languages.map((lang) => (
                <span key={lang.name}>
                  <strong className="text-[#f8fafc] print:text-[#090d16] font-medium">
                    {lang.name}:
                  </strong>{" "}
                  <span>{lang.level}</span>
                </span>
              ))}
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
