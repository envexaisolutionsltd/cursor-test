import { Link } from 'react-router-dom'
import { ExternalLink, Beer } from 'lucide-react'

const pints = [
  {
    name: 'Selby American Pale',
    abv: '4.2% ABV',
    description: 'Our tribute to the delicious U.S grown hops, Cascade and Citra. Juicy, fruity and fabulous! Selby has a link with the Washington family of American Presidential fame — the Washington Heraldic arms is depicted in one of the stained glass windows of Selby Abbey, said to have inspired the stars on the USA flag.',
    label: 'Pint of the Week',
  },
  {
    name: 'New World Pale',
    abv: '3.7% ABV',
    description: 'A light, fruity little number. Beautifully hopped with U.S Cascade and Citra giving notes of tropical fruits. Super sessionable. A real "New World" exploration!',
    label: 'Previous Pint',
  },
  {
    name: 'Helles Lager',
    abv: '4.0% ABV',
    description: 'A beautifully balanced German Helles style cask lager. A light fruit aroma and refreshing taste makes this cask lager super quaffable. Available in Cask and Bag in box, and in Keg for a few extra bubbles.',
    label: 'Previous Pint',
  },
]

export default function SponsorsPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A huge thank you to the local businesses and organisations that make Selby Pulse Radio possible. Their support keeps community broadcasting alive.
          </p>
        </div>

        {/* Jolly Sailor Brewery */}
        <div className="glass-card p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden h-48 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Jolly Sailor Brewery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-2">
                <Beer className="w-7 h-7 text-accent" />
                <h2 className="text-3xl font-bold">Jolly Sailor Brewery</h2>
              </div>
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Established 2012</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Crafting exceptional ales and creating memorable experiences. A cornerstone of our local community with a passion for quality brewing. Jolly Sailor Brewery is proud to support Selby Pulse Radio and community broadcasting across the region.
              </p>

              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Beer className="w-5 h-5 text-accent" />
                Beers on Rotation
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {pints.map((pint, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${i === 0 ? 'text-accent' : 'text-slate-500'}`}>
                      {pint.label}
                    </span>
                    <h4 className="font-semibold mt-1 mb-0.5">{pint.name}</h4>
                    <p className="text-xs text-slate-500 mb-2">{pint.abv}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{pint.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OUR SPACE */}
        <div className="glass-card p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden h-48">
                <img
                  src="/OurSpace.png"
                  alt="OUR SPACE Selby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-3">OUR SPACE — Selby</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Home to the Selby Pulse Radio studio. OUR SPACE at 58 Flaxley Road is a creative community hub in the heart of Selby — the place where community radio comes to life every single day.
              </p>
              <address className="not-italic text-sm text-slate-400">
                58 Flaxley Road · Selby · YO8 4BW
              </address>
            </div>
          </div>
        </div>

        {/* Star Hot Pizza */}
        <div className="glass-card p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop"
                  alt="Star Hot Pizza"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-3">Star Hot Pizza</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Serving the Selby community with great food. Star Hot Pizza is a proud supporter of local radio and community events across Selby and the surrounding area.
              </p>
            </div>
          </div>
        </div>

        {/* Your Business Here CTA */}
        <div className="glass-card p-8 border-2 border-dashed border-white/20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-4">
            <ExternalLink className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Your Business Here</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Interested in sponsoring Selby Pulse Radio and reaching thousands of local listeners across Selby and North Yorkshire? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/advertise" className="btn-primary">See Advertising Packages</Link>
            <Link to="/contact" className="btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
