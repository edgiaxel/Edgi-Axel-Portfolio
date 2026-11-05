"use client";

import { useState } from "react";
import { cvEnData } from "@/data/cv-en";
import { cvIdData } from "@/data/cv-id";
import { CVDocument } from "@/components/cv/CVDocument";
import { CVPrintButton } from "@/components/cv/CVPrintButton";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";

export function CVPageContent() {
  const [language, setLanguage] = useState<"en" | "id">("en");

  const currentContent = language === "en" ? cvEnData : cvIdData;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16 space-y-8">
      {/* Top action bar: hidden in print */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#23324d] pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16] rounded-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center rounded-sm border border-[#23324d] bg-[#0f172a] p-1 text-xs">
            <span className="flex items-center gap-1 px-2 text-[#64748b]">
              <Globe className="h-3 w-3" />
              <span className="font-mono">LANG:</span>
            </span>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`min-h-[36px] px-3 rounded-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                language === "en"
                  ? "bg-cyan-400 text-[#090d16] font-semibold"
                  : "text-[#94a3b8] hover:text-[#f8fafc]"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage("id")}
              aria-pressed={language === "id"}
              className={`min-h-[36px] px-3 rounded-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                language === "id"
                  ? "bg-cyan-400 text-[#090d16] font-semibold"
                  : "text-[#94a3b8] hover:text-[#f8fafc]"
              }`}
            >
              Bahasa Indonesia
            </button>
          </div>

          {/* Print / Save as PDF */}
          <CVPrintButton />
        </div>
      </div>

      {/* Semantic CV Document */}
      <CVDocument content={currentContent} />
    </div>
  );
}
