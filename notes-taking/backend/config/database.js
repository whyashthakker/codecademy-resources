const { v4: uuidv4 } = require('uuid');

class Database {
  constructor() {
    this.notes = [
      {
        id: uuidv4(),
        title: 'Welcome to Advanced Notes',
        content: 'This is your first note in the advanced notes app. You can organize notes with categories, add tags, and search through them.',
        category: 'General',
        tags: ['welcome', 'getting-started'],
        isPinned: false,
        isArchived: false,
        color: '#ffffff',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: uuidv4(),
        title: 'Features Overview',
        content: 'Advanced features include:\n• Categories for organization\n• Tags for better filtering\n• Pin important notes\n• Archive old notes\n• Color coding\n• Rich text support\n• Search functionality',
        category: 'Help',
        tags: ['features', 'help', 'overview'],
        isPinned: true,
        isArchived: false,
        color: '#e3f2fd',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
    
    this.categories = [
      { id: uuidv4(), name: 'General', color: '#9e9e9e', createdAt: new Date().toISOString() },
      { id: uuidv4(), name: 'Work', color: '#2196f3', createdAt: new Date().toISOString() },
      { id: uuidv4(), name: 'Personal', color: '#4caf50', createdAt: new Date().toISOString() },
      { id: uuidv4(), name: 'Ideas', color: '#ff9800', createdAt: new Date().toISOString() },
      { id: uuidv4(), name: 'Help', color: '#9c27b0', createdAt: new Date().toISOString() }
    ];
    
    this.tags = [
      { id: uuidv4(), name: 'welcome', usage: 1 },
      { id: uuidv4(), name: 'getting-started', usage: 1 },
      { id: uuidv4(), name: 'features', usage: 1 },
      { id: uuidv4(), name: 'help', usage: 1 },
      { id: uuidv4(), name: 'overview', usage: 1 }
    ];
  }

  getAllNotes() {
    return this.notes;
  }

  getNoteById(id) {
    return this.notes.find(note => note.id === id);
  }

  createNote(noteData) {
    const newNote = {
      id: uuidv4(),
      ...noteData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.notes.push(newNote);
    return newNote;
  }

  updateNote(id, noteData) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex === -1) return null;
    
    this.notes[noteIndex] = {
      ...this.notes[noteIndex],
      ...noteData,
      updatedAt: new Date().toISOString()
    };
    return this.notes[noteIndex];
  }

  deleteNote(id) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex === -1) return false;
    
    this.notes.splice(noteIndex, 1);
    return true;
  }

  searchNotes(query) {
    const lowercaseQuery = query.toLowerCase();
    return this.notes.filter(note => 
      note.title.toLowerCase().includes(lowercaseQuery) ||
      note.content.toLowerCase().includes(lowercaseQuery) ||
      note.category.toLowerCase().includes(lowercaseQuery) ||
      note.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  getNotesByCategory(category) {
    return this.notes.filter(note => note.category === category);
  }

  getNotesByTag(tag) {
    return this.notes.filter(note => note.tags.includes(tag));
  }

  getAllCategories() {
    return this.categories;
  }

  createCategory(categoryData) {
    const newCategory = {
      id: uuidv4(),
      ...categoryData,
      createdAt: new Date().toISOString()
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  getAllTags() {
    return this.tags;
  }

  updateTagUsage(tags) {
    tags.forEach(tagName => {
      const existingTag = this.tags.find(tag => tag.name === tagName);
      if (existingTag) {
        existingTag.usage++;
      } else {
        this.tags.push({
          id: uuidv4(),
          name: tagName,
          usage: 1
        });
      }
    });
  }
}

module.exports = new Database();