const cors = require('cors');

/**
 * CORS configuration for the API Gateway
 * Allows the React frontend to communicate with the Gateway securely.
 */
const corsOptions = {
    // In production, restrict this to your actual frontend domain
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);
