import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We listen to your story, references, and placement ideas in a private one-on-one session.',
  },
  {
    step: '02',
    title: 'Custom Design',
    description: 'Your assigned artist drafts an original concept refined until every line feels right.',
  },
  {
    step: '03',
    title: 'Inked Session',
    description: 'In our sterile atelier, the piece is executed with precision, patience, and care.',
  },
  {
    step: '04',
    title: 'Aftercare',
    description: 'You leave with a premium aftercare kit and follow-up guidance for perfect healing.',
  },
]

export default function AboutStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="relative w-full aspect-[4/5] max-h-[520px] rounded-2xl overflow-hidden border border-white/[0.06]"
          >
            <img
              src="/images/hero-bg.png"
              alt="Inkwell Studio atmosphere"
              width={800}
              height={1000}
              className="w-full h-full object-cover filter grayscale contrast-110 brightness-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-xl tracking-[0.12em] text-white">Est. 2014</p>
              <p className="text-[12px] text-white/55 font-body mt-1 tracking-wide">
                New York Art District
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="section-title"
            >
              Built on Craft, <span className="text-gold">Not Compromise</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="section-copy max-w-xl"
            >
              INKWELL began as a private studio for artists who refused to treat tattooing as disposable flash. Over a decade later, we remain a sanctuary for custom work — quiet rooms, medical-grade hygiene, and designs that belong only to you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="section-copy max-w-xl"
            >
              Every residency artist is selected for mastery in their style. From fine line to Japanese, realism to blackwork, the standard is the same: timeless composition, exacting technique, and respect for the skin that carries it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="grid grid-cols-3 gap-4 pt-2 max-w-md"
            >
              {[
                ['12+', 'Years'],
                ['5k+', 'Pieces'],
                ['3', 'Artists'],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-gold/30 pl-3">
                  <p className="font-display text-2xl text-white leading-none">{value}</p>
                  <p className="text-[11px] text-white/45 uppercase tracking-[0.14em] mt-1.5 font-body">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-label mb-3 text-center"
          >
            The Process
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="section-title text-center mb-8 md:mb-10"
          >
            From Idea to Ink
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="rounded-2xl border border-white/[0.07] bg-[#121212]/80 p-6 h-full"
              >
                <p className="font-display text-3xl text-gold/80 mb-4 leading-none">{item.step}</p>
                <h4 className="font-display text-lg tracking-[0.1em] text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-[13px] text-white/55 font-light font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
