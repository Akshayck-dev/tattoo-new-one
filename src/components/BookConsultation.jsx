import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiUser,
  FiPhone,
  FiMail,
  FiCalendar,
  FiEdit3,
  FiAward,
  FiShield,
  FiClock,
  FiPenTool,
} from 'react-icons/fi'
import { GiTripleNeedle } from 'react-icons/gi'

const styles = ['Blackwork', 'Fine Line', 'Realism', 'Japanese', 'Minimal', 'Custom', 'Not Sure']

const badges = [
  {
    icon: FiPenTool,
    title: 'Bespoke Designs',
    description: 'Custom artwork crafted exclusively for you.',
  },
  {
    icon: FiShield,
    title: 'Premium Safety',
    description: 'Industry-leading sterilization & hygiene.',
  },
  {
    icon: FiAward,
    title: 'Expert Artists',
    description: 'Award-winning artists with deep experience.',
  },
  {
    icon: FiClock,
    title: 'Personal Care',
    description: '1-on-1 attention in a private setting.',
  },
]

const atelierRows = [
  ['Sterilization', 'Class B Autoclave'],
  ['Custom Process', '1-on-1 Consultation'],
  ['Ink Quality', 'Vegan Premium Pigments'],
]

export default function BookConsultation() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', style: '', date: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', phone: '', email: '', style: '', date: '', message: '' })
  }

  return (
    <section id="book" className="section-pad relative overflow-hidden bg-bg">
      <div ref={sectionRef} className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-7">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label mb-3"
              >
                Exquisite Artistry
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="section-title"
              >
                Request
                <br />
                <span className="text-gold">Consultation</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="section-copy mt-5 max-w-xl"
              >
                Share your ideas with us and our artists will craft a custom experience tailored just for you.
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-field">
                  <FiUser className="text-base text-gold shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alexander Vance…"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <FiPhone className="text-base text-gold shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 000-0000…"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <FiMail className="text-base text-gold shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      spellCheck={false}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. alexander@vance.com…"
                    />
                  </div>
                </div>
                <div className="form-field relative">
                  <GiTripleNeedle className="text-base text-gold shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0 pr-5">
                    <label htmlFor="style">Tattoo Style</label>
                    <select
                      id="style"
                      name="style"
                      autoComplete="off"
                      value={formData.style}
                      onChange={handleChange}
                    >
                      <option value="">Select desired style…</option>
                      {styles.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[9px] text-gold" aria-hidden="true">▼</span>
                </div>
                <div className="form-field">
                  <FiCalendar className="text-base text-gold shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <label htmlFor="date">Desired Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      autoComplete="off"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <FiEdit3 className="text-base text-gold shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <label htmlFor="message">Design Details</label>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Placement, size, concept…"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  data-hover
                  className="btn btn-gold btn-arrow w-full sm:w-auto sm:min-w-[240px]"
                >
                  {submitted ? 'Request Submitted' : 'Submit Request'}
                </button>
                <p
                  className="text-[11px] text-white/40 font-body mt-3"
                  aria-live="polite"
                  role="status"
                >
                  {submitted
                    ? 'Thanks — your consultation request was received.'
                    : 'Your information is safe with us. We respect your privacy.'}
                </p>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#121212]">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src="/images/artist-working.png"
                  alt="Inkwell Studio Session"
                  width={800}
                  height={550}
                  className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.8] hover:grayscale-[0.3] transition-[filter] duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <h4 className="font-display text-lg tracking-[0.16em] text-white mb-5">
                  The Atelier
                </h4>
                <div className="space-y-0">
                  {atelierRows.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[1fr_auto] gap-4 items-center py-3 border-b border-white/[0.06] last:border-0 last:pb-0"
                    >
                      <span className="text-[11px] text-white/55 uppercase tracking-[0.12em] font-body">
                        {label}
                      </span>
                      <span className="text-[12px] text-gold font-medium font-body text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature badges — clean equal cards, no broken dividers */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-start gap-3.5 rounded-xl border border-white/[0.07] bg-[#141414]/60 p-5 h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-base text-gold shrink-0">
                <badge.icon />
              </div>
              <div className="min-w-0">
                <h5 className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold mb-1.5 font-body">
                  {badge.title}
                </h5>
                <p className="text-[12px] text-white/55 leading-relaxed font-light font-body">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
