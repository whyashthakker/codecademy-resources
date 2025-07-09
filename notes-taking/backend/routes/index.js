const express = require('express');
const noteRoutes = require('./noteRoutes');
const categoryRoutes = require('./categoryRoutes');
const tagRoutes = require('./tagRoutes');

const router = express.Router();

// API routes
router.use('/notes', noteRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

module.exports = router;