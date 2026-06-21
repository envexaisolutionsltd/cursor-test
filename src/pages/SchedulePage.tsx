import { useState } from 'react'
import { Clock, User, Play } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

interface Show {
  id: string
  title: string
  presenter: string
  time: string
  image: string
}

const scheduleData: Record<string, Show[]> = {
  Monday: [
    { id: 'm1', title: 'Breakfast Show', presenter: 'Sarah Johnson', time: '7:00 AM - 10:00 AM', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { id: 'm2', title: 'Midday Mix', presenter: 'Tom Williams', time: '10:00 AM - 1:00 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { id: 'm3', title: 'Afternoon Drive', presenter: 'DJ Marcus', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { id: 'm4', title: 'Evening Sessions', presenter: 'Emma Davis', time: '7:00 PM - 10:00 PM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  ],
  Tuesday: [
    { id: 't1', title: 'Breakfast Beats', presenter: 'Mike Thompson', time: '7:00 AM - 10:00 AM', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994da43?w=200&h=200&fit=crop&crop=face' },
    { id: 't2', title: 'Classic Hits', presenter: 'Lucy Brown', time: '10:00 AM - 1:00 PM', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
    { id: 't3', title: 'Drive Time', presenter: 'James Wilson', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { id: 't4', title: 'Night Vibes', presenter: 'Sophie Clark', time: '7:00 PM - 10:00 PM', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  ],
  Wednesday: [
    { id: 'w1', title: 'Morning Motivation', presenter: 'Sarah Johnson', time: '7:00 AM - 10:00 AM', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { id: 'w2', title: 'Local Legends', presenter: 'Tom Williams', time: '10:00 AM - 1:00 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { id: 'w3', title: 'The Request Show', presenter: 'DJ Marcus', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { id: 'w4', title: 'Indie Night', presenter: 'Emma Davis', time: '7:00 PM - 10:00 PM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  ],
  Thursday: [
    { id: 'th1', title: 'Breakfast Show', presenter: 'Mike Thompson', time: '7:00 AM - 10:00 AM', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994da43?w=200&h=200&fit=crop&crop=face' },
    { id: 'th2', title: 'Throwback Thursday', presenter: 'Lucy Brown', time: '10:00 AM - 1:00 PM', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
    { id: 'th3', title: 'Afternoon Drive', presenter: 'James Wilson', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { id: 'th4', title: 'Dance Floor', presenter: 'Sophie Clark', time: '7:00 PM - 10:00 PM', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  ],
  Friday: [
    { id: 'f1', title: 'Friday Feeling', presenter: 'Sarah Johnson', time: '7:00 AM - 10:00 AM', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { id: 'f2', title: 'Chart Countdown', presenter: 'Tom Williams', time: '10:00 AM - 1:00 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { id: 'f3', title: 'Weekender Warmup', presenter: 'DJ Marcus', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { id: 'f4', title: 'Friday Night Party', presenter: 'Emma Davis', time: '7:00 PM - 12:00 AM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  ],
  Saturday: [
    { id: 's1', title: 'Weekend Wake Up', presenter: 'Mike Thompson', time: '9:00 AM - 12:00 PM', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994da43?w=200&h=200&fit=crop&crop=face' },
    { id: 's2', title: 'Saturday Sounds', presenter: 'Lucy Brown', time: '12:00 PM - 4:00 PM', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
    { id: 's3', title: 'Sports Coverage', presenter: 'James Wilson', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { id: 's4', title: 'Saturday Night Live', presenter: 'Sophie Clark', time: '7:00 PM - 12:00 AM', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  ],
  Sunday: [
    { id: 'su1', title: 'Sunday Morning', presenter: 'Sarah Johnson', time: '9:00 AM - 12:00 PM', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { id: 'su2', title: 'Oldies Gold', presenter: 'Tom Williams', time: '12:00 PM - 4:00 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { id: 'su3', title: 'Chill Out', presenter: 'DJ Marcus', time: '4:00 PM - 7:00 PM', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { id: 'su4', title: 'Sunday Requests', presenter: 'Emma Davis', time: '7:00 PM - 10:00 PM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  ],
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function SchedulePage() {
  const today = days[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]
  const [activeDay, setActiveDay] = useState(today)
  const { play } = useAudio()

  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Weekly Schedule</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Your complete guide to what's on Selby Pulse Radio this week.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto pb-4">
          <div className="inline-flex rounded-xl bg-white/5 p-1 gap-1">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeDay === day
                    ? 'bg-accent text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {scheduleData[activeDay]?.map((show, index) => (
            <div
              key={show.id}
              className="glass-card p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover-lift"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={show.image}
                  alt={show.presenter}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover"
                />
                {index === 0 && activeDay === today && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg">{show.title}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{show.presenter}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{show.time}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={play}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Play"
              >
                <Play className="w-4 h-4 text-white ml-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
