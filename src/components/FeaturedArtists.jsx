import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const artists = [
  {
    name: 'Marcus Rivera',
    style: 'Blackwork & Geometric',
    experience: '12 Years',
    image: '/images/artist-1.png',
  },
  {
    name: 'Elena Voss',
    style: 'Fine Line & Botanical',
    experience: '9 Years',
    image: '/images/artist-2.png',
  },
  {
    name: 'James Thornton',
    style: 'Realism & Portraits',
    experience: '15 Years',
    image: '/images/artist-3.png',
  },
]

function ArtistCard({ artist, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group"
      data-hover
    >
      <Link to="/artists" className="block relative aspect-[3/4] overflow-hidden rounded-xl border border-white/[0.05]">
        <img
          src={artist.image}
          alt={artist.name}
          width={600}
          height={800}
          className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-[0.2]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/35 transition-[background-color] duration-500 flex items-center justify-center">
          <span className="btn btn-outline btn-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-500 pointer-events-none">
            View Profile
          </span>
        </div>
      </Link>

      <div className="pt-4">
        <h3 className="font-display text-xl tracking-[0.08em] text-white group-hover:text-accent transition-colors duration-300">
          {artist.name}
        </h3>
        <p className="text-sm text-white/65 mt-1 font-body">{artist.style}</p>
        <p className="text-[11px] text-muted mt-1 tracking-[0.12em] uppercase">
          {artist.experience} Experience
        </p>
      </div>
    </motion.div>
  )
}

export default function FeaturedArtists() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="artists" className="section-pad">
      <div className="content-container">
        <div ref={titleRef} className="mb-9 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="section-title"
          >
            Featured Artists
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-7">
          {artists.map((artist, i) => (
            <ArtistCard key={artist.name} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
