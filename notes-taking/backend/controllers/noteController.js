const database = require('../config/database');
const Note = require('../models/Note');
const ResponseHelper = require('../utils/responseHelper');

class NoteController {
  static async getAllNotes(req, res) {
    try {
      const { category, tag, search, isPinned, isArchived, sortBy = 'updatedAt', sortOrder = 'desc' } = req.query;
      
      let notes = database.getAllNotes();

      // Apply filters
      if (category) {
        notes = notes.filter(note => note.category === category);
      }

      if (tag) {
        notes = notes.filter(note => note.tags.includes(tag));
      }

      if (search) {
        notes = database.searchNotes(search);
      }

      if (isPinned !== undefined) {
        notes = notes.filter(note => note.isPinned === (isPinned === 'true'));
      }

      if (isArchived !== undefined) {
        notes = notes.filter(note => note.isArchived === (isArchived === 'true'));
      }

      // Apply sorting
      notes.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        
        if (sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      const formattedNotes = notes.map(note => Note.formatForResponse(note));
      
      ResponseHelper.success(res, formattedNotes, 'Notes retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve notes', 500, error.message);
    }
  }

  static async getNoteById(req, res) {
    try {
      const { id } = req.params;
      const note = database.getNoteById(id);

      if (!note) {
        return ResponseHelper.notFound(res, 'Note not found');
      }

      ResponseHelper.success(res, Note.formatForResponse(note), 'Note retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve note', 500, error.message);
    }
  }

  static async createNote(req, res) {
    try {
      const { error, value } = Note.validate(req.body);
      
      if (error) {
        return ResponseHelper.badRequest(res, 'Validation failed', error.details);
      }

      const sanitizedData = Note.sanitize(value);
      const newNote = database.createNote(sanitizedData);

      // Update tag usage
      if (sanitizedData.tags && sanitizedData.tags.length > 0) {
        database.updateTagUsage(sanitizedData.tags);
      }

      ResponseHelper.success(res, Note.formatForResponse(newNote), 'Note created successfully', 201);
    } catch (error) {
      ResponseHelper.error(res, 'Failed to create note', 500, error.message);
    }
  }

  static async updateNote(req, res) {
    try {
      const { id } = req.params;
      const { error, value } = Note.validateUpdate(req.body);

      if (error) {
        return ResponseHelper.badRequest(res, 'Validation failed', error.details);
      }

      const sanitizedData = Note.sanitize(value);
      const updatedNote = database.updateNote(id, sanitizedData);

      if (!updatedNote) {
        return ResponseHelper.notFound(res, 'Note not found');
      }

      // Update tag usage
      if (sanitizedData.tags && sanitizedData.tags.length > 0) {
        database.updateTagUsage(sanitizedData.tags);
      }

      ResponseHelper.success(res, Note.formatForResponse(updatedNote), 'Note updated successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to update note', 500, error.message);
    }
  }

  static async deleteNote(req, res) {
    try {
      const { id } = req.params;
      const deleted = database.deleteNote(id);

      if (!deleted) {
        return ResponseHelper.notFound(res, 'Note not found');
      }

      ResponseHelper.success(res, null, 'Note deleted successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to delete note', 500, error.message);
    }
  }

  static async searchNotes(req, res) {
    try {
      const { q } = req.query;

      if (!q) {
        return ResponseHelper.badRequest(res, 'Search query is required');
      }

      const notes = database.searchNotes(q);
      const formattedNotes = notes.map(note => Note.formatForResponse(note));

      ResponseHelper.success(res, formattedNotes, 'Search completed successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to search notes', 500, error.message);
    }
  }

  static async togglePin(req, res) {
    try {
      const { id } = req.params;
      const note = database.getNoteById(id);

      if (!note) {
        return ResponseHelper.notFound(res, 'Note not found');
      }

      const updatedNote = database.updateNote(id, { isPinned: !note.isPinned });
      
      ResponseHelper.success(res, Note.formatForResponse(updatedNote), 'Note pin status updated');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to toggle pin status', 500, error.message);
    }
  }

  static async toggleArchive(req, res) {
    try {
      const { id } = req.params;
      const note = database.getNoteById(id);

      if (!note) {
        return ResponseHelper.notFound(res, 'Note not found');
      }

      const updatedNote = database.updateNote(id, { isArchived: !note.isArchived });
      
      ResponseHelper.success(res, Note.formatForResponse(updatedNote), 'Note archive status updated');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to toggle archive status', 500, error.message);
    }
  }
}

module.exports = NoteController;