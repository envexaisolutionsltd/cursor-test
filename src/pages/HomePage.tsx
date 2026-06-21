import Hero from '../components/Hero'
import Schedule from '../components/Schedule'
import NewsEvents from '../components/NewsEvents'
import AboutSection from '../components/AboutSection'
import Sponsors from '../components/Sponsors'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Schedule />
      <NewsEvents />
      <AboutSection />
      <Sponsors />
    </main>
  )
}
