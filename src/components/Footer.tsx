import { Radio, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface-darker border-t border-white/5 py-12 px-4 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-accent to-accent-light">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Selby Pulse</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your local community radio station, bringing you the best music, news, and entertainment for Selby and surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/schedule" className="hover:text-accent transition-colors">Schedule</a></li>
              <li><a href="/news" className="hover:text-accent transition-colors">News</a></li>
              <li><a href="/events" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="/advertise" className="hover:text-accent transition-colors">Advertise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>info@selbypulseradio.co.uk</li>
              <li>01757 123456</li>
              <li>Selby Community Centre</li>
              <li>Selby, North Yorkshire</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.44c0-.9.56-1.1 1-1.1h3v-5.14h-4.33C10.24.49 9.08 3.44 9.08 5.96v1.5H6.23v4.54h2.85V25h5.42V12h3.63l.64-4.54z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.5 2.04-4.5 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.48-.6 2.32 0 1.58.8 2.97 2.02 3.78-.75-.02-1.46-.23-2.07-.57v.06c0 2.2 1.57 4.04 3.65 4.45-.38.1-.8.16-1.22.16-.3 0-.6-.03-.88-.1.6 1.84 2.35 3.17 4.42 3.2-1.62 1.27-3.66 2.02-5.88 2.02-.38 0-.76-.02-1.12-.07 2.1 1.35 4.58 2.14 7.27 2.14 8.7 0 13.48-7.22 13.48-13.48 0-.2 0-.4-.02-.6.93-.67 1.74-1.5 2.38-2.46z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for the Selby community
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Selby Pulse Radio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
