import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AudioProvider } from './context/AudioContext'
import Navigation from './components/Navigation'
import AudioPlayer from './components/AudioPlayer'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SchedulePage from './pages/SchedulePage'
import SponsorsPage from './pages/SponsorsPage'
import AdvertisePage from './pages/AdvertisePage'
import CommunityHubPage from './pages/CommunityHubPage'
import MeetTheTeamPage from './pages/MeetTheTeamPage'
import BlogPage from './pages/BlogPage'
import JoinTeamPage from './pages/JoinTeamPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TcsPage from './pages/TcsPage'
import PrivacyPage from './pages/PrivacyPage'

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
                <Route path="/sponsors" element={<SponsorsPage />} />
                <Route path="/advertise" element={<AdvertisePage />} />
                <Route path="/community-hub" element={<CommunityHubPage />} />
                <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/join-team" element={<JoinTeamPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/tcs" element={<TcsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPage />} />
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
