module.exports = {
    prefix: '/service1',
    method: 'GET',
    target: 'http://localhost:3008',
    docs: {
        "name": "Public Service1",
        "endpoint": "/swagger.json",
        "type": "swagger"
    },
    hooks: {
        onRequest(req, res) {
            console.log('Incoming request to Service 1');
            res.end('Response from Service 1');
        },
        onResponse(req, res) {
            console.log('Response from Service 1');
        },
        onError(req, res) {
            res.statusCode = 504;
            res.end('Gateway Timeout');
        }
    }
};
