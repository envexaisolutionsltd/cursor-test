import { Volume2, VolumeX, Play, Pause } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

function Equalizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-end gap-0.5 h-5">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`equalizer-bar ${isPlaying ? '' : 'h-1!'}`}
          style={{
            animationDelay: `${i * 0.1}s`,
            height: isPlaying ? undefined : '4px'
          }}
        />
      ))}
    </div>
  )
}

function ScrollingText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden relative">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
      </div>
    </div>
  )
}

export default function AudioPlayer() {
  const { isPlaying, volume, currentShow, listeners, togglePlay, setVolume } = useAudio()

  return (
    <div className="audio-bar">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/25 hover:scale-105 transition-transform"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <div className="live-beacon" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                Live
              </span>
              <span className="text-xs text-slate-500">
                {listeners.toLocaleString()} listening
              </span>
            </div>
            {currentShow && (
              <div className="mt-1 text-sm text-slate-300 max-w-xs">
                <ScrollingText text={`${currentShow.title} with ${currentShow.presenter}`} />
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2 ml-4">
            <Equalizer isPlaying={isPlaying} />
          </div>

          <div className="hidden md:flex items-center gap-3 ml-4 w-48">
            <button
              onClick={() => setVolume(volume === 0 ? 0.7 : 0)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={volume === 0 ? 'Unmute' : 'Mute'}
            >
              {volume === 0 ? (
                <VolumeX className="w-5 h-5 text-slate-400" />
              ) : (
                <Volume2 className="w-5 h-5 text-slate-300" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
