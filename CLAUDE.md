# CLAUDE.md — Electron ShadCN Boilerplate

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Type-check + build all
pnpm build:linux      # Package for Linux
pnpm build:mac        # Package for macOS
pnpm build:win        # Package for Windows
pnpm lint             # Lint
pnpm format           # Prettier
pnpm typecheck        # Type-check main + renderer
```

## Architecture

Three separate compile targets, each with its own tsconfig:

| Target | Entry | tsconfig |
|--------|-------|----------|
| Main process | `src/main/index.ts` | `tsconfig.node.json` |
| Preload | `src/preload/index.ts` | `tsconfig.node.json` |
| Renderer | `src/renderer/src/main.tsx` | `tsconfig.web.json` |

## IPC Pattern

- Main handlers live in `src/main/index.ts` (or split into `src/main/ipc/`)
- Preload bridges them in `src/preload/index.ts` via `contextBridge`
- Types declared in `src/preload/index.d.ts` — extend `window.api`

## UI Components

- **ShadCN primitives** → `src/renderer/src/components/ui/`
- **agents-ui** (LiveKit voice agent) → `src/renderer/src/components/agents-ui/`
- **ai-elements** (chat/message) → `src/components/ai-elements/`

Add components with:
```bash
pnpm ui:add <component>
pnpm agents-ui:add <component>
pnpm ai-elements:add <component>
```

## Styling

- Tailwind v4 + ShadCN theme tokens in `src/renderer/src/assets/main.css`
- Dark mode enabled by default (`nativeTheme.themeSource = 'dark'` in main, `class="dark"` on `<html>`)
- Use `bg-background`, `text-foreground`, `border-border`, etc.

## Key Libraries

- `electron-log` — logging in main process, use `import log from './logger'`
- `electron-updater` — auto-update (configure publish URL in `electron-builder.yml`)
- `motion` — animations in renderer
- `lucide-react` — icons
- `livekit-client` + `@livekit/components-react` — for voice agent features
