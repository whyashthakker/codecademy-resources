import { useState } from 'react'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from './ui/dialog'

interface AddNoteFormProps {
  onAdd: (title: string, content: string) => void
  isOpen?: boolean
  setIsOpen?: (open: boolean) => void
}

export default function AddNoteForm({ onAdd, isOpen: controlledIsOpen, setIsOpen: controlledSetIsOpen }: AddNoteFormProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false)
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen
  const setIsOpen = controlledSetIsOpen !== undefined ? controlledSetIsOpen : setUncontrolledIsOpen
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      onAdd(title.trim(), content.trim())
      setTitle('')
      setContent('')
      setIsOpen(false)
    }
  }

  const handleClose = () => {
    setTitle('')
    setContent('')
    setIsOpen(false)
  }

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-5 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition-colors shadow"
      >
        <Plus size={18} />
        Add New Note
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Note</DialogTitle>
            <DialogClose onClick={handleClose} />
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black bg-white placeholder-gray-500"
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here..."
              className="w-full h-28 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-black bg-white placeholder-gray-500"
              required
            />
            
            <DialogFooter>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors"
              >
                Create Note
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}