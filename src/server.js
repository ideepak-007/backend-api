import express from 'express';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';

//Import routes
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';
import watchListRoutes from './routes/watchListRoutes.js';

config();
connectDB();

const app = express();

//Body Parsing middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API Routes
app.use('/movies', movieRoutes);
app.use('/auth', authRoutes);
app.use('/watch-list', watchListRoutes);

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// Handle unhandled promise rejections i.e database connection errors
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Shutdown calmly Signal issue when app stops on production
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down calmly.');
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
