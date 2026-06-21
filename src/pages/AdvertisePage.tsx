import { useState } from 'react'
import { ChevronDown, ChevronUp, Megaphone, Users, TrendingUp, Zap, Check } from 'lucide-react'

const packages = [
  {
    id: 'payg',
    name: 'Pay As You Go',
    tagline: 'One-off on-air advertising',
    features: [
      'Single on-air ad slot',
      'Broadcast to all listeners',
      'Quick turnaround (24–72 hours)',
      'Flexible ad length',
    ],
  },
  {
    id: 'show',
    name: 'Show Sponsor',
    tagline: 'Sponsor a specific programme',
    featured: true,
    features: [
      'Named sponsor of a chosen show',
      'Regular mentions throughout',
      'Associated with show content',
      'Monthly rolling basis',
      'Upgrade or cancel anytime',
    ],
  },
  {
    id: 'ally',
    name: 'Community Ally',
    tagline: 'Ongoing station supporter',
    features: [
      'General station-wide support',
      'Mentions across all shows',
      'Social media recognition',
      'Monthly rolling basis',
      'Can change messaging monthly',
    ],
  },
  {
    id: 'champion',
    name: 'Community Champion',
    tagline: 'Full visibility across the station',
    features: [
      'Full station-wide visibility',
      'Premium ad placement',
      'Social media campaign',
      'Event sponsorship included',
      'Custom ad production',
      'Monthly rolling basis',
    ],
  },
]

const faqs = [
  {
    q: 'How quickly will my advert go live?',
    a: 'Pay As You Go ads can usually go live within 24–72 hours depending on availability.',
  },
  {
    q: 'Can I change my advert later?',
    a: 'Yes — monthly packages allow changes to messaging or creative once per month.',
  },
  {
    q: 'What\'s the difference between Show Sponsorship and Community Ally?',
    a: 'Show Sponsorship is tied to a specific programme, while Community Ally is general station support across all shows and platforms.',
  },
  {
    q: 'Do I need to provide my own advert?',
    a: 'No — we can create and voice your advert for you, especially under higher-tier packages.',
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Yes — you can upgrade at any time and we will adjust your billing accordingly.',
  },
  {
    q: 'Can I provide my own audio file?',
    a: 'Yes — we can use your existing advert if it meets broadcast quality.',
  },
  {
    q: 'Why should I advertise on a smaller station instead of a big network?',
    a: 'You get a more engaged, local audience and direct support from presenters who genuinely care about their community.',
  },
  {
    q: 'Is there a minimum contract length for sponsorships?',
    a: 'No fixed contract length is required. Sponsorships operate on a monthly rolling basis, giving you full flexibility to upgrade, downgrade, or cancel whenever needed.',
  },
  {
    q: 'How can I get in contact?',
    a: 'You can contact us at selbypulseradio@gmail.com. Either Addison (Station Manager) or Vix (Deputy Station Manager) will reply to your query.',
  },
]

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-medium pr-4">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
          {faq.a}
        </div>
      )}
    </div>
  )
}

const stats = [
  { icon: Users, value: '5,000+', label: 'Weekly Listeners' },
  { icon: TrendingUp, value: '89%', label: 'Listener Engagement' },
  { icon: Zap, value: '24/7', label: 'Broadcast Schedule' },
]

export default function AdvertisePage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
            <Megaphone className="w-5 h-5" />
            <span className="text-sm font-medium">Advertising & Sponsorship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Advertise With Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Simple ways to advertise with us or support the station. Choose the option that suits your goals and reach thousands of local listeners across Selby and North Yorkshire.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-3">Packages</h2>
        <p className="text-slate-400 text-center mb-8">All packages run on a monthly rolling basis with no fixed contracts.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map(pkg => (
            <div
              key={pkg.id}
              className={`glass-card p-6 relative flex flex-col ${pkg.featured ? 'ring-2 ring-accent' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-xs font-semibold text-white whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-accent">{pkg.tagline}</p>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`w-full py-3 rounded-xl font-semibold text-center text-sm transition-colors block ${
                  pkg.featured
                    ? 'bg-accent text-white hover:bg-accent-light'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>

        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Whether you'd like to request a song, promote a local event, discuss advertising opportunities, or simply say hello — we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Contact Us</a>
            <a href="mailto:selbypulseradio@gmail.com" className="btn-secondary">selbypulseradio@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}
