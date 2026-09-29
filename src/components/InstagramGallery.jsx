import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryImages = [
  '/images/tattoo-blackwork.png',
  '/images/tattoo-fineline.png',
  '/images/tattoo-realism.png',
  '/images/tattoo-japanese.png',
  '/images/tattoo-minimal.png',
  '/images/tattoo-custom.png',
]

export default function InstagramGallery() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section className="section-pad overflow-hidden">
      <div className="content-container">
        <div ref={titleRef} className="mb-8 md:mb-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            @inkwell.studio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="section-title mb-6"
          >
            Follow Us on Instagram
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm btn-arrow"
              data-hover
            >
              Open Instagram
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.a
              key={img}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden border border-white/[0.06] group cursor-pointer block"
              data-hover
            >
              <img
                src={img}
                alt={`Instagram post ${i + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-[transform,filter] duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
