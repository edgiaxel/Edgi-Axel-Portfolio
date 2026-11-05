export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-6xl items-center justify-center px-4 py-16">
      <div className="flex items-center gap-3 font-mono text-sm text-cyan-400">
        <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
        <span>Loading archive stream...</span>
      </div>
    </div>
  );
}
