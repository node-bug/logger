// Test file for @nodebug/logger
import { log, createLogger } from '../index.js';

describe('Logger', () => {
  test('should export default logger', () => {
    expect(log).toBeDefined();
  });

  test('should export createLogger function', () => {
    expect(createLogger).toBeDefined();
    expect(typeof createLogger).toBe('function');
  });

  test('should be able to log messages', () => {
    expect(() => {
      log.info('Test message');
      log.error('Error message');
      log.warn('Warning message');
      log.debug('Debug message');
    }).not.toThrow();
  });

  test('should be able to create custom logger', () => {
    const customLogger = createLogger({
      level: 'info',
      console: false,
    });
    
    expect(customLogger).toBeDefined();
    expect(typeof customLogger).toBe('object');
  });
});