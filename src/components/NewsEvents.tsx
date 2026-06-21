import { Calendar, ArrowRight, Tag } from 'lucide-react'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  link: string
}

interface Event {
  id: string
  title: string
  location: string
  date: string
  time: string
  image: string
}

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Selby Community Centre Hosts Annual Charity Fundraiser',
    excerpt: 'Local volunteers raised over £5,000 for the Selby Food Bank at last weekend\'s community event.',
    date: '2024-01-15',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
    link: '/news/charity-fundraiser',
  },
  {
    id: '2',
    title: 'New Youth Music Program Launches in Selby',
    excerpt: 'Free music lessons for local children aged 8-16 now available at the Selby Arts Centre.',
    date: '2024-01-12',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    link: '/news/youth-music',
  },
  {
    id: '3',
    title: 'Selby Town FC Celebrates Winning Streak',
    excerpt: 'The local football team secures their fifth consecutive win, moving up the league table.',
    date: '2024-01-10',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    link: '/news/football-win',
  },
]

const eventsData: Event[] = [
  {
    id: '1',
    title: 'Live Music Night at The George Inn',
    location: 'The George Inn, Selby',
    date: '2024-01-20',
    time: '8:00 PM',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Selby Market Day Special',
    location: 'Selby Market Square',
    date: '2024-01-22',
    time: '9:00 AM - 4:00 PM',
    image: 'https://images.unsplash.com/photo-1488229250624-1200c813247d?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Kids Disco at Community Centre',
    location: 'Selby Community Centre',
    date: '2024-01-25',
    time: '5:00 PM - 7:00 PM',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
  },
]

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="glass-card overflow-hidden hover-lift group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-accent rounded-full text-xs font-semibold text-white">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Calendar className="w-4 h-4" />
          <time>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
          {item.excerpt}
        </p>
        <a
          href={item.link}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
        >
          Read more <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <article className="glass-card overflow-hidden hover-lift group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-xs text-white/80">{event.time}</div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
          {event.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Tag className="w-4 h-4" />
          <span className="truncate">{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
          <Calendar className="w-4 h-4" />
          <time>{new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
        </div>
      </div>
    </article>
  )
}

export default function NewsEvents() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Local News</h2>
              <a href="/news" className="text-accent hover:underline text-sm font-medium">
                View all news
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <a href="/events" className="text-accent hover:underline text-sm font-medium">
                All events
              </a>
            </div>
            <div className="space-y-6">
              {eventsData.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
