import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

export default function StudioPhilosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[4/5] max-h-[520px] rounded-2xl overflow-hidden border border-white/[0.05] order-1 lg:order-2"
        >
          <img
            src="/images/hero-artist.png"
            alt="Inkwell studio environment"
            width={800}
            height={1000}
            className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 hover:grayscale-0 transition-[filter] duration-700"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
        </motion.div>

        <div className="space-y-5 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="section-title"
          >
            Artistry Meets Pure Precision.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="section-copy max-w-xl"
          >
            We believe a tattoo is more than just ink on skin—it is a permanent statement, a visual chronicle of your personal odyssey, and a work of fine art. At Inkwell, we approach every design with meticulous precision and raw emotion.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-copy max-w-xl"
          >
            In our sterile, high-end environment, our artists collaborate with you to craft bespoke, timeless pieces that elevate custom tattooing to its highest form.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="pt-1"
          >
            <Link to="/about" className="btn btn-outline btn-arrow" data-hover>
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
