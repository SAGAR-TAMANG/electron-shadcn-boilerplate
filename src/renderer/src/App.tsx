export default function App() {
  return (
    <main className="w-full h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-border flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Electron + ShadCN Boilerplate</h1>
        <p className="text-muted-foreground text-sm max-w-sm text-center">
          A clean starting point with Tailwind v4, ShadCN UI, agents-ui, ai-elements, and
          electron-vite. Start building something great.
        </p>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <div className="px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
          Electron
        </div>
        <div className="px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
          React 19
        </div>
        <div className="px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
          Tailwind v4
        </div>
        <div className="px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
          ShadCN
        </div>
        <div className="px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
          TypeScript
        </div>
      </div>
    </main>
  )
}
