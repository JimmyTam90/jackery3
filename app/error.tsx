"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold text-white">Something went wrong</h1>
      <button type="button" onClick={() => reset()} className="mt-6 min-h-[48px] rounded-lg bg-brand px-6 font-bold text-ink active:scale-95">
        Try again
      </button>
    </main>
  );
}
