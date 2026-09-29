import { useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Blackwork', 'Fine Line', 'Realism', 'Japanese', 'Minimal', 'Custom']

const portfolioItems = [
  { id: 1, category: 'Blackwork', image: '/images/tattoo-blackwork.png', title: 'Sacred Geometry' },
  { id: 2, category: 'Fine Line', image: '/images/tattoo-fineline.png', title: 'Botanical Dream' },
  { id: 3, category: 'Realism', image: '/images/tattoo-realism.png', title: 'Lion Portrait' },
  { id: 4, category: 'Japanese', image: '/images/tattoo-japanese.png', title: 'Koi Spirit' },
  { id: 5, category: 'Minimal', image: '/images/tattoo-minimal.png', title: 'Geometric Line' },
  { id: 6, category: 'Custom', image: '/images/tattoo-custom.png', title: 'Serpent & Roses' },
]

function PortfolioItem({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer border border-white/[0.06] bg-surface"
      data-hover
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          width={600}
          height={750}
          className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/60 transition-[background-color,opacity] duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 px-4 text-center">
          <span className="font-display text-lg tracking-[0.12em] mb-1">{item.title}</span>
          <span className="text-[11px] tracking-[0.16em] uppercase text-white/70 mb-4 font-body">
            {item.category}
          </span>
          <span className="btn btn-outline btn-sm pointer-events-none">View Design</span>

        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams()
  const param = searchParams.get('style') || 'All'
  const activeFilter = categories.includes(param) ? param : 'All'
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  const setActiveFilter = (cat) => {
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ style: cat })
    }
  }

  const filtered = useMemo(() => {
    return activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="portfolio" className="section-pad">
      <div className="content-container">
        <div ref={titleRef} className="mb-8 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="section-title"
          >
            Portfolio
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8 md:mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`btn-chip ${activeFilter === cat ? 'is-active' : ''}`}
              aria-pressed={activeFilter === cat}
              data-hover
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioItem key={`${item.id}-${activeFilter}`} item={item} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
