const fastify = require('fastify')({
    logger: true
})

const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    data: { type: 'array' }
                }
            }
        }
    }
}

// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ message: "Hello from temporary server on port 3008" });
});

fastify.get(`/api/data/:customerId`, opts, async (request, reply) => {
    console.log('request', request.params.customerId);
    reply.send({ data: ["Hello", "from", "temporary", "server"] });
});

fastify.post('/api/sendData', function (request, reply) {
    const message = request.payload.message;
    reply.send({ hello: 'I\'m directly from hidden server. Your message: ' + message  })
})

// Run the server!
fastify.listen({ port: 3008 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})