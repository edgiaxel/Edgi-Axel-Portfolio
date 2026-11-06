"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { cvEnData } from "@/data/cv-en";
import { cvIdData } from "@/data/cv-id";
import { CVDocument } from "@/components/cv/CVDocument";
import { CVPrintButton } from "@/components/cv/CVPrintButton";
import Link from "next/link";
import { ArrowLeft, FileText, Globe, Image as ImageIcon, Info } from "lucide-react";

export function CVPageContent() {
  const searchParams = useSearchParams();
  const queryVariant = searchParams.get("variant");
  const queryLang = searchParams.get("lang");

  const [userLanguage, setUserLanguage] = useState<"en" | "id" | null>(null);
  const [userVariant, setUserVariant] = useState<"professional" | "ats" | null>(null);
  const [showPhoto, setShowPhoto] = useState(true);
  const [hasPhoto, setHasPhoto] = useState(false);

  const language = userLanguage ?? (queryLang === "id" ? "id" : "en");
  const variant = userVariant ?? (queryVariant === "ats" ? "ats" : "professional");

  useEffect(() => {
    // Check if Profile.jpeg is available on server
    fetch("/Profile.jpeg", { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setHasPhoto(true);
        } else {
          setHasPhoto(false);
        }
      })
      .catch(() => setHasPhoto(false));
  }, []);

  const currentContent = language === "en" ? cvEnData : cvIdData;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12 space-y-6">
      {/* Top action bar: hidden in print */}
      <div className="no-print space-y-4 border-b border-[#23324d] pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] rounded-sm py-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Export Variant Toggle */}
            <div className="flex items-center rounded-sm border border-[#23324d] bg-[#0f172a] p-1 text-xs">
              <span className="flex items-center gap-1 px-2 text-[#64748b]">
                <FileText className="h-3 w-3" />
                <span className="font-mono">LAYOUT:</span>
              </span>
              <button
                type="button"
                onClick={() => setUserVariant("professional")}
                aria-pressed={variant === "professional"}
                className={`min-h-[36px] px-3 rounded-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  variant === "professional"
                    ? "bg-cyan-400 text-[#090d16] font-semibold"
                    : "text-[#94a3b8] hover:text-[#f8fafc]"
                }`}
              >
                Professional
              </button>
              <button
                type="button"
                onClick={() => setUserVariant("ats")}
                aria-pressed={variant === "ats"}
                className={`min-h-[36px] px-3 rounded-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  variant === "ats"
                    ? "bg-cyan-400 text-[#090d16] font-semibold"
                    : "text-[#94a3b8] hover:text-[#f8fafc]"
                }`}
              >
                ATS CV
              </button>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center rounded-sm border border-[#23324d] bg-[#0f172a] p-1 text-xs">
              <span className="flex items-center gap-1 px-2 text-[#64748b]">
                <Globe className="h-3 w-3" />
                <span className="font-mono">LANG:</span>
              </span>
              <button
                type="button"
                onClick={() => setUserLanguage("en")}
                aria-pressed={language === "en"}
                className={`min-h-[36px] px-2.5 rounded-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  language === "en"
                    ? "bg-cyan-400 text-[#090d16] font-semibold"
                    : "text-[#94a3b8] hover:text-[#f8fafc]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setUserLanguage("id")}
                aria-pressed={language === "id"}
                className={`min-h-[36px] px-2.5 rounded-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  language === "id"
                    ? "bg-cyan-400 text-[#090d16] font-semibold"
                    : "text-[#94a3b8] hover:text-[#f8fafc]"
                }`}
              >
                ID
              </button>
            </div>

            {/* Optional Photo Toggle (only if Professional variant) */}
            {variant === "professional" && (
              <button
                type="button"
                onClick={() => setShowPhoto(!showPhoto)}
                className={`min-h-[36px] px-3 rounded-sm border border-[#23324d] bg-[#0f172a] text-xs font-mono inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  showPhoto
                    ? "text-cyan-400 hover:text-cyan-300"
                    : "text-[#64748b] hover:text-[#94a3b8]"
                }`}
                title={
                  hasPhoto
                    ? "Toggle profile photo visibility in header"
                    : "src/app/Profile.jpeg is not present"
                }
              >
                <ImageIcon className="h-3.5 w-3.5" />
                <span>Photo: {showPhoto ? "On" : "Off"}</span>
              </button>
            )}

            {/* Print / Save as PDF */}
            <CVPrintButton />
          </div>
        </div>

        {/* Print Settings Guidance Banner */}
        <div className="flex items-start gap-2 rounded-sm border border-[#23324d]/80 bg-[#0a101f] p-3 text-[11px] text-[#94a3b8] font-mono leading-relaxed">
          <Info className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#f8fafc]">Print & PDF Export Tip:</strong> In your browser
            print dialog, set <span className="text-cyan-400">Destination</span> to{" "}
            <em>Save as PDF</em>, <span className="text-cyan-400">Paper Size</span> to <em>A4</em>,{" "}
            <span className="text-cyan-400">Margins</span> to <em>Default</em> or <em>None</em>,
            and uncheck <span className="text-cyan-400">Headers and footers</span> to prevent
            browser-generated URLs/dates.
            {!hasPhoto && variant === "professional" && (
              <span className="block mt-1 text-[#e2e8f0]/80">
                Notice: <code>src/app/Profile.jpeg</code> was not found on disk. The CV renders cleanly
                without an image. To include your photo, place <code>Profile.jpeg</code> in{" "}
                <code>src/app/</code> or <code>public/</code>.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Semantic CV Document */}
      <CVDocument
        content={currentContent}
        variant={variant}
        showPhoto={showPhoto}
        hasPhoto={hasPhoto}
      />
    </div>
  );
}
