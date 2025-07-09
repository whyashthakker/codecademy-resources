const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  color: Joi.string().pattern(/^#[0-9A-F]{6}$/i).default('#9e9e9e')
});

class Category {
  static validate(categoryData) {
    return categorySchema.validate(categoryData);
  }

  static sanitize(categoryData) {
    return {
      name: categoryData.name?.trim(),
      color: categoryData.color || '#9e9e9e'
    };
  }

  static formatForResponse(category) {
    return {
      id: category.id,
      name: category.name,
      color: category.color,
      createdAt: category.createdAt
    };
  }
}

module.exports = Category;