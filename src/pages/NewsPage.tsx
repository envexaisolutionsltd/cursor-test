import { Calendar, ArrowRight } from 'lucide-react'

const newsArticles = [
  {
    id: '1',
    title: 'Selby Community Centre Hosts Annual Charity Fundraiser',
    excerpt: 'Local volunteers raised over £5,000 for the Selby Food Bank at last weekend\'s community event, featuring live music from local bands and a grand auction.',
    date: '2024-01-15',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop',
  },
  {
    id: '2',
    title: 'New Youth Music Program Launches in Selby',
    excerpt: 'Free music lessons for local children aged 8-16 now available at the Selby Arts Centre. The program includes guitar, drums, keyboard, and vocal training.',
    date: '2024-01-12',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop',
  },
  {
    id: '3',
    title: 'Selby Town FC Celebrates Winning Streak',
    excerpt: 'The local football team secures their fifth consecutive win, moving up the league table and bringing excitement to fans across the town.',
    date: '2024-01-10',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop',
  },
  {
    id: '4',
    title: 'Local Business Awards 2024 Nominees Announced',
    excerpt: 'The shortlist for this year\'s Selby Business Awards has been revealed, featuring 25 local businesses across 8 categories.',
    date: '2024-01-08',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff5e2e4d4?w=800&h=500&fit=crop',
  },
  {
    id: '5',
    title: 'Selby Pulse Radio Expands Broadcast Hours',
    excerpt: 'We\'re excited to announce extended programming, now broadcasting 24/7 with new late-night and early-morning shows.',
    date: '2024-01-05',
    category: 'Station News',
    image: 'https://images.unsplash.com/photo-1478737271623-e9286b9d0f62?w=800&h=500&fit=crop',
  },
  {
    id: '6',
    title: 'New Bike Lane Connecting Selby to Brayton Opens',
    excerpt: 'Cyclists can now enjoy a dedicated path linking Selby town centre to Brayton, promoting greener transport options.',
    date: '2024-01-03',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  },
]

export default function NewsPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Local News</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stay up to date with the latest news and stories from Selby and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <article key={article.id} className="glass-card overflow-hidden hover-lift group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-accent rounded-full text-xs font-semibold text-white">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
