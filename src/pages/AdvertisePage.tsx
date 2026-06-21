import { Megaphone, Users, TrendingUp, Zap, Check } from 'lucide-react'

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: 50,
    period: 'per week',
    features: [
      '30-second ad slots (3x daily)',
      'Basic on-air mentions',
      'Website banner listing',
      'Social media shoutout',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 150,
    period: 'per week',
    featured: true,
    features: [
      '60-second ad slots (6x daily)',
      'Premium time slots available',
      'Website feature article',
      'Social media campaign',
      'Event sponsorship opportunities',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 300,
    period: 'per week',
    features: [
      'Custom ad production',
      'Unlimited daily slots',
      'Show sponsorship',
      'Full digital campaign',
      'Dedicated account manager',
      'Analytics & reporting',
    ],
  },
]

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
            <span className="text-sm font-medium">Partner with Selby Pulse</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Advertise With Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Reach thousands of local listeners across Selby and North Yorkshire. Build your brand with the community's trusted local radio station.
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

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Advertising Packages</h2>
          <p className="text-slate-400 mt-2">Choose the package that fits your business needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map(pkg => (
            <div
              key={pkg.id}
              className={`glass-card p-6 relative ${
                pkg.featured ? 'ring-2 ring-accent' : ''
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">£{pkg.price}</span>
                  <span className="text-slate-400">/{pkg.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  pkg.featured
                    ? 'bg-accent text-white hover:bg-accent-light'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Discuss Advertising Opportunities</h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Whether you'd like to promote a local event, discuss advertising opportunities, or simply say hello — we'd love to hear from you. Selby Pulse Radio is all about connecting with our community.
          </p>
          <a href="/contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  )
}
