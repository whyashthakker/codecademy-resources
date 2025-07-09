const express = require('express');
const TagController = require('../controllers/tagController');
const { query } = require('express-validator');
const { handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// Validation rules
const limitValidation = [
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100')
];

// Routes
router.get('/', TagController.getAllTags);
router.get('/stats', TagController.getTagStats);
router.get('/popular', limitValidation, handleValidationErrors, TagController.getPopularTags);

module.exports = router;