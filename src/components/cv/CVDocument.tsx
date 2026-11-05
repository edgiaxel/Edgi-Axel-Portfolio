import { CVContent } from "@/data/cv-en";
import { GitBranch, Globe, Link2, Mail, MapPin } from "lucide-react";

interface CVDocumentProps {
  content: CVContent;
}

export function CVDocument({ content }: CVDocumentProps) {
  return (
    <article className="cv-document mx-auto max-w-[800px] bg-[#0f172a] text-[#f8fafc] border border-[#23324d] rounded-md p-8 sm:p-12 shadow-xl print:bg-white print:text-black print:border-none print:p-0 print:shadow-none">
      {/* Header */}
      <header className="border-b border-[#23324d] pb-6 print:border-gray-300 print:pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl print:text-2xl print:text-black">
          {content.header.fullName}
        </h1>
        <p className="mt-1 text-sm font-medium text-cyan-400 print:text-gray-700">
          {content.header.title}
        </p>

        {/* Contact bar */}
        <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-[#94a3b8] print:text-gray-600">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-cyan-400 print:text-gray-500" />
            <span>{content.header.location}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-cyan-400 print:text-gray-500" />
            <a href={`mailto:${content.header.email}`} className="hover:underline">
              {content.header.email}
            </a>
          </span>
          <span className="inline-flex items-center gap-1">
            <Globe className="h-3.5 w-3.5 text-cyan-400 print:text-gray-500" />
            <a href={content.header.domain} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {content.header.domain}
            </a>
          </span>
          <span className="inline-flex items-center gap-1">
            <GitBranch className="h-3.5 w-3.5 text-cyan-400 print:text-gray-500" />
            <a href={content.header.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/edgiaxel
            </a>
          </span>
          <span className="inline-flex items-center gap-1">
            <Link2 className="h-3.5 w-3.5 text-cyan-400 print:text-gray-500" />
            <a href={content.header.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/edgi-axel
            </a>
          </span>
        </div>
      </header>

      {/* Summary */}
      <section className="mt-6 space-y-2 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.summaryTitle}
        </h2>
        <p className="text-sm text-[#94a3b8] leading-relaxed print:text-gray-800">
          {content.summary}
        </p>
      </section>

      {/* Education */}
      <section className="mt-6 space-y-2 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.educationTitle}
        </h2>
        <div className="space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm font-semibold text-[#f8fafc] print:text-black">
            <span>{content.education.institution}</span>
            <span className="font-mono text-xs text-cyan-400 print:text-gray-600 font-normal">
              {content.education.period}
            </span>
          </div>
          <p className="text-xs text-[#94a3b8] print:text-gray-700">
            {content.education.degree} — GPA: <span className="text-emerald-400 print:text-black font-semibold">{content.education.gpa}</span>
          </p>
          <ul className="list-disc list-inside text-xs text-[#94a3b8] print:text-gray-700 space-y-1 pt-1">
            {content.education.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected Technical Projects */}
      <section className="mt-6 space-y-3 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.selectedProjectsTitle}
        </h2>
        <div className="space-y-3">
          {content.selectedProjects.map((project) => (
            <div key={project.id} className="space-y-1 border-l-2 border-[#23324d] pl-3 print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-sm font-semibold text-[#f8fafc] print:text-black">
                  {project.title}
                </span>
                <span className="font-mono text-[11px] text-cyan-400 print:text-gray-600">
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-[#94a3b8] print:text-gray-700 leading-relaxed">
                {project.summary}
              </p>
              <p className="text-[11px] font-mono text-[#64748b] print:text-gray-600">
                Stack: {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-6 space-y-3 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.experienceTitle}
        </h2>
        <div className="space-y-3">
          {content.experience.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm font-semibold text-[#f8fafc] print:text-black">
                <span>{item.role}</span>
                <span className="font-mono text-xs text-cyan-400 print:text-gray-600 font-normal">
                  {item.period}
                </span>
              </div>
              <p className="text-xs font-mono text-[#94a3b8] print:text-gray-700">
                {item.organization} — {item.location}
              </p>
              <ul className="list-disc list-inside text-xs text-[#94a3b8] print:text-gray-700 space-y-1 pt-1">
                {item.highlights.map((h, idx) => (
                  <li key={idx} className="leading-relaxed">{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Competencies */}
      <section className="mt-6 space-y-2 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.skillsTitle}
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 text-xs text-[#94a3b8] print:text-gray-800">
          {content.skillCategories.map((cat) => (
            <div key={cat.title}>
              <span className="font-semibold text-[#f8fafc] print:text-black">{cat.title}:</span>{" "}
              <span>{cat.skills.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="mt-6 space-y-2 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.leadershipTitle}
        </h2>
        <div className="text-xs text-[#94a3b8] print:text-gray-800 space-y-1">
          <p className="font-semibold text-[#f8fafc] print:text-black">
            {content.leadership.role} — {content.leadership.organization}
          </p>
          <ul className="list-disc list-inside">
            {content.leadership.highlights.map((hl, idx) => (
              <li key={idx}>{hl}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section className="mt-6 space-y-2 print:mt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-gray-900 print:font-bold">
          {content.languagesTitle}
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-[#94a3b8] print:text-gray-800">
          {content.languages.map((lang) => (
            <span key={lang.name}>
              <strong className="text-[#f8fafc] print:text-black">{lang.name}:</strong> {lang.level}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
