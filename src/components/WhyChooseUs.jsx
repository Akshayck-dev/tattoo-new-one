import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiShield, FiAward, FiPenTool, FiPackage } from 'react-icons/fi'

const features = [
  {
    icon: FiShield,
    title: 'Sterile Environment',
    description: 'Medical-grade sterilization with hospital-standard protocols for complete safety.',
  },
  {
    icon: FiAward,
    title: 'Award Winning Artists',
    description: 'Recognized at international conventions with over 50 combined awards.',
  },
  {
    icon: FiPenTool,
    title: '100% Custom Designs',
    description: 'Every piece is created from scratch—no flash, no copies. One-of-a-kind art.',
  },
  {
    icon: FiPackage,
    title: 'Premium Aftercare',
    description: 'Aftercare kits and follow-up consultations for perfect healing every time.',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative p-6 rounded-2xl bg-[#121212] border border-white/[0.07] hover:border-gold/40 transition-[border-color] duration-300 text-center flex flex-col items-center h-full"
    >
      <div className="w-12 h-12 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center mb-4 text-gold text-lg group-hover:border-gold group-hover:bg-gold/10 transition-[border-color,background-color] duration-300">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="font-display text-[0.95rem] tracking-[0.1em] text-white uppercase mb-3">
        {feature.title}
      </h3>
      <div className="w-6 h-px bg-gold/60 mb-3 shrink-0" />
      <p className="text-[13px] text-white/60 font-light font-body leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="section-pad relative overflow-hidden bg-bg">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-12">
          <div ref={titleRef}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              Why Inkwell
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="section-title mb-4"
            >
              Why <span className="text-gold">Choose Us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="section-copy max-w-lg"
            >
              We blend artistry with precision in a world-class environment, ensuring every tattoo is a masterpiece you'll cherish forever.
            </motion.p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/[0.07]">
              <img
                src="/images/artist-2.png"
                alt="Inkwell Studio Artist at Work"
                width={800}
                height={500}
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 hover:grayscale-0 transition-[filter] duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
