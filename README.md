# @nodebug/logger

A simple Winston-based logger helper for Node.js applications.

## Features

- Creates structured JSON logs for `error` and `combined` files
- Adds console output automatically when not in production
- Creates the `logs/` directory if it does not exist
- Exposes a configurable logger factory
- Supports Node.js `>=24`
- Zero dependencies beyond Winston
- Easy to use and configure

## Installation

```bash
npm install @nodebug/logger
```

## Usage

### Default Logger

```js
import { log } from '@nodebug/logger'

// Use the default logger
log.info('Application started')
log.error('Something went wrong')
```

### Custom Logger

```js
import { createLogger } from '@nodebug/logger'

// Create a custom logger
const customLogger = createLogger({
  level: 'info',
  logDir: './logs',
  console: true,
})

customLogger.error('Something went wrong')
```

### Custom Logger with Different Configuration

```js
import { createLogger } from '@nodebug/logger'

// Create a logger with custom file names
const customLogger = createLogger({
  level: 'debug',
  logDir: './my-logs',
  console: false,
  errorFilename: 'errors.log',
  combinedFilename: 'combined.log',
})

customLogger.info('Custom logger configured')
```

## API

### `createLogger(options)`

Returns a Winston logger instance.

Options:

- `level` — logger level (`debug`, `info`, `warn`, `error`) - default: `'debug'`
- `logDir` — directory for log files - default: `'logs'`
- `console` — boolean to enable console logging - default: `true` when not in production
- `errorFilename` — file name for error logs - default: `'error.log'`
- `combinedFilename` — file name for combined logs - default: `'combined.log'`

## Development

Make sure to install Husky and lint-staged first:

```bash
npm install --save-dev
```

To lint the code:

```bash
npm run lint
```

To format the code:

```bash
npm run format
```

Run tests:

```bash
npm test
```

The tests are now run with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).

## License

This project is licensed under the Mozilla Public License 2.0.# @nodebug/logger

```
MPL-2.0
```
