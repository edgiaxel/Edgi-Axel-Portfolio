import { profileData } from "@/data/profile";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Contact | Edgi Axel",
  description: "Connect with Edgi Axel for software development roles, hackathons, and technical collaborations.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16 space-y-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] rounded-sm"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Home</span>
      </Link>

      <div className="space-y-4 border-b border-[#23324d] pb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
          Module 04 // Contact Channels
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-2xl text-base text-[#94a3b8] leading-relaxed">
          Open to software engineering opportunities, project collaborations, and hackathon teams.
          Reach out directly via email or professional profiles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Direct Email Channel */}
        <div className="rounded-md border border-[#23324d] bg-[#0f172a] p-6 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Mail className="h-5 w-5" />
            <h2 className="text-base font-semibold text-[#f8fafc]">
              Primary Email
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8]">
            For recruitment, technical inquiries, or collaborative projects:
          </p>
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex min-h-[44px] items-center text-sm font-mono text-cyan-400 hover:text-cyan-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-sm"
          >
            {profileData.email}
          </a>
        </div>

        {/* Location & Timezone */}
        <div className="rounded-md border border-[#23324d] bg-[#0f172a] p-6 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <MapPin className="h-5 w-5" />
            <h2 className="text-base font-semibold text-[#f8fafc]">
              Location & Presence
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8]">
            Based in {profileData.location} (WIB / UTC+7). Available for local in-person and remote workflows.
          </p>
          <p className="text-xs font-mono text-[#64748b]">
            Canonical Domain: {profileData.domain}
          </p>
        </div>
      </div>

      {/* Online Profiles & Ecosystem */}
      <section aria-labelledby="profiles-heading" className="space-y-4">
        <h2 id="profiles-heading" className="text-xl font-bold text-[#f8fafc]">
          Professional & Developer Ecosystem
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profileData.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[44px] items-center justify-between rounded-md border border-[#23324d] bg-[#0f172a] px-4 py-3 text-sm text-[#f8fafc] hover:border-cyan-500/50 hover:bg-[#172136] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
            >
              <span className="font-medium group-hover:text-cyan-300 transition-colors">
                {link.name}
              </span>
              <ExternalLink className="h-4 w-4 text-[#64748b] group-hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* Privacy Guarantee */}
      <div className="rounded-md border border-[#172136] bg-[#090d16] p-4 text-xs text-[#64748b]">
        <p>
          Privacy notice: Personal street addresses and private phone numbers are kept confidential and
          provided only upon request for verified employment opportunities.
        </p>
      </div>
    </div>
  );
}
