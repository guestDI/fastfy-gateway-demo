const verifyToken = require('../utils/verifyToken');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.statusCode = 401;
        res.end(JSON.stringify({ error: 'Unauthorized: No token provided' }));
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify the token using the verifyToken utility
        req.user = await verifyToken(token); // Attach the decoded user info to the request for downstream handlers
        next();
    } catch (error) {
        res.statusCode = 403;
        res.end(JSON.stringify({ error: 'Forbidden: Invalid token' }));
    }
};
