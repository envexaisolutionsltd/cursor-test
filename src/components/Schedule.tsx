import { useState } from 'react'
import { Clock, User, Play } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

interface Show {
  id: string
  title: string
  presenter: string
  time: string
  day: string
  image: string
  isLive?: boolean
}

const showsData: Show[] = [
  {
    id: '1',
    title: 'Breakfast Show',
    presenter: 'Sarah Johnson',
    time: '7:00 AM - 10:00 AM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '2',
    title: 'Midday Mix',
    presenter: 'Tom Williams',
    time: '10:00 AM - 1:00 PM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    isLive: true,
  },
  {
    id: '3',
    title: 'Afternoon Drive',
    presenter: 'DJ Marcus',
    time: '4:00 PM - 7:00 PM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '4',
    title: 'Evening Sessions',
    presenter: 'Emma Davis',
    time: '7:00 PM - 10:00 PM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
]

function ShowCard({ show }: { show: Show }) {
  const { play, isPlaying, currentShow } = useAudio()
  const isActive = show.isLive || (isPlaying && currentShow?.title === show.title)

  return (
    <div className={`glass-card p-4 hover-lift ${isActive ? 'ring-2 ring-accent' : ''}`}>
      <div className="relative">
        <img
          src={show.image}
          alt={show.presenter}
          className="w-full aspect-square object-cover rounded-xl mb-4"
        />
        {show.isLive && (
          <div className="absolute top-2 left-2 px-3 py-1 bg-red-500 rounded-full text-xs font-semibold text-white flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            LIVE
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-lg truncate">{show.title}</h3>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <User className="w-4 h-4" />
          <span className="truncate">{show.presenter}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock className="w-4 h-4" />
          <span>{show.time}</span>
        </div>

        <button
          onClick={play}
          className="w-full mt-3 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-accent transition-colors text-sm font-medium"
        >
          <Play className="w-4 h-4" />
          {show.isLive ? 'Listen Live' : 'Listen to Show'}
        </button>
      </div>
    </div>
  )
}

export default function Schedule() {
  const [activeTab, setActiveTab] = useState<'now' | 'upcoming'>('now')
  const { currentShow } = useAudio()

  return (
    <section id="schedule" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {currentShow ? 'On Air Now' : "What's On"}
          </h2>
          {currentShow && (
            <p className="text-accent text-lg font-medium">
              {currentShow.title} with {currentShow.presenter}
            </p>
          )}
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-white/5 p-1">
            <button
              onClick={() => setActiveTab('now')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'now' ? 'bg-accent text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              On Now
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'upcoming' ? 'bg-accent text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showsData.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/schedule" className="btn-outline">
            View Full Schedule
          </a>
        </div>
      </div>
    </section>
  )
}
