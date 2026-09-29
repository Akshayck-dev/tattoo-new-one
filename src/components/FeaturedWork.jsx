import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const works = [
  { image: '/images/tattoo-blackwork.png', title: 'Sacred Geometry', style: 'Blackwork' },
  { image: '/images/tattoo-fineline.png', title: 'Botanical Dream', style: 'Fine Line' },
  { image: '/images/tattoo-realism.png', title: 'Lion Portrait', style: 'Realism' },
  { image: '/images/tattoo-japanese.png', title: 'Koi Spirit', style: 'Japanese' },
]

export default function FeaturedWork() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section className="section-pad">
      <div className="content-container">
        <div ref={titleRef} className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-9 md:mb-11 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="section-title"
            >
              Recent Creations
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link to="/portfolio" className="btn btn-outline btn-sm btn-arrow" data-hover>
              View All Work
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ work, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to="/portfolio" className="group block h-full" data-hover>
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/[0.06]">
          <img
            src={work.image}
            alt={work.title}
            width={600}
            height={750}
            className="w-full h-full object-cover transition-[transform,filter] duration-700 group-hover:scale-105 filter grayscale contrast-110 brightness-[0.85] group-hover:grayscale-0"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pt-4">
          <p className="font-display text-[1.05rem] tracking-[0.08em] text-white group-hover:text-accent transition-colors duration-300">
            {work.title}
          </p>
          <p className="text-[12px] text-white/50 mt-1.5 tracking-[0.14em] uppercase font-body">
            {work.style}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
