import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t border-gray-200"
      style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8f7e5 100%)' }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>© 2024 NotesApp. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition" title="GitHub">
              <Github className="text-gray-500" size={18} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition" title="Twitter">
              <Twitter className="text-gray-500" size={18} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition" title="Mail">
              <Mail className="text-gray-500" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}