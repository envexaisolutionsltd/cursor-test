import Hero from '../components/Hero'
import Schedule from '../components/Schedule'
import RecentlyPlayed from '../components/RecentlyPlayed'
import AboutSection from '../components/AboutSection'
import Sponsors from '../components/Sponsors'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RecentlyPlayed />
      <Schedule />
      <AboutSection />
      <Sponsors />
    </main>
  )
}
