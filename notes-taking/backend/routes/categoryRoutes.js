const express = require('express');
const CategoryController = require('../controllers/categoryController');
const { body } = require('express-validator');
const { handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// Validation rules
const categoryValidation = [
  body('name').trim().isLength({ min: 1, max: 100 }).withMessage('Category name must be between 1 and 100 characters'),
  body('color').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Color must be a valid hex color code')
];

// Routes
router.get('/', CategoryController.getAllCategories);
router.get('/stats', CategoryController.getCategoryStats);
router.post('/', categoryValidation, handleValidationErrors, CategoryController.createCategory);

module.exports = router;