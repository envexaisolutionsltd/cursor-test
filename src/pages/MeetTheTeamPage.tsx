import { Mic, Settings, Paintbrush, Star } from 'lucide-react'

const leadership = [
  {
    name: 'Addison',
    role: 'Station Manager, Founder, CEO & Presenter',
    icon: Star,
    description: 'The driving force behind Selby Pulse Radio — Addison founded the station with a vision to give Selby its own community voice.',
  },
  {
    name: 'Vix',
    role: 'Presenter & Deputy Boss',
    icon: Mic,
    description: 'Vix keeps the station running smoothly as Deputy Station Manager while also being a fantastic on-air presenter.',
  },
  {
    name: 'Wayne',
    role: 'Media & Technical Officer',
    icon: Settings,
    description: 'Wayne ensures everything sounds and looks great — keeping the technical side of the station in top shape.',
  },
  {
    name: 'Jamie "Ghost"',
    role: 'Graphic & Web Designer',
    icon: Paintbrush,
    description: 'The creative mind behind the Selby Pulse visual identity — Ghost brings the station\'s brand to life.',
  },
]

const crew = [
  { name: 'Echo Mike', role: 'Presenter & crew' },
  { name: 'Jon', role: 'Presenter & crew' },
  { name: 'Emma', role: 'Presenter & crew' },
  { name: 'Max', role: 'Presenter & crew' },
  { name: 'Dan', role: 'Presenter & crew' },
  { name: 'Jamie', role: 'Presenter & crew' },
  { name: 'Frances', role: 'Presenter & crew' },
]

const avatarColors = [
  'from-teal-500 to-cyan-400',
  'from-blue-500 to-indigo-400',
  'from-emerald-500 to-teal-400',
  'from-cyan-500 to-blue-400',
  'from-sky-500 to-cyan-400',
  'from-teal-600 to-emerald-400',
  'from-cyan-600 to-teal-400',
]

export default function MeetTheTeamPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The passionate volunteers and presenters who make Selby Pulse Radio possible — every one of them giving their time to bring great community radio to Selby and beyond.
          </p>
        </div>

        {/* Leadership */}
        <h2 className="text-2xl font-bold mb-6">Leadership</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {leadership.map(member => (
            <div key={member.name} className="glass-card p-6 hover-lift text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-4">
                <member.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-medium mb-3">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Crew */}
        <h2 className="text-2xl font-bold mb-6">Presenters & Crew</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-12">
          {crew.map((member, i) => (
            <div key={member.name} className="glass-card p-4 hover-lift text-center">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl font-bold text-white">{member.name[0]}</span>
              </div>
              <h3 className="font-semibold text-sm">{member.name}</h3>
              <p className="text-slate-500 text-xs mt-0.5">Presenter</p>
            </div>
          ))}
        </div>

        {/* Previous Presenters note */}
        <div className="glass-card p-6 text-center">
          <h3 className="font-semibold text-lg mb-2">Previous Presenters</h3>
          <p className="text-slate-400 text-sm mb-4">
            We're grateful to everyone who has contributed to Selby Pulse Radio over the years. A huge thank you to all our previous presenters and volunteers.
          </p>
        </div>

        {/* Join CTA */}
        <div className="mt-8 glass-card p-8 text-center bg-gradient-to-r from-accent/10 to-transparent">
          <h3 className="text-2xl font-bold mb-3">Want to Join the Team?</h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            We're always looking for passionate people to help bring community radio to life. Whether on-air or behind the scenes, there's a role for you.
          </p>
          <a href="/join-team" className="btn-primary">See Available Roles</a>
        </div>
      </div>
    </main>
  )
}
