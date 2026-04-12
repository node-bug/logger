# Contributing to @nodebug/config

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/config.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`

## Development Workflow

### Running Tests

```bash
npm test
```

### Code Linting

```bash
# Check for linting issues
npm run lint

# Automatically fix linting issues
npm run lint:fix
```

### Pre-commit Hooks

This project uses Husky for git hooks. Pre-commit hooks will automatically run linting on staged files.

## Code Style

- **Code Style**: Follows ESLint configuration (Prettier)
- **Formatting**: Prettier is configured for automatic formatting
- **Comments**: Use JSDoc for function documentation
- **EditorConfig**: Use the provided `.editorconfig` for consistent editor settings

## Making Changes

1. Make your changes in a feature branch
2. Ensure tests pass: `npm test`
3. Ensure linting passes: `npm run lint`
4. Commit with clear, descriptive messages
5. Push to your fork
6. Open a Pull Request

## Pull Request Guidelines

- Provide a clear description of what changes were made and why
- Reference any related issues (e.g., `Fixes #123`)
- Ensure all tests pass and linting is clean
- Include tests for new functionality
- Update documentation if necessary

## Testing Requirements

- All new features must include tests
- Tests should cover both happy paths and error cases
- Code coverage should not decrease
- Run `npm test` to verify all tests pass

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected behavior vs actual behavior
- Node.js version
- Operating system

## Commit Message Conventions

Use clear, descriptive commit messages:

```
Add feature: brief description
Fix bug: brief description
Docs: update README
Refactor: improve code organization
```

## Thank You!

Your contributions help make this project better for everyone.
