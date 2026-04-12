// Test file for @nodebug/logger
import { log, createLogger } from '../index.js'
import { expect } from 'chai'

describe('Logger', () => {
  it('should export default logger', () => {
    expect(log).to.be.ok
  })

  it('should export createLogger function', () => {
    expect(createLogger).to.be.ok
    expect(typeof createLogger).to.equal('function')
  })

  it('should be able to log messages', () => {
    expect(() => {
      log.info('Test message')
      log.error('Error message')
      log.warn('Warning message')
      log.debug('Debug message')
    }).not.to.throw()
  })

  it('should be able to create custom logger', () => {
    const customLogger = createLogger({
      level: 'info',
      console: false,
    })

    expect(customLogger).to.be.ok
    expect(typeof customLogger).to.equal('object')
  })
})
