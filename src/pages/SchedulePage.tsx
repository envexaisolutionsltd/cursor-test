import { useState } from 'react'
import { Play } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

interface Show {
  title: string
  description: string
}

const scheduleData: Record<string, Show[]> = {
  Monday: [
    { title: 'Morning Wake-Up', description: 'Wake up with local stories, chaos, and feel-good music.' },
    { title: 'Mid-Morning Mix', description: 'Non-stop anthems and massive singalong energy.' },
    { title: 'Afternoon Gold', description: 'Throwbacks, nostalgia, and hidden gems from every era.' },
    { title: 'Evening Reset', description: 'High-energy evening mix to reset your Monday mood.' },
  ],
  Tuesday: [
    { title: 'Breakfast Wake-Up', description: 'Morning wake-up with local stories and music.' },
    { title: 'Midday Chaos', description: 'Music, laughs, and unpredictable radio chaos.' },
    { title: 'Afternoon Drives', description: 'The best tracks to carry you through the afternoon.' },
    { title: 'Night Vibes', description: 'Relaxed and smooth sounds to close out the day.' },
  ],
  Wednesday: [
    { title: 'Mid-Week Morning', description: 'Mid-morning energy, stories, and feel-good tracks.' },
    { title: 'Discovery Hour', description: 'Hidden gems, big hits, and feel-good discoveries.' },
    { title: 'Hump Day Drive', description: 'Getting you over the mid-week hump with great music.' },
    { title: 'Wednesday Chill', description: 'Wind down with laid-back sounds and good conversation.' },
  ],
  Thursday: [
    { title: 'Thursday Morning', description: 'Classic morning mix to get your day moving.' },
    { title: 'Soul & Smooth', description: 'Relaxed soul, smooth vibes, and calming energy.' },
    { title: 'Throwback Thursday', description: 'Nostalgia hour — the hits you grew up with.' },
    { title: 'Late Night Grooves', description: 'Easing into the weekend with the right sounds.' },
  ],
  Friday: [
    { title: 'Friday Feeling', description: 'Start your Friday with music and morning energy.' },
    { title: 'Flashback Friday', description: 'Throwbacks, nostalgia, and feel-good Friday vibes.' },
    { title: 'Weekend Warm-Up', description: 'The biggest tunes to kick off your weekend.' },
    { title: 'Friday Night Party', description: 'High-energy party anthems all night long.' },
  ],
  Saturday: [
    { title: 'Weekend Wake-Up', description: 'Start your Saturday right with feel-good tracks.' },
    { title: 'Saturday Sounds', description: 'A full mix of music for your weekend.' },
    { title: 'Local & Live', description: 'Spotlighting local artists and community stories.' },
    { title: 'Saturday Night', description: 'The soundtrack to your Saturday evening.' },
  ],
  Sunday: [
    { title: 'Sunday Morning', description: 'Gentle and chilled — the perfect Sunday start.' },
    { title: 'Sunday Requests', description: 'Your songs, your station. Request your favourites.' },
    { title: 'Oldies Gold', description: 'Classic hits from across the decades.' },
    { title: 'Sunday Wind-Down', description: 'Closing out the weekend with the best sounds.' },
  ],
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function SchedulePage() {
  const today = days[(new Date().getDay() + 6) % 7]
  const [activeDay, setActiveDay] = useState(today)
  const { play } = useAudio()

  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Schedule</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tap a day to explore what's on air at Selby Pulse Radio.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex rounded-xl bg-white/5 p-1 gap-1">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeDay === day
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {day}
                {day === today && activeDay !== day && (
                  <span className="ml-1.5 w-1.5 h-1.5 inline-block rounded-full bg-accent align-middle" />
                )}
              </button>
            ))}
          </div>
        </div>

        {activeDay === today && (
          <div className="flex items-center gap-2 justify-center mb-6">
            <div className="live-beacon" />
            <span className="text-sm text-slate-400">Broadcasting live today</span>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scheduleData[activeDay]?.map((show, index) => (
            <div
              key={show.title}
              className={`glass-card p-5 hover-lift ${
                index === 0 && activeDay === today ? 'ring-2 ring-accent' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base">{show.title}</h3>
                  {index === 0 && activeDay === today && (
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="live-beacon" />
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">On Air Now</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={play}
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                  aria-label="Listen live"
                >
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </button>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{show.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
