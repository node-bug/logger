const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { createLogger } = require('../index')

const TEST_LOG_DIR = path.join(process.cwd(), 'logs')

describe('@nodebug/logger', () => {
  before(() => {
    if (fs.existsSync(TEST_LOG_DIR)) {
      fs.rmSync(TEST_LOG_DIR, { recursive: true, force: true })
    }
  })

  after(() => {
    if (fs.existsSync(TEST_LOG_DIR)) {
      fs.rmSync(TEST_LOG_DIR, { recursive: true, force: true })
    }
  })

  it('creates a logger with the default configuration', () => {
    const logger = createLogger({ logDir: TEST_LOG_DIR, console: false })

    assert.strictEqual(logger.level, 'debug')
    assert.ok(fs.existsSync(TEST_LOG_DIR), 'logs directory should exist')
    assert.strictEqual(logger.transports.length, 2)
    assert.ok(
      logger.transports.some(
        (t) => t.filename && t.filename.endsWith('error.log'),
      ),
    )
    assert.ok(
      logger.transports.some(
        (t) => t.filename && t.filename.endsWith('combined.log'),
      ),
    )
  })
})
