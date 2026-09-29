import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    text: "I've been tattooed in studios across Europe and Asia, and INKWELL is on another level. Elena's fine line work is so precise it looks like it was drawn by a machine, yet it has that beautiful human touch.",
    name: 'David Chen',
    role: 'Fine Line Collection',
    rating: 5,
  },
  {
    id: 2,
    text: "The attention to detail is absolutely unreal. Marcus took my rough idea and turned it into something I stare at every day. The studio itself felt like a luxury hotel—not your typical tattoo shop.",
    name: 'Sarah Mitchell',
    role: 'Sleeve Tattoo Client',
    rating: 5,
  },
  {
    id: 3,
    text: "From the consultation to the aftercare follow-up, every step was premium. They truly treat tattooing as fine art. I wouldn't trust anyone else with my skin.",
    name: 'Alexandra Torres',
    role: 'Custom Back Piece',
    rating: 5,
  },
  {
    id: 4,
    text: "James created a portrait of my late grandfather that brings me to tears every time I look at it. The realism is beyond anything I've ever seen. Thank you, INKWELL.",
    name: 'Michael Park',
    role: 'Memorial Portrait',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-bg">
      <div className="content-container relative z-10">
        <div ref={titleRef} className="mb-8 md:mb-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="section-title"
          >
            Testimonials
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="min-h-[200px] sm:min-h-[220px] flex items-center justify-center text-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <div className="text-gold font-display text-4xl mb-3 leading-none">“</div>
                <p className="text-[15px] sm:text-base text-white/80 font-light font-body leading-relaxed mb-5">
                  {testimonial.text}
                </p>
                <div className="flex justify-center gap-1 mb-3 text-gold text-xs">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h4 className="font-display text-sm tracking-[0.16em] text-white uppercase">
                  {testimonial.name}
                </h4>
                <p className="text-[11px] text-white/45 tracking-[0.14em] uppercase font-body mt-1">
                  {testimonial.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="btn-icon"
              aria-label="Previous Testimonial"
            >
              <FiChevronLeft className="text-lg" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                    i === current ? 'w-7 bg-gold' : 'w-2 bg-white/25'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="btn-icon"
              aria-label="Next Testimonial"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
