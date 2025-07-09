const express = require('express');
const NoteController = require('../controllers/noteController');
const { body, param, query } = require('express-validator');
const { handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// Validation rules
const noteValidation = [
  body('title').trim().isLength({ min: 1, max: 200 }).withMessage('Title must be between 1 and 200 characters'),
  body('content').trim().isLength({ min: 1, max: 10000 }).withMessage('Content must be between 1 and 10000 characters'),
  body('category').optional().trim().isLength({ min: 1, max: 100 }).withMessage('Category must be between 1 and 100 characters'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('tags.*').optional().trim().isLength({ min: 1, max: 50 }).withMessage('Each tag must be between 1 and 50 characters'),
  body('isPinned').optional().isBoolean().withMessage('isPinned must be a boolean'),
  body('isArchived').optional().isBoolean().withMessage('isArchived must be a boolean'),
  body('color').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Color must be a valid hex color code')
];

const updateNoteValidation = [
  body('title').optional().trim().isLength({ min: 1, max: 200 }).withMessage('Title must be between 1 and 200 characters'),
  body('content').optional().trim().isLength({ min: 1, max: 10000 }).withMessage('Content must be between 1 and 10000 characters'),
  body('category').optional().trim().isLength({ min: 1, max: 100 }).withMessage('Category must be between 1 and 100 characters'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('tags.*').optional().trim().isLength({ min: 1, max: 50 }).withMessage('Each tag must be between 1 and 50 characters'),
  body('isPinned').optional().isBoolean().withMessage('isPinned must be a boolean'),
  body('isArchived').optional().isBoolean().withMessage('isArchived must be a boolean'),
  body('color').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Color must be a valid hex color code')
];

const idValidation = [
  param('id').isUUID().withMessage('Invalid note ID format')
];

const searchValidation = [
  query('q').trim().isLength({ min: 1 }).withMessage('Search query is required')
];

// Routes
router.get('/', NoteController.getAllNotes);
router.get('/search', searchValidation, handleValidationErrors, NoteController.searchNotes);
router.get('/:id', idValidation, handleValidationErrors, NoteController.getNoteById);
router.post('/', noteValidation, handleValidationErrors, NoteController.createNote);
router.put('/:id', idValidation, updateNoteValidation, handleValidationErrors, NoteController.updateNote);
router.delete('/:id', idValidation, handleValidationErrors, NoteController.deleteNote);
router.patch('/:id/pin', idValidation, handleValidationErrors, NoteController.togglePin);
router.patch('/:id/archive', idValidation, handleValidationErrors, NoteController.toggleArchive);

module.exports = router;