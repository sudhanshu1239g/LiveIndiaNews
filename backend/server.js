const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const app = require('./src/app');
const connectDB = require('./src/config/database');
const { connectRedis } = require('./src/config/redis');
const { startNewsWorker } = require('./src/services/newsService');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 8000;

// Create HTTP Server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        credentials: true
    }
});

// Database Connections
const startServer = async () => {
    try {
        await connectDB();
        await connectRedis();
        startNewsWorker(io);

        // Socket.io Connection Logic
        io.on('connection', (socket) => {
            console.log('⚡ New client connected:', socket.id);
            socket.on('disconnect', () => console.log('❌ Client disconnected'));
        });

        // Pass 'io' to app so it can be used in controllers if needed
        app.set('socketio', io);

        server.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();