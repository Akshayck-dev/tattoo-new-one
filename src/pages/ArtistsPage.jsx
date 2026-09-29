import PageTransition from '../components/PageTransition'
import FeaturedArtists from '../components/FeaturedArtists'
import SectionCTA from '../components/SectionCTA'

export default function ArtistsPage() {
  return (
    <PageTransition>
      <div className="page-offset">
        <FeaturedArtists />
        <SectionCTA
          label="See Our Work"
          heading="Explore the Portfolio"
          description="Browse our curated collection of custom tattoo designs across every style."
          buttonText="View Portfolio"
          buttonLink="/portfolio"
          image="/images/tattoo-blackwork.png"
        />
      </div>
    </PageTransition>
  )
}
