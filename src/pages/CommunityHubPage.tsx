import { Users, ArrowRight } from 'lucide-react'

export default function CommunityHubPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Community Hub</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Selby Pulse Radio is more than a radio station — we're a hub for the Selby community. Explore what's happening and how you can get involved.
          </p>
        </div>

        {/* Youth Council */}
        <div className="glass-card p-8 mb-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <Users className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3">Youth Council</h2>
            <p className="text-accent font-medium mb-4">Have your say in Selby</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              The Selby Pulse Youth Council gives young people a voice in how the station runs and what's being broadcast. If you're young, passionate, and want to shape the future of community radio in Selby — this is your chance.
            </p>
            <a href="/contact" className="btn-primary">
              Get Involved <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="glass-card p-10 text-center border-2 border-dashed border-white/15">
          <div className="text-6xl mb-4">🎙️</div>
          <h2 className="text-2xl font-bold mb-3">More Coming Soon</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We're building something exciting for the Selby community. More groups, events, and opportunities will be added here soon. Watch this space!
          </p>
        </div>
      </div>
    </main>
  )
}
