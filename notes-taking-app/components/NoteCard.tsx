import { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from './ui/dialog'

interface NoteCardProps {
  note: {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
  }
  onUpdate: (id: string, title: string, content: string) => void
  onDelete: (id: string) => void
}

export default function NoteCard({ note, onUpdate, onDelete }: NoteCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [summary, setSummary] = useState<string | null>(null)
  const [summarizing, setSummarizing] = useState(false)
  const [summaryError, setSummaryError] = useState<string | null>(null)

  const handleEdit = () => {
    setIsEditing(true)
    setTitle(note.title)
    setContent(note.content)
  }

  const handleSave = () => {
    onUpdate(note.id, title, content)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTitle(note.title)
    setContent(note.content)
  }

  const handleSummarize = async () => {
    setSummarizing(true)
    setSummaryError(null)
    setSummary(null)
    try {
      const res = await fetch(`/api/notes/summarize/${note.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: note.content }),
      })
      const data = await res.json()
      if (res.ok && data.summary) {
        setSummary(data.summary)
        // Update the note in the database
        await fetch(`/api/notes/${note.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: note.title, content: data.summary }),
        })
        // Update local state/UI
        setContent(data.summary)
      } else {
        setSummaryError(data.error || 'Failed to summarize')
      }
    } catch (err) {
      setSummaryError('Failed to summarize')
    } finally {
      setSummarizing(false)
    }
  }

  return (
    <>
      <div
        className="bg-white rounded-2xl shadow-xl p-6 min-h-[260px] max-w-sm w-full flex flex-col justify-between cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl border border-gray-100 relative group"
        onClick={e => {
          // Prevent opening dialog when clicking on buttons
          if ((e.target as HTMLElement).closest('button')) return
          setDialogOpen(true)
        }}
      >
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-2 truncate" title={note.title}>{note.title}</h3>
          <p className="text-gray-700 text-base line-clamp-3 mb-4">{note.content}</p>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-400">{new Date(note.updatedAt).toLocaleDateString()}</span>
          <div className="flex gap-2">
            <button
              className="p-2 rounded-lg hover:bg-blue-50 border border-blue-100 transition"
              onClick={e => { e.stopPropagation(); handleEdit(); setDialogOpen(true); }}
              title="Edit"
            >
              <Pencil size={18} className="text-blue-600" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-red-50 border border-red-100 transition"
              onClick={e => { e.stopPropagation(); onDelete(note.id); }}
              title="Delete"
            >
              <Trash2 size={18} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-black">{isEditing ? 'Edit Note' : note.title}</DialogTitle>
            <DialogClose onClick={() => { setDialogOpen(false); setIsEditing(false); }} />
          </DialogHeader>
          <div className="max-h-[70vh] overflow-y-auto pr-2">
          {isEditing ? (
            <form
              onSubmit={e => { e.preventDefault(); handleSave(); setDialogOpen(false); }}
              className="space-y-4"
            >
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
              <textarea
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              />
              <DialogFooter>
                <button
                  type="button"
                  onClick={() => { handleCancel(); setDialogOpen(false); }}
                  className="px-5 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors"
                >
                  Save
                </button>
              </DialogFooter>
            </form>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">{note.title}</h2>
              <p className="text-gray-800 whitespace-pre-line text-base">{summary !== null ? summary : content}</p>
              <div className="flex items-center gap-2 mb-2">
                <button
                  className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors text-sm font-semibold disabled:opacity-60"
                  onClick={handleSummarize}
                  disabled={summarizing}
                >
                  {summarizing ? 'Summarizing...' : 'Summarize'}
                </button>
                {summaryError && <span className="text-red-500 text-sm">{summaryError}</span>}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-400">{new Date(note.updatedAt).toLocaleDateString()}</span>
                <div className="flex gap-2">
                  <button
                    className="p-2 rounded-lg hover:bg-blue-50 border border-blue-100 transition"
                    onClick={() => { setIsEditing(true); }}
                    title="Edit"
                  >
                    <Pencil size={18} className="text-blue-600" />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-red-50 border border-red-100 transition"
                    onClick={() => { onDelete(note.id); setDialogOpen(false); }}
                    title="Delete"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}