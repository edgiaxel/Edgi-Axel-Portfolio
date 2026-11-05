import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export const metadata = {
  title: "404 - Node Not Found",
  description: "The requested archive destination does not exist.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-full border border-[#23324d] bg-[#0f172a] p-3 text-cyan-400 mb-6">
        <span className="font-mono text-sm">404 // NULL_PTR</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl">
        Archive Entry Not Found
      </h1>

      <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">
        The route or resource you requested does not exist in this archive. It may have been relocated or updated.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#090d16] hover:bg-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-[#23324d] bg-[#0f172a] px-5 py-2.5 text-sm font-medium text-[#f8fafc] hover:border-cyan-500/40 hover:bg-[#172136] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d16]"
        >
          <RefreshCw className="h-4 w-4 text-cyan-400" />
          <span>Browse Projects</span>
        </Link>
      </div>
    </div>
  );
}
