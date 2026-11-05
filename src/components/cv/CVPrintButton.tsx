"use client";

import { Printer } from "lucide-react";

export function CVPrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-cyan-400 px-4 py-2 text-xs font-semibold text-[#090d16] hover:bg-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
      aria-label="Download PDF / Print Curriculum Vitae"
    >
      <Printer className="h-4 w-4" />
      <span>Download PDF / Print CV</span>
    </button>
  );
}
