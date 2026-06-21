import { Music } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

export default function RecentlyPlayed() {
  const { recentlyPlayed } = useAudio()

  if (recentlyPlayed.length === 0) return null

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Music className="w-6 h-6 text-accent" />
          Recently Played
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {recentlyPlayed.map((track, i) => (
            <div key={i} className="glass-card p-3 flex flex-col gap-2 hover-lift">
              {track.artworkUrl ? (
                <img
                  src={track.artworkUrl}
                  alt={track.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              ) : (
                <div className="w-full aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                  <Music className="w-8 h-8 text-slate-600" />
                </div>
              )}
              <div className="min-w-0">
                {track.artist && (
                  <p className="text-xs text-accent truncate font-medium">{track.artist}</p>
                )}
                <p className="text-xs text-slate-300 truncate">{track.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
