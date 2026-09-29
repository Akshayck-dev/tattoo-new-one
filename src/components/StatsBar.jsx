import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '5,000+', label: 'Tattoos Completed' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Awards Won' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="relative border-y border-white/[0.05]">
      <div className="content-container py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`text-center px-2 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''
              }`}
            >
              <p className="font-display text-[clamp(1.85rem,4vw,2.85rem)] text-white leading-none tabular-nums">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-muted mt-2.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
