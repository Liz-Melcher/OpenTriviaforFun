const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './config/connection.ts';
import apiRoutes from './routes/api/index.ts';

const app = express(); // ✅ this needs to come before app.use()

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static('../client/dist'));
app.use(express.json());

// Routes
app.use('/api', apiRoutes); // ✅ correctly mounted API routes

// 404 fallback (optional but recommended)
app.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Sync DB and start server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
  });
});
