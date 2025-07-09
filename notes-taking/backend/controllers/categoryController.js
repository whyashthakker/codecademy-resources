const database = require('../config/database');
const Category = require('../models/Category');
const ResponseHelper = require('../utils/responseHelper');

class CategoryController {
  static async getAllCategories(req, res) {
    try {
      const categories = database.getAllCategories();
      const formattedCategories = categories.map(category => Category.formatForResponse(category));
      
      ResponseHelper.success(res, formattedCategories, 'Categories retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve categories', 500, error.message);
    }
  }

  static async createCategory(req, res) {
    try {
      const { error, value } = Category.validate(req.body);
      
      if (error) {
        return ResponseHelper.badRequest(res, 'Validation failed', error.details);
      }

      const sanitizedData = Category.sanitize(value);
      
      // Check if category already exists
      const existingCategories = database.getAllCategories();
      const categoryExists = existingCategories.some(cat => cat.name.toLowerCase() === sanitizedData.name.toLowerCase());
      
      if (categoryExists) {
        return ResponseHelper.badRequest(res, 'Category already exists');
      }

      const newCategory = database.createCategory(sanitizedData);

      ResponseHelper.success(res, Category.formatForResponse(newCategory), 'Category created successfully', 201);
    } catch (error) {
      ResponseHelper.error(res, 'Failed to create category', 500, error.message);
    }
  }

  static async getCategoryStats(req, res) {
    try {
      const categories = database.getAllCategories();
      const notes = database.getAllNotes();

      const categoryStats = categories.map(category => {
        const categoryNotes = notes.filter(note => note.category === category.name);
        return {
          ...Category.formatForResponse(category),
          notesCount: categoryNotes.length,
          pinnedCount: categoryNotes.filter(note => note.isPinned).length,
          archivedCount: categoryNotes.filter(note => note.isArchived).length
        };
      });

      ResponseHelper.success(res, categoryStats, 'Category statistics retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve category statistics', 500, error.message);
    }
  }
}

module.exports = CategoryController;