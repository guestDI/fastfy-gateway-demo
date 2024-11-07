# fastfy-gateway-demo

## Description
This project sets up an API Gateway using Fast-Gateway and Fastify. The gateway proxies requests to one or more target services and supports features like route configuration, URL rewrites, authentication, rate limiting, and error handling.

### Requirements
- Node.js >= 12.x
- NPM or Yarn

### Installation

```
git clone <repository-url>
cd <repository-name>
npm install
```

### Project Structure
```
index.js — main entry file to start the API Gateway.
config/ — contains configuration files:
rateLimitConfig.js — settings for rate limiting.
routesConfig.js — route configuration.
middlewares/ — folder containing middleware files, such as authMiddleware.js for authentication.
```