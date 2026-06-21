import { Mic, Pen, ClipboardList, Sparkles, Check, Mail } from 'lucide-react'

const benefits = [
  {
    icon: Mic,
    title: 'Training & Mentorship',
    description: 'Whether you\'re new or experienced, we provide guidance on presenting, technical skills, and creative production.',
  },
  {
    icon: ClipboardList,
    title: 'Flexible Scheduling',
    description: 'Many roles are flexible to fit around school, college, work, or other commitments.',
  },
  {
    icon: Sparkles,
    title: 'Hands-On Experience',
    description: 'Work in a real radio studio and help run a live station broadcasting across Selby and North Yorkshire.',
  },
  {
    icon: Pen,
    title: 'Community & Networking',
    description: 'Connect with local businesses, listeners, and other broadcasters while making a real difference.',
  },
]

const roles = [
  {
    category: 'On-Air Roles',
    icon: Mic,
    positions: ['Presenter / DJ', 'Guest Host', 'Competition & Segment Coordinator'],
  },
  {
    category: 'Creative Roles',
    icon: Sparkles,
    positions: ['Producer / Show Content Creator', 'Social Media & Marketing Assistant'],
  },
  {
    category: 'Administrative Roles',
    icon: ClipboardList,
    positions: ['Sponsorship & Sales Coordinator', 'Volunteer Coordinator', 'Event & Community Liaison'],
  },
  {
    category: 'Special Projects',
    icon: Pen,
    positions: ['Podcast Producers', 'Feature Researchers', 'Short-term Creative Projects'],
  },
]

export default function JoinTeamPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join the Team</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            At Selby Pulse Radio, we're always looking for passionate, creative, and community-focused people to help us bring our station to life.
          </p>
        </div>

        <div className="glass-card p-8 mb-12">
          <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
            Whether you want to be on-air, help behind the scenes, or support our growing station — there's a role for you. From first-time broadcasters to experienced voices, everyone plays a part in bringing great radio to our listeners.
          </p>
        </div>

        {/* What We Offer */}
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map(benefit => (
            <div key={benefit.title} className="glass-card p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Available Roles */}
        <h2 className="text-2xl font-bold mb-6">Available Roles</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {roles.map(role => (
            <div key={role.category} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <role.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">{role.category}</h3>
              </div>
              <ul className="space-y-2">
                {role.positions.map(pos => (
                  <li key={pos} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {pos}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center bg-gradient-to-r from-accent/10 to-transparent">
          <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Ready to Get Involved?</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Get in touch and tell us about yourself and which role interests you. We'd love to welcome you to the Selby Pulse family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Get In Touch</a>
            <a href="mailto:selbypulseradio@gmail.com" className="btn-secondary">selbypulseradio@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}
