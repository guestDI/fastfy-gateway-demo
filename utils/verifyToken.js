const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.O4ylyMNJhrivMozS3FI5CuZ8QO8fvPtG4GHJ9t47xj8'

module.exports = async (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'your-secret-key', (err, decoded) => {
            if (err) {
                return reject(new Error('Token verification failed'));
            }
            resolve(decoded);
        });
    });
};
