import { useState, type FormEvent } from 'react'
import { Send, Mail, MapPin, Phone, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a question, suggestion, or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-slate-400">info@selbypulseradio.co.uk</p>
                  <p className="text-slate-400">studio@selbypulseradio.co.uk</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-slate-400">Selby Community Centre</p>
                  <p className="text-slate-400">Selby, North Yorkshire</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Studio Line</h3>
                  <p className="text-slate-400">01757 123456</p>
                  <p className="text-sm text-slate-500">Call during live shows to request songs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.subject ? 'border-red-500' : 'border-white/10'
                  } focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors`}
                >
                  <option value="" className="bg-surface-dark">Select a topic</option>
                  <option value="general" className="bg-surface-dark">General Enquiry</option>
                  <option value="advertising" className="bg-surface-dark">Advertising</option>
                  <option value="music" className="bg-surface-dark">Music Submission</option>
                  <option value="events" className="bg-surface-dark">Events</option>
                  <option value="feedback" className="bg-surface-dark">Feedback</option>
                </select>
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none`}
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
