import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}))

export default function Hero() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)
  const ctaRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      if (subtextRef.current) subtextRef.current.style.opacity = '1'
      if (ctaRef.current) ctaRef.current.style.opacity = '1'
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1 },
        { scale: 1.08, duration: 18, ease: 'none', repeat: -1, yoyo: true }
      )

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      const headline = headlineRef.current
      if (!headline || headline.children.length > 0) return

      const text = headline.textContent.trim()
      headline.textContent = ''

      const words = text.split(' ')
      const chars = []

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span')
        wordSpan.className = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'

        word.split('').forEach((char) => {
          const charSpan = document.createElement('span')
          charSpan.textContent = char
          charSpan.className = 'inline-block opacity-0'
          charSpan.style.transform = 'translateY(40px)'
          wordSpan.appendChild(charSpan)
          chars.push(charSpan)
        })

        headline.appendChild(wordSpan)

        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement('span')
          spaceSpan.textContent = '\u00A0'
          spaceSpan.className = 'inline-block'
          headline.appendChild(spaceSpan)
        }
      })

      tl.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.025,
        delay: 0.25,
      })
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.45'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src="/images/hero-studio.jpg"
          alt="Inkwell Studio tattoo artist at work"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6) contrast(1.12)' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/20 to-bg/80 z-[2]" />

      <div className="absolute inset-0 z-[3] pointer-events-none hidden sm:block motion-safe:block">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -60, 0], opacity: [0, 0.5, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center content-container w-full max-w-4xl pt-24 pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-[clamp(1.5rem,4vw,2.25rem)] tracking-[0.3em] text-white mb-2"
        >
          INKWELL
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="section-label mb-6 md:mb-8"
        >
          Premium Tattoo Studio
        </motion.p>

        <h1
          ref={headlineRef}
          className="font-display text-[clamp(2.35rem,8vw,5.5rem)] leading-[0.95] tracking-[0.03em] mb-5 md:mb-7 text-white"
        >
          Your Story. Inked Forever.
        </h1>

        <p
          ref={subtextRef}
          className="section-copy text-white/80 max-w-lg mx-auto mb-8 md:mb-10 opacity-0"
        >
          Custom tattoo artistry crafted with precision, emotion, and timeless design.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center opacity-0 max-w-md sm:max-w-none mx-auto"
        >
          <Link to="/book" className="btn btn-gold btn-block-mobile btn-arrow" data-hover>
            Book Consultation
          </Link>
          <Link to="/portfolio" className="btn btn-outline btn-block-mobile" data-hover>
            View Portfolio
          </Link>
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.28em] uppercase text-muted">Scroll</span>
        <div className="w-px h-7 bg-white/20 overflow-hidden rounded-full">
          <motion.div
            className="w-full bg-white/60 rounded-full"
            animate={{ height: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
