import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Advertise', path: '/advertise' },
  { name: 'Community', path: '/community-hub' },
  { name: 'Team', path: '/meet-the-team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Join Us', path: '/join-team' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/Selby+Pulse+Logo+(2).png"
              alt="Selby Pulse Radio"
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-lg leading-tight block">Selby Pulse</span>
              <span className="text-xs text-accent leading-tight block">Radio</span>
            </div>
          </Link>

          {/* Desktop nav — scrollable if needed */}
          <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-white bg-accent/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-colors text-sm ${
                    isActive(link.path)
                      ? 'bg-accent/20 text-white font-medium'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
