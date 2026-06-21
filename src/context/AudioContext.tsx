import { createContext, useContext, useState, useRef, useEffect, useCallback, type ReactNode } from 'react'

interface TrackInfo {
  title: string
  artist: string
  startTime: string
  artworkUrl: string
}

interface AudioContextType {
  isPlaying: boolean
  volume: number
  currentTrack: TrackInfo | null
  recentlyPlayed: TrackInfo[]
  listeners: number
  togglePlay: () => void
  setVolume: (volume: number) => void
  play: () => void
  pause: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const STREAM_URL = 'https://streamer.radio.co/s9c4686c03'
const RADIO_CO_API = 'https://public.radio.co/stations/s9c4686c03/status'

function parseTrack(raw: { title?: string; artwork_url?: string; start_time?: string } | undefined): TrackInfo | null {
  if (!raw?.title) return null
  const parts = raw.title.split(' - ')
  const artist = parts.length > 1 ? parts[0] : ''
  const title = parts.length > 1 ? parts.slice(1).join(' - ') : raw.title
  return {
    title,
    artist,
    startTime: raw.start_time ?? '',
    artworkUrl: raw.artwork_url ?? '',
  }
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.7)
  const [currentTrack, setCurrentTrack] = useState<TrackInfo | null>(null)
  const [recentlyPlayed, setRecentlyPlayed] = useState<TrackInfo[]>([])
  const [listeners, setListeners] = useState(0)

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(RADIO_CO_API)
      if (!res.ok) return
      const data = await res.json()

      const current = parseTrack(data.current_track)
      setCurrentTrack(current)

      const history: TrackInfo[] = (data.history ?? [])
        .slice(0, 6)
        .map((t: { title?: string; artwork_url?: string; start_time?: string }) => parseTrack(t))
        .filter(Boolean) as TrackInfo[]
      setRecentlyPlayed(history)

      if (typeof data.listeners === 'number') {
        setListeners(data.listeners)
      }
    } catch {
      // API unavailable — keep existing state
    }
  }, [])

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 30_000)
    return () => clearInterval(interval)
  }, [fetchStatus])

  useEffect(() => {
    const audio = new Audio(STREAM_URL)
    audio.crossOrigin = 'anonymous'
    audio.volume = volume
    audioRef.current = audio

    audio.addEventListener('playing', () => setIsPlaying(true))
    audio.addEventListener('pause', () => setIsPlaying(false))
    audio.addEventListener('error', () => setIsPlaying(false))

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
    audioRef.current?.play().catch(() => {})
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
  }, [])

  const togglePlay = useCallback(() => {
    if (isPlaying) pause()
    else play()
  }, [isPlaying, play, pause])

  const setVolume = useCallback((v: number) => {
    setVolumeState(Math.max(0, Math.min(1, v)))
  }, [])

  return (
    <AudioContext.Provider value={{
      isPlaying,
      volume,
      currentTrack,
      recentlyPlayed,
      listeners,
      togglePlay,
      setVolume,
      play,
      pause,
    }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioContext)
  if (!ctx) throw new Error('useAudio must be used within an AudioProvider')
  return ctx
}
