# @nodebug/logger

A simple Winston-based logger helper for Node.js applications.

## Features

- Creates structured JSON logs for `error` and `combined` files
- Adds console output automatically when not in production
- Creates the `logs/` directory if it does not exist
- Exposes a configurable logger factory
- Supports Node.js `>=14`

## Installation

```bash
npm install @nodebug/logger
```

## Usage

```js
const { log, createLogger } = require('@nodebug/logger')

log.info('Application started')

const customLogger = createLogger({
  level: 'info',
  logDir: './logs',
  console: true,
})

customLogger.error('Something went wrong')
```

## API

### `createLogger(options)`

Returns a Winston logger instance.

Options:

- `level` — logger level (`debug`, `info`, `warn`, `error`)
- `logDir` — directory for log files
- `console` — boolean to enable console logging
- `errorFilename` — file name for error logs
- `combinedFilename` — file name for combined logs

### `log`

A default logger instance created with production-aware console logging.

## Development

Install dependencies:

```bash
npm install
```

Run linting:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

Format source files:

```bash
npm run format
```

## License

This project is licensed under the Mozilla Public License 2.0.
