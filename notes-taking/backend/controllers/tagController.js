const database = require('../config/database');
const ResponseHelper = require('../utils/responseHelper');

class TagController {
  static async getAllTags(req, res) {
    try {
      const tags = database.getAllTags();
      
      // Sort tags by usage (most used first)
      tags.sort((a, b) => b.usage - a.usage);
      
      ResponseHelper.success(res, tags, 'Tags retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve tags', 500, error.message);
    }
  }

  static async getTagStats(req, res) {
    try {
      const tags = database.getAllTags();
      const notes = database.getAllNotes();

      const tagStats = tags.map(tag => {
        const tagNotes = notes.filter(note => note.tags.includes(tag.name));
        return {
          ...tag,
          notesCount: tagNotes.length,
          pinnedCount: tagNotes.filter(note => note.isPinned).length,
          archivedCount: tagNotes.filter(note => note.isArchived).length
        };
      });

      // Sort by usage
      tagStats.sort((a, b) => b.usage - a.usage);

      ResponseHelper.success(res, tagStats, 'Tag statistics retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve tag statistics', 500, error.message);
    }
  }

  static async getPopularTags(req, res) {
    try {
      const { limit = 10 } = req.query;
      const tags = database.getAllTags();
      
      // Get most popular tags
      const popularTags = tags
        .sort((a, b) => b.usage - a.usage)
        .slice(0, parseInt(limit));

      ResponseHelper.success(res, popularTags, 'Popular tags retrieved successfully');
    } catch (error) {
      ResponseHelper.error(res, 'Failed to retrieve popular tags', 500, error.message);
    }
  }
}

module.exports = TagController;