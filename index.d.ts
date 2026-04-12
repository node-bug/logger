import { Logger } from 'winston';

declare const log: Logger;
declare function createLogger(options?: {
  level?: string;
  logDir?: string;
  console?: boolean;
  errorFilename?: string;
  combinedFilename?: string;
}): Logger;

export { createLogger, log };