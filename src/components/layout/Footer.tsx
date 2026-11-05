const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/edgiaxel",
    label: "GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/edgi-axel-limandibrata-7409bb206/",
    label: "LinkedIn profile",
  },
  {
    name: "Email",
    href: "mailto:xgv1807@gmail.com",
    label: "Send email to Edgi Axel",
  },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto border-t border-[#23324d] bg-[#090d16] text-[#94a3b8]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#f8fafc]">
              Edgi Axel Limandibrata
            </p>
            <p className="text-xs text-[#94a3b8]">
              Web Developer | AI/ML Enthusiast | Creative Technology
            </p>
            <p className="font-mono text-xs text-[#64748b]">
              Location: Bandung, West Java, Indonesia
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex min-h-[44px] min-w-[44px] items-center text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] rounded-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#172136] pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#64748b]">
          <p>© {currentYear} Edgi Axel Limandibrata. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#64748b]">
            Canonical: https://edgiaxel.tech
          </p>
        </div>
      </div>
    </footer>
  );
}
