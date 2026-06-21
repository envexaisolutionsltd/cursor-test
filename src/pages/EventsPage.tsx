import { Calendar, MapPin, Clock } from 'lucide-react'

const eventsData = [
  {
    id: '1',
    title: 'Live Music Night at The George Inn',
    location: 'The George Inn, Selby',
    date: '2024-01-20',
    time: '8:00 PM',
    description: 'Join us for an evening of live music featuring local bands and acoustic sessions.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop',
    price: 'Free Entry',
  },
  {
    id: '2',
    title: 'Selby Market Day Special',
    location: 'Selby Market Square',
    date: '2024-01-22',
    time: '9:00 AM - 4:00 PM',
    description: 'Special market day with live broadcasts from Selby Pulse Radio and local vendors.',
    image: 'https://images.unsplash.com/photo-1488229250624-1200c813247d?w=800&h=500&fit=crop',
    price: 'Free',
  },
  {
    id: '3',
    title: 'Kids Disco at Community Centre',
    location: 'Selby Community Centre',
    date: '2024-01-25',
    time: '5:00 PM - 7:00 PM',
    description: 'A fun disco session for kids aged 5-12 with games, prizes, and great music.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop',
    price: '£3 per child',
  },
  {
    id: '4',
    title: 'Selby Food Festival',
    location: 'Selby Town Centre',
    date: '2024-02-10',
    time: '10:00 AM - 6:00 PM',
    description: 'Annual food festival celebrating local produce, street food, and culinary demonstrations.',
    image: 'https://images.unsplash.com/photo-1555939594-3d6d51d6d6c4?w=800&h=500&fit=crop',
    price: 'Free Entry',
  },
  {
    id: '5',
    title: 'Charity Quiz Night',
    location: 'The Royal Oak, Selby',
    date: '2024-02-15',
    time: '7:30 PM',
    description: 'Test your knowledge and support local charities at this popular quiz night.',
    image: 'https://images.unsplash.com/photo-1529156655797-20b1dcb9dd38?w=800&h=500&fit=crop',
    price: '£5 per team',
  },
  {
    id: '6',
    title: 'Selby Pulse Radio Live Broadcast',
    location: 'Selby Abbey',
    date: '2024-02-20',
    time: '2:00 PM - 6:00 PM',
    description: 'Join us for a special live broadcast from the historic Selby Abbey with special guests.',
    image: 'https://images.unsplash.com/photo-1523050855218-22350c967a7c?w=800&h=500&fit=crop',
    price: 'Free',
  },
]

export default function EventsPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Events</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover what's happening in Selby and the surrounding area. From live music to community gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map(event => (
            <article key={event.id} className="glass-card overflow-hidden hover-lift group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-accent rounded-full text-xs font-semibold text-white">
                  {event.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
