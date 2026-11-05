"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-full border border-rose-900/60 bg-rose-950/40 p-3 text-rose-400 mb-6">
        <AlertTriangle className="h-6 w-6" />
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl">
        Application Error Encountered
      </h1>

      <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">
        An unexpected exception occurred while rendering this view. You can attempt to recover by refreshing the component state.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#090d16] hover:bg-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-[#23324d] bg-[#0f172a] px-5 py-2.5 text-sm font-medium text-[#f8fafc] hover:border-cyan-500/40 hover:bg-[#172136] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
