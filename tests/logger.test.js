// Test file for @nodebug/logger
import { log, createLogger } from '../index.js'

describe('Logger', () => {
  it('should export default logger', () => {
    expect(log).toBeDefined()
  })

  it('should export createLogger function', () => {
    expect(createLogger).toBeDefined()
    expect(typeof createLogger).toBe('function')
  })

  it('should be able to log messages', () => {
    expect(() => {
      log.info('Test message')
      log.error('Error message')
      log.warn('Warning message')
      log.debug('Debug message')
    }).not.toThrow()
  })

  it('should be able to create custom logger', () => {
    const customLogger = createLogger({
      level: 'info',
      console: false,
    })

    expect(customLogger).toBeDefined()
    expect(typeof customLogger).toBe('object')
  })
})
