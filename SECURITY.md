# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.1.x   | :white_check_mark: |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in @nodebug/config, please email us at **nodebug@outlook.com** instead of using the issue tracker.

Please include:
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if any)

We appreciate your responsible disclosure and will work to address the issue promptly.

## Security Considerations

### Configuration Files

- Store sensitive configuration in environment variables rather than `.config/*.json` files
- Do not commit `.config/` directory to version control (use `.gitignore`)
- Use appropriate file permissions for `.config/` directory
- Avoid storing credentials in configuration files

### Environment Variables

- Use environment variables for sensitive data (database URLs, API keys, tokens)
- Prefix environment variables with your app name (e.g., `MYAPP_DB_PASSWORD`)
- Document required environment variables in your application's README

### Best Practices

- Always validate and sanitize configuration values before use
- Use the `defaults` parameter to ensure required values are always present
- Implement runtime validation for critical configuration values
- Keep Node.js and dependencies updated
- Review configuration files during security audits

## Dependencies

This project has minimal dependencies to reduce the attack surface:

- **rc** - Lightweight configuration management library used for environment variable and CLI argument parsing

We regularly audit dependencies for known vulnerabilities.

## Vulnerability Disclosure Timeline

- Upon receipt, we will acknowledge your report within 48 hours
- We will provide an initial assessment within 1 week
- We aim to release a fix within 2 weeks of confirmation
- The vulnerability will not be disclosed publicly until a fix is available

Thank you for helping keep @nodebug/config secure!
