import {
  execa as execaOriginal,
  execaSync as execaSyncOriginal,
  execaCommand as execaCommandOriginal,
  execaCommandSync as execaCommandSyncOriginal,
  execaNode as execaNodeOriginal,
  $ as $Original,
  ExecaError,
  ExecaSyncError,
  parseCommandString,
  sendMessage,
  getOneMessage,
  getEachMessage,
  getCancelSignal,
} from 'execa'

export { parseCommandString }
export { ExecaError, ExecaSyncError }

export const execa = execaOriginal
export const execaSync = execaSyncOriginal
export const execaCommand = execaCommandOriginal
export const execaCommandSync = execaCommandSyncOriginal
export const execaNode = execaNodeOriginal
export const $ = $Original
export { sendMessage, getOneMessage, getEachMessage, getCancelSignal }
