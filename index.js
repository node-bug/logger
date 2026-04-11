const fs = require('fs')
const path = require('path')
const {
  createLogger: createWinstonLogger,
  format,
  transports,
} = require('winston')

const { colorize, combine, timestamp, printf, splat, json, simple } = format
const DEFAULT_LOG_DIR = path.join(process.cwd(), 'logs')

function ensureLogDirectory(directory = DEFAULT_LOG_DIR) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }
}

function createLogger(options = {}) {
  const {
    level = 'debug',
    logDir = DEFAULT_LOG_DIR,
    console = process.env.NODE_ENV !== 'production',
    errorFilename = 'error.log',
    combinedFilename = 'combined.log',
  } = options

  ensureLogDirectory(logDir)

  const errorLogPath = path.join(logDir, errorFilename)
  const combinedLogPath = path.join(logDir, combinedFilename)

  const logger = createWinstonLogger({
    level,
    format: combine(splat(), simple()),
    transports: [
      new transports.File({
        filename: errorLogPath,
        level: 'error',
        format: combine(timestamp({ format: 'YYYY-MM-DD' }), json()),
      }),
      new transports.File({
        filename: combinedLogPath,
        level: 'debug',
        format: combine(timestamp({ format: 'YYYY-MM-DD' }), json()),
      }),
    ],
  })

  if (console) {
    logger.add(
      new transports.Console({
        format: combine(
          timestamp(),
          colorize(),
          printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
        ),
      }),
    )
  }

  return logger
}

const log = createLogger()

module.exports = { log, createLogger }
