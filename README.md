# Electron + ShadCN Boilerplate

A production-ready boilerplate for building Electron apps with a modern UI stack.

## Stack

- **Electron** with `electron-vite` for fast dev/build
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with dark mode
- **ShadCN UI** components (`src/renderer/src/components/ui/`)
- **agents-ui** — LiveKit voice agent UI components (`src/renderer/src/components/agents-ui/`)
- **ai-elements** — AI chat/message UI components (`src/components/ai-elements/`)

## Getting Started

```bash
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── main/              # Electron main process
│   ├── index.ts       # App entry, window/tray setup
│   └── logger.ts      # electron-log setup
├── preload/
│   ├── index.ts       # contextBridge API surface
│   └── index.d.ts     # Type declarations for window.api
└── renderer/
    └── src/
        ├── App.tsx            # Root component
        ├── main.tsx           # React entry
        ├── assets/main.css    # Tailwind + ShadCN theme
        └── components/
            ├── ui/            # ShadCN primitives
            └── agents-ui/     # LiveKit agent UI
```

## Adding UI Components

```bash
# Add a ShadCN component
pnpm ui:add button

# Add an agents-ui component
pnpm agents-ui:add agent-control-bar

# Add an ai-elements component
pnpm ai-elements:add conversation
```

## Building

```bash
pnpm build:linux
pnpm build:mac
pnpm build:win
```

## Adding IPC Channels

1. Add a handler in `src/main/index.ts`:
   ```ts
   ipcMain.handle('my-channel', async (_event, arg) => {
     return doSomething(arg)
   })
   ```

2. Expose it in `src/preload/index.ts`:
   ```ts
   const api = {
     myMethod: (arg: string) => ipcRenderer.invoke('my-channel', arg)
   }
   ```

3. Add the type in `src/preload/index.d.ts`.
