import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaPinterestP, FaMapMarkerAlt } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Artists', to: '/artists' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Book', to: '/book' },
  { label: 'Gallery', to: '/gallery' },
]

const studioLinks = [
  { label: 'Our Process', to: '/about' },
  { label: 'Aftercare', to: '/about' },
  { label: 'Faqs', to: '/about' },
  { label: 'Gift Cards', to: '/book' },
  { label: 'Reviews', to: '/about' },
]

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaPinterestP, href: '#', label: 'Pinterest' },
  { icon: FaMapMarkerAlt, href: '#', label: 'Maps' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-14 md:pt-16 pb-8 bg-bg relative z-10">
      <div className="content-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 items-start">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-flex flex-col text-left group mb-4" data-hover>
              <span className="font-display text-[1.75rem] tracking-[0.22em] text-white group-hover:text-gold transition-colors duration-300 leading-none">
                INKWELL
              </span>
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase mt-1 font-bold font-body">
                STUDIO
              </span>
            </Link>
            <p className="text-[13px] text-white/55 leading-relaxed max-w-sm font-light font-body">
              Premium custom tattoo artistry crafted with precision, emotion, and timeless design.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-body text-[11px] tracking-[0.22em] uppercase mb-4 text-white/50 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/70 hover:text-gold transition-colors duration-300 font-body"
                    data-hover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-body text-[11px] tracking-[0.22em] uppercase mb-4 text-white/50 font-semibold">
              Studio
            </h4>
            <ul className="space-y-2.5">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/70 hover:text-gold transition-colors duration-300 font-body"
                    data-hover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-body text-[11px] tracking-[0.22em] uppercase mb-4 text-white/50 font-semibold">
              Connect
            </h4>
            <div className="space-y-2.5 mb-5 text-[13px] text-white/70 font-body">
              <p>hello@inkwell.studio</p>
              <p>+1 (555) 234-5678</p>
              <p>42 Art District, NY 10012</p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/65 hover:text-gold hover:border-gold/50 transition-[color,border-color] duration-300"
                  data-hover
                >
                  <social.icon className="text-sm" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05] pt-6">
        <div className="content-container flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40 tracking-wider font-body text-center sm:text-left">
          <p>© 2026 INKWELL Studio. All rights reserved.</p>
          <p className="text-gold/75">Crafted with precision & passion</p>
        </div>
      </div>
    </footer>
  )
}
