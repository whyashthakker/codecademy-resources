'use client'

import { useState, useEffect } from 'react'
import NoteCard from '@/components/NoteCard'
import AddNoteForm from '@/components/AddNoteForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BookOpen, Sparkles } from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [addDialogOpen, setAddDialogOpen] = useState(false)

  useEffect(() => {
    fetchNotes()
  }, [])



  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/notes')
      const data = await response.json()
      setNotes(data)
    } catch (error) {
      console.error('Failed to fetch notes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddNote = async (title: string, content: string) => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      })
      
      if (response.ok) {
        fetchNotes()
      } else {
        const errorData = await response.json()
        console.error('Failed to add note:', errorData.error)
      }
    } catch (error) {
      console.error('Failed to add note:', error)
    }
  }

  const handleUpdateNote = async (id: string, title: string, content: string) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      })
      
      if (response.ok) {
        fetchNotes()
      } else {
        const errorData = await response.json()
        console.error('Failed to update note:', errorData.error)
      }
    } catch (error) {
      console.error('Failed to update note:', error)
    }
  }

  const handleDeleteNote = async (id: string) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        setNotes(notes.filter(note => note.id !== id))
      } else {
        console.error('Failed to delete note')
      }
    } catch (error) {
      console.error('Failed to delete note:', error)
    }
  }



  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8f7e5 100%)' }}>
        <div className="text-center">
          <div className="relative">
            <BookOpen className="text-blue-600 mx-auto mb-4 animate-pulse" size={48} />
            <Sparkles className="absolute -top-2 -right-2 text-purple-500 animate-spin" size={20} />
          </div>
          <div className="text-xl text-gray-600 font-medium">Loading your notes...</div>
          <div className="text-sm text-gray-500 mt-2">Getting everything ready</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen transition-all duration-300" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8f7e5 100%)' }}>
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <main className="container mx-auto px-4 py-8 z-10 relative mt-8">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-5xl font-bold text-black mb-4">
              Your Digital Notebook
            </h2>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="text-pink-500 animate-pulse" size={24} />
            </div>
          </div>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Capture your thoughts, ideas, and inspiration in beautiful, organized notes. 
            Let your creativity flow freely.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <AddNoteForm onAdd={handleAddNote} isOpen={addDialogOpen} setIsOpen={setAddDialogOpen} />

          {filteredNotes.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative inline-block mb-6">
                <BookOpen className="mx-auto text-gray-400" size={64} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {searchTerm ? 'No notes found' : 'Your notebook is empty'}
              </h3>
              <p className="text-gray-500 text-lg mb-8">
                {searchTerm 
                  ? 'Try searching with different keywords or create a new note.' 
                  : 'Start your journey by creating your first note!'
                }
              </p>
              {!searchTerm && (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium animate-pulse cursor-pointer"
                  onClick={() => setAddDialogOpen(true)}
                >
                  <Sparkles size={20} />
                  Click "Add New Note" to get started
                </div>
              )}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredNotes.map((note, index) => (
                <div
                  key={note.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >

                  <NoteCard
                    note={note}
                    onUpdate={handleUpdateNote}
                    onDelete={handleDeleteNote}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}