import { Play, Pause, Users, Radio } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

function AudioVisualizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="relative w-full h-64 sm:h-80">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div className={`absolute inset-0 rounded-full border-2 border-accent/30 ${isPlaying ? 'animate-ping' : ''}`} style={{ animationDuration: '2s' }} />
          <div className={`absolute inset-4 rounded-full border border-accent/40 ${isPlaying ? 'animate-ping' : ''}`} style={{ animationDuration: '2.5s' }} />
          <div className={`absolute inset-8 rounded-full border border-accent/50 ${isPlaying ? 'animate-ping' : ''}`} style={{ animationDuration: '3s' }} />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-2xl shadow-accent/30">
              <Radio className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 h-12">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-gradient-to-t from-accent to-accent-light rounded-full animate-equalizer"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '0.4s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const { isPlaying, listeners, togglePlay, currentShow } = useAudio()

  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className="live-beacon" />
              <span className="text-sm font-medium text-slate-300">
                Live Now: {currentShow?.presenter}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Sound,
              <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Your Community
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Selby's local radio station bringing you the best music, local news, and community events. Tune in and connect with your community.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={togglePlay}
                className="btn-primary text-lg px-8 py-4 group"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6" />
                    Pause Live
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Listen Live
                  </>
                )}
              </button>

              <a href="#schedule" className="btn-secondary text-lg px-8 py-4">
                View Schedule
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-slate-300">
                  <span className="font-bold text-white">{listeners.toLocaleString()}</span> listening now
                </span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-slate-300">24/7 Broadcasting</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <AudioVisualizer isPlaying={isPlaying} />
          </div>
        </div>
      </div>
    </section>
  )
}
