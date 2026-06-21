import { Link } from 'react-router-dom'
import { Heart, Mic, Newspaper, Music } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Local Presenters',
    description: 'From first-time broadcasters to experienced voices, everyone plays a part in bringing great radio to our listeners.',
  },
  {
    icon: Music,
    title: 'Great Music',
    description: 'An enjoyable audio adventure, taking you across the nation with sounds from around the globe.',
  },
  {
    icon: Newspaper,
    title: 'Community News',
    description: 'Keeping you informed with local news, interviews, events, and entertainment relevant to Selby.',
  },
  {
    icon: Heart,
    title: 'Made by Volunteers',
    description: 'Powered by a passionate team of volunteers and local supporters giving people opportunities to learn new skills.',
  },
]

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Made by the Community,
              <span className="block text-accent">for the Community</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Selby Pulse Radio is powered by a passionate team of volunteers, presenters, and local supporters. From first-time broadcasters to experienced voices behind the microphone, everyone plays a part in bringing great radio to our listeners.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We're proud to provide local news, music, interviews, events, and entertainment while giving people the opportunity to learn new skills, build confidence, and share their voice with the community.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Involved
            </Link>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/OurSpace.png"
                alt="Selby Pulse Radio Studio - Our Space at 58 Flaxley Road, Selby"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-slate-300 font-medium">Selby Pulse Studio</p>
              <p className="text-sm text-slate-500">Our Space · 58 Flaxley Road · Selby · YO8 4BW</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass-card p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
