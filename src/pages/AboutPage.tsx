import { Link } from 'react-router-dom'
import { Radio, Heart, Mic, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            An independent community radio station based in Selby, North Yorkshire — broadcasting for the people, by the people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Selby+Pulse+Logo+(2).png"
                alt="Selby Pulse Radio"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold">Selby Pulse Radio</h2>
                <p className="text-accent text-sm">Community Radio · Selby, North Yorkshire</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              We're a community radio station dedicated to bringing local voices, great music, community news and entertainment to Selby and the surrounding area.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Whether you're tuning in for your favourite presenter, discovering new music, or keeping up with what's happening locally, we're delighted to have you with us.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              At Selby Pulse, we are committed to making an enjoyable audio adventure, taking you across the nation with sounds from around the globe!
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/join-team" className="btn-primary">Join the Team</Link>
              <Link to="/meet-the-team" className="btn-secondary">Meet the Team</Link>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden mb-4">
              <img
                src="/OurSpace.png"
                alt="Selby Pulse Radio Studio"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold mb-1">Selby Pulse Studio</h3>
              <p className="text-sm text-slate-400">Our Space · 58 Flaxley Road · Selby · YO8 4BW</p>
              <p className="text-xs text-slate-500 mt-2">Licensed by PRS for Music and PPL</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Heart,
              title: 'Made by Volunteers',
              text: 'Powered by a passionate team of volunteers, presenters, and local supporters. From first-time broadcasters to experienced voices, everyone plays a part.',
            },
            {
              icon: Mic,
              title: 'Community First',
              text: 'We believe community radio should be accessible, inclusive and entertaining. We\'re here to inform, entertain and connect people across our community.',
            },
            {
              icon: Globe,
              title: 'Local & Global',
              text: 'Rooted in Selby, but reaching across the nation with sounds from around the globe. An enjoyable audio adventure for every listener.',
            },
          ].map(item => (
            <div key={item.title} className="glass-card p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center">
          <Radio className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Why Selby Pulse Radio?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We provide local news, music, interviews, events, and entertainment while giving people the opportunity to learn new skills, build confidence, and share their voice with the community. Thank you for listening and supporting local radio.
          </p>
        </div>
      </div>
    </main>
  )
}
