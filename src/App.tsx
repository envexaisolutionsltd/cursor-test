import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AudioProvider } from './context/AudioContext'
import Navigation from './components/Navigation'
import AudioPlayer from './components/AudioPlayer'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SchedulePage from './pages/SchedulePage'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'
import AdvertisePage from './pages/AdvertisePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/advertise" element={<AdvertisePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
            <Footer />
            <AudioPlayer />
          </div>
        </Router>
      </AudioProvider>
    </ThemeProvider>
  )
}
