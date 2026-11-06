import { CVPageContent } from "@/components/cv/CVPageContent";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Edgi Axel - Curriculum Vitae",
  },
  description:
    "Curriculum Vitae of Edgi Axel Limandibrata. Bilingual English and Indonesian format with A4 print and PDF export support.",
};

export default function CVPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-xs font-mono text-cyan-400">
          Loading CV...
        </div>
      }
    >
      <CVPageContent />
    </Suspense>
  );
}
