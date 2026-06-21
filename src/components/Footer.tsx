import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-darker border-t border-white/5 py-12 px-4 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Selby+Pulse+Logo+(2).png"
                alt="Selby Pulse Radio"
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="font-bold text-lg leading-tight block">Selby Pulse</span>
                <span className="text-xs text-accent leading-tight block">Radio</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A community radio station dedicated to bringing local voices, great music and entertainment to Selby and the surrounding area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">On Air</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/schedule" className="hover:text-accent transition-colors">Schedule</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/community-hub" className="hover:text-accent transition-colors">Community Hub</Link></li>
              <li><Link to="/sponsors" className="hover:text-accent transition-colors">Our Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/advertise" className="hover:text-accent transition-colors">Advertise With Us</Link></li>
              <li><Link to="/join-team" className="hover:text-accent transition-colors">Join the Team</Link></li>
              <li><Link to="/meet-the-team" className="hover:text-accent transition-colors">Meet the Team</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Studio</h4>
            <address className="not-italic text-sm text-slate-400 space-y-1 mb-4">
              <p>Our Space</p>
              <p>58 Flaxley Road</p>
              <p>Selby, YO8 4BW</p>
              <p className="mt-3">
                <a href="mailto:selbypulseradio@gmail.com" className="hover:text-accent transition-colors">
                  selbypulseradio@gmail.com
                </a>
              </p>
            </address>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/OurSpace.png"
                alt="Selby Pulse Radio Studio"
                className="w-full h-24 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2025 Selby Pulse Radio. Licensed by PRS for Music and PPL.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/tcs" className="hover:text-slate-300 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
