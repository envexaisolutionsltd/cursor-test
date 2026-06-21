import { createContext, useContext, useState, useRef, useEffect, useCallback, type ReactNode } from 'react'

interface AudioState {
  isPlaying: boolean
  volume: number
  currentShow: {
    title: string
    presenter: string
    time: string
  } | null
  listeners: number
}

interface AudioContextType extends AudioState {
  togglePlay: () => void
  setVolume: (volume: number) => void
  play: () => void
  pause: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const STREAM_URL = 'https://streamer.radio.co/s9c4686c03'

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.7)
  const [currentShow] = useState({
    title: 'Afternoon Drive',
    presenter: 'DJ Marcus',
    time: '4:00 PM - 7:00 PM'
  })
  const [listeners] = useState(1247)

  useEffect(() => {
    const audio = new Audio(STREAM_URL)
    audio.crossOrigin = 'anonymous'
    audio.volume = volume
    audioRef.current = audio

    audio.addEventListener('playing', () => setIsPlaying(true))
    audio.addEventListener('pause', () => setIsPlaying(false))
    audio.addEventListener('error', (e) => {
      console.error('Audio error:', e)
      setIsPlaying(false)
    })

    return () => {
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Play error:', err)
      })
    }
  }, [])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }, [])

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, play, pause])

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)))
  }, [])

  return (
    <AudioContext.Provider value={{
      isPlaying,
      volume,
      currentShow,
      listeners,
      togglePlay,
      setVolume,
      play,
      pause
    }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
