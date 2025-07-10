import { BookOpen } from 'lucide-react'

interface HeaderProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header
      className="w-full shadow-sm border-b border-gray-100 dark:border-gray-800 z-20 relative"
      style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8f7e5 100%)' }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-green-400 rounded-full p-2 flex items-center justify-center">
            <BookOpen className="text-white" size={28} />
          </div>
          <span className="text-2xl font-extrabold text-black tracking-tight">Explainx</span>
        </div>
        {/* Search Box */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black bg-white placeholder-gray-400"
          />
        </div>
        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-900 dark:bg-gray-800 text-white px-3 py-2 rounded-lg flex items-center gap-1 cursor-pointer select-none">
            EN <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </header>
  )
}