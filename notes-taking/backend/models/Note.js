const Joi = require('joi');

const noteSchema = Joi.object({
  title: Joi.string().min(1).max(200).required(),
  content: Joi.string().min(1).max(10000).required(),
  category: Joi.string().min(1).max(100).default('General'),
  tags: Joi.array().items(Joi.string().min(1).max(50)).default([]),
  isPinned: Joi.boolean().default(false),
  isArchived: Joi.boolean().default(false),
  color: Joi.string().pattern(/^#[0-9A-F]{6}$/i).default('#ffffff')
});

const updateNoteSchema = Joi.object({
  title: Joi.string().min(1).max(200),
  content: Joi.string().min(1).max(10000),
  category: Joi.string().min(1).max(100),
  tags: Joi.array().items(Joi.string().min(1).max(50)),
  isPinned: Joi.boolean(),
  isArchived: Joi.boolean(),
  color: Joi.string().pattern(/^#[0-9A-F]{6}$/i)
});

class Note {
  static validate(noteData) {
    return noteSchema.validate(noteData);
  }

  static validateUpdate(noteData) {
    return updateNoteSchema.validate(noteData);
  }

  static sanitize(noteData) {
    return {
      title: noteData.title?.trim(),
      content: noteData.content?.trim(),
      category: noteData.category?.trim() || 'General',
      tags: Array.isArray(noteData.tags) ? noteData.tags.map(tag => tag.trim()).filter(tag => tag.length > 0) : [],
      isPinned: Boolean(noteData.isPinned),
      isArchived: Boolean(noteData.isArchived),
      color: noteData.color || '#ffffff'
    };
  }

  static formatForResponse(note) {
    return {
      id: note.id,
      title: note.title,
      content: note.content,
      category: note.category,
      tags: note.tags,
      isPinned: note.isPinned,
      isArchived: note.isArchived,
      color: note.color,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt
    };
  }
}

module.exports = Note;