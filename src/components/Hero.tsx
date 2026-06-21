import { Play, Pause, Users, MapPin } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

function AudioVisualizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="relative w-full h-72 flex items-center justify-center">
      <div className="relative">
        {[96, 72, 48].map((size, i) => (
          <div
            key={i}
            className={`absolute rounded-full border border-accent/30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-1000 ${isPlaying ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}`}
            style={{
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              animation: isPlaying ? `pulse ${2 + i * 0.5}s ease-in-out infinite` : 'none',
            }}
          />
        ))}

        <div className="relative w-40 h-40">
          <img
            src="/Selby+Pulse+Logo+(2).png"
            alt="Selby Pulse Radio"
            className={`w-full h-full object-contain transition-all duration-700 ${isPlaying ? 'drop-shadow-[0_0_24px_rgba(20,184,166,0.6)] scale-105' : 'opacity-90'}`}
          />
        </div>
      </div>

      {isPlaying && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 h-12">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 bg-gradient-to-t from-accent to-accent-light rounded-full animate-equalizer"
              style={{
                animationDelay: `${i * 0.04}s`,
                animationDuration: `${0.3 + (i % 4) * 0.1}s`,
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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <div className="live-beacon" />
              <span className="text-sm font-medium text-accent">
                Broadcasting Live Now
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome to
              <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Selby Pulse Radio
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-3 max-w-xl mx-auto lg:mx-0">
              A community radio station dedicated to bringing local voices, great music, community news and entertainment to Selby and the surrounding area.
            </p>

            {currentShow && (
              <p className="text-slate-500 text-sm mb-8 flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-accent font-medium">{currentShow.title}</span>
                <span>with {currentShow.presenter}</span>
                <span className="text-slate-600">·</span>
                <span>{currentShow.time}</span>
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={togglePlay}
                className="btn-primary text-lg px-8 py-4 group"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform ml-0.5" />
                    Listen Live
                  </>
                )}
              </button>

              <a href="/schedule" className="btn-secondary text-lg px-8 py-4">
                View Schedule
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-slate-300">
                  <span className="font-bold text-white">{listeners.toLocaleString()}</span> listening now
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-slate-400">Selby, North Yorkshire</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-slate-400">24/7 Broadcasting</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <AudioVisualizer isPlaying={isPlaying} />
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <p className="text-slate-300 leading-relaxed">
                "Whether you're tuning in for your favourite presenter, discovering new music, or keeping up with what's happening locally, we're delighted to have you with us."
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-slate-300 leading-relaxed">
                "We believe community radio should be accessible, inclusive and entertaining. Our volunteers and presenters work hard to create programmes that inform, entertain and connect people."
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-slate-300 leading-relaxed">
                "Made by the community, for the community. Powered by a passionate team of volunteers, presenters, and local supporters giving people the opportunity to share their voice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
