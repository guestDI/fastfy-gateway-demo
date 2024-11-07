const gateway = require('fast-gateway');
const fastify = require('fastify')();
const rateLimitConfig = require('./config/rateLimitConfig');
const routesConfig = require('./config/routesConfig');
const authMiddleware = require('./middlewares/authMiddleware');

// Register rate limit settings with Fastify
fastify.register(require('@fastify/rate-limit'), rateLimitConfig);

// Initialize API Gateway
const server = gateway({
    middlewares: [authMiddleware],
    routes: routesConfig
});

// Start the Fastify server for rate limiting
fastify.listen({ port: 8084, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error('Error starting Fastify server:', err);
        process.exit(1);
    }
    console.log(`Fastify server for rate limiting is running at ${address}`);
});

// Start the API Gateway
server.start(8083)
    .then(() => console.log('API Gateway is running on port 8083'))
    .catch(err => {
        console.error('Error starting API Gateway:', err);
        process.exit(1);
    });