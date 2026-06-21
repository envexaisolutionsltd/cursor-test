import { Play } from 'lucide-react'
import { useAudio } from '../context/AudioContext'
import { Link } from 'react-router-dom'

interface Show {
  title: string
  description: string
  isLive?: boolean
}

const todayShows: Show[] = [
  { title: 'Morning Wake-Up', description: 'Wake up with local stories, chaos, and feel-good music.', isLive: true },
  { title: 'Mid-Morning Mix', description: 'Non-stop anthems and massive singalong energy.' },
  { title: 'Afternoon Anthems', description: 'Throwbacks, nostalgia, and hidden gems from every era.' },
  { title: 'Evening Sessions', description: 'High-energy mix to wind down your day with great vibes.' },
]

function ShowCard({ show }: { show: Show }) {
  const { play, isPlaying } = useAudio()

  return (
    <div className={`glass-card p-5 hover-lift ${show.isLive ? 'ring-2 ring-accent' : ''}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{show.title}</h3>
          {show.isLive && (
            <div className="flex items-center gap-2 mt-1">
              <div className="live-beacon" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">On Air Now</span>
            </div>
          )}
        </div>
        <button
          onClick={play}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            show.isLive && isPlaying
              ? 'bg-accent shadow-lg shadow-accent/25 scale-110'
              : 'bg-white/10 hover:bg-accent'
          }`}
          aria-label="Listen live"
        >
          <Play className="w-4 h-4 text-white ml-0.5" />
        </button>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{show.description}</p>
    </div>
  )
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-1">What's On Today</h2>
            <p className="text-slate-500 text-sm">Tap a show to listen live</p>
          </div>
          <Link to="/schedule" className="btn-outline text-sm px-4 py-2">
            Full Schedule
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {todayShows.map(show => (
            <ShowCard key={show.title} show={show} />
          ))}
        </div>
      </div>
    </section>
  )
}
