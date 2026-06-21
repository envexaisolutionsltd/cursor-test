import { Link } from 'react-router-dom'

const sponsors = [
  {
    id: '1',
    name: 'Jolly Sailor Brewery',
    description: 'Crafting exceptional ales and creating memorable experiences.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'OUR SPACE - Selby',
    description: 'Our home studio — a creative hub in the heart of Selby.',
    image: 'https://images.unsplash.com/photo-1497366216548-3d260e9080ef?w=300&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Star Hot Pizza',
    description: 'Serving the Selby community with great food since day one.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Your Business Here',
    description: 'Interested in sponsoring Selby Pulse Radio? Get in touch today.',
    image: null,
    placeholder: true,
  },
]

export default function Sponsors() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A huge thank you to the local businesses and organisations that support Selby Pulse Radio and help keep community broadcasting alive.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {sponsors.map(sponsor => (
            <div
              key={sponsor.id}
              className={`glass-card overflow-hidden hover-lift ${
                sponsor.placeholder ? 'border-2 border-dashed border-white/20' : ''
              }`}
            >
              {sponsor.image ? (
                <div className="h-32 overflow-hidden">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ) : (
                <div className="h-32 bg-white/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/10">?</span>
                </div>
              )}
              <div className="p-4">
                <h3 className={`font-semibold text-sm mb-1 ${sponsor.placeholder ? 'text-accent' : ''}`}>
                  {sponsor.name}
                </h3>
                <p className="text-xs text-slate-500">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/sponsors" className="btn-outline mr-4">
            View All Sponsors
          </Link>
          <Link to="/advertise" className="btn-secondary">
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  )
}
