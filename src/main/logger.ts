/**
 * Centralized logger for the Electron app.
 *
 * Log file location (all platforms):
 *   Windows : %TEMP%\electron-app-logs\main.log
 *   macOS   : $TMPDIR/electron-app-logs/main.log
 *   Linux   : /tmp/electron-app-logs/main.log
 *
 * Levels (lowest → highest): silly | debug | verbose | info | warn | error
 * In production, `debug` and below are suppressed in the file.
 * In development, everything is forwarded to the console as well.
 *
 * Usage anywhere in the main process:
 *   import log from '../logger'   (adjust relative depth)
 *   log.info('something happened')
 *   log.warn('be careful', { detail })
 *   log.error('boom', err)
 */

import log from 'electron-log/main'
import * as path from 'path'
import * as os from 'os'
import * as fs from 'fs'

// ─── Log directory ────────────────────────────────────────────────────────────
const LOG_DIR = path.join(os.tmpdir(), 'electron-app-logs')
fs.mkdirSync(LOG_DIR, { recursive: true })

// ─── File transport ──────────────────────────────────────────────────────────
log.transports.file.resolvePathFn = () => path.join(LOG_DIR, 'main.log')
log.transports.file.level = 'info'           // info / warn / error go to file
log.transports.file.maxSize = 5 * 1024 * 1024 // 5 MB, then rotated
log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}'

// ─── Console transport ───────────────────────────────────────────────────────
// Only active in dev; electron-vite sets NODE_ENV=development automatically.
log.transports.console.level = process.env.NODE_ENV === 'development' ? 'debug' : false

// ─── Override global console.* ───────────────────────────────────────────────
// This catches any stray console.log / .warn / .error from third-party modules.
log.initialize()

export default log
