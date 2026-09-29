import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

export default function SectionCTA({
  label,
  heading,
  description,
  buttonText,
  buttonLink,
  image = '/images/tattoo-custom.png',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad relative overflow-hidden bg-bg">
      <div className="content-container">
        <div className="relative rounded-2xl border border-gold/30 overflow-hidden bg-[#111]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label mb-3"
              >
                {label || 'Convinced?'}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="section-title mb-4"
              >
                {heading || (
                  <>
                    Book <span className="text-gold">Your Session</span>
                  </>
                )}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="section-copy mb-8 max-w-md mx-auto lg:mx-0"
              >
                {description || 'Take the first step towards your next masterpiece.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="flex justify-center lg:justify-start"
              >
                <Link
                  to={buttonLink || '/book'}
                  className="btn btn-gold btn-arrow"
                  data-hover
                >
                  {buttonText || 'Book Consultation'}
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full hidden sm:block">
              <img
                src={image}
                alt="Inkwell studio work"
                width={900}
                height={700}
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 brightness-90"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/40 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/50 to-transparent sm:block lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
