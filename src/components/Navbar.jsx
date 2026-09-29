import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Artists', to: '/artists' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? 'bg-bg/85 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <div className="content-container flex items-center justify-between h-20 gap-3">
          <Link to="/" className="flex flex-col text-left group shrink-0" data-hover>
            <span className="font-display text-[1.65rem] tracking-[0.22em] text-white group-hover:text-gold transition-colors duration-300 leading-none">
              INKWELL
            </span>
            <span className="text-[9px] tracking-[0.4em] text-gold uppercase mt-0.5 font-bold font-body">
              STUDIO
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[11px] tracking-[0.16em] uppercase transition-colors duration-300 whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/book"
              className="hidden sm:inline-flex btn btn-outline btn-sm btn-arrow"
              data-hover
            >
              Book Now
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white text-2xl p-2 -mr-1"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX aria-hidden="true" /> : <HiMenuAlt4 aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 px-6 overscroll-contain"
            style={{ overscrollBehavior: 'contain' }}
          >
            {[...navLinks, { label: 'Book', to: '/book' }].map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  className={`font-display text-3xl sm:text-4xl tracking-[0.16em] transition-colors ${
                    location.pathname === link.to ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="mt-3 w-full max-w-xs"
            >
              <Link to="/book" className="btn btn-gold btn-block btn-arrow">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
