import { Calendar, ArrowRight, Radio } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: 'Studio Update: What\'s Been Happening at Selby Pulse Radio',
    excerpt: 'A lot has been going on behind the scenes at Selby Pulse Radio. From studio upgrades to new shows and exciting partnerships — here\'s a full update on where we are and where we\'re headed.',
    date: '2026-06-01',
    category: 'Station News',
    image: 'https://images.unsplash.com/photo-1478737271623-e9286b9d0f62?w=800&h=500&fit=crop',
  },
  {
    id: '2',
    title: 'Welcome to Selby Pulse Radio — Our First Blog of 2026',
    excerpt: 'Happy New Year from everyone at Selby Pulse! We\'re kicking off 2026 with some big announcements about new shows, new presenters, and our plans for the community this year.',
    date: '2026-01-07',
    category: 'Announcements',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop',
  },
  {
    id: '3',
    title: 'Blog Posts Coming Soon!',
    excerpt: 'We\'ll be sharing regular updates, stories from the studio, community news, and more right here on the Selby Pulse Radio blog. Check back soon — there\'s plenty more to come.',
    date: '2025-12-01',
    category: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&h=500&fit=crop',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
            <Radio className="w-4 h-4" />
            <span className="text-sm font-medium">From the Studio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Updates, stories, and news from Selby Pulse Radio. Stay connected with what's happening at the station and in the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="glass-card overflow-hidden hover-lift group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-accent rounded-full text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                </div>
                <h2 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
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
