const sponsors = [
  {
    id: '1',
    name: 'Selby District Council',
    logo: 'https://images.unsplash.com/photo-1497366216548-3d260e9080ef?w=200&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'The George Inn',
    logo: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Selby Motors',
    logo: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Morrison\'s Selby',
    logo: 'https://images.unsplash.com/photo/1604719312566-8912e9223299?w=200&h=100&fit=crop',
  },
  {
    id: '5',
    name: 'Selby College',
    logo: 'https://images.unsplash.com/photo-1523050855218-22350c967a7c?w=200&h=100&fit=crop',
  },
  {
    id: '6',
    name: 'Booths Selby',
    logo: 'https://images.unsplash.com/photo-1584553977803-afb865a8feb2?w=200&h=100&fit=crop',
  },
]

export default function Sponsors() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We're proud to work with these amazing local businesses and organizations.
            Interested in partnering with us? Get in touch!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map(sponsor => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center p-4 rounded-xl bg-white/5 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-white/10"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/advertise" className="btn-secondary">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  )
}
