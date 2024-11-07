module.exports = {
    pathRegex: '',
    prefix: '/service2/:customerId',
    target: 'http://localhost:3008',
    urlRewrite: ({ params: { customerId } }) => `/api/data/${customerId}`,
    method: 'GET',
    destination: 'http://localhost:3008',
    hooks: {
        onRequest(req, res) {
            console.log(`Incoming request to Service 2: ${req.params.customerId}`);
        },
        onResponse(req, res, stream) {
            console.log('Response from service 2 received and sent back to client.');
            stream.pipe(res);
        },
        onError(req, res) {
            console.log('Error in processing request.');
            res.statusCode = 502;
            res.end('Bad Gateway');
        }
    }
};
