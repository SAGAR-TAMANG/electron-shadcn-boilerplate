import { ElectronAPI } from '@electron-toolkit/preload'

interface API {
  ping: () => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}
