function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center px-6 py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-emerald-300">
          React + TypeScript + Vite + Tailwind
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          calendar-13-9 is ready.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Install dependencies with pnpm, then start the Vite dev server.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-950">
          <code className="rounded bg-emerald-300 px-3 py-2 font-mono">
            pnpm install
          </code>
          <code className="rounded bg-zinc-100 px-3 py-2 font-mono">
            pnpm dev
          </code>
        </div>
      </section>
    </main>
  )
}

export default App
