import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import StudioPhilosophy from '../components/StudioPhilosophy'
import FeaturedWork from '../components/FeaturedWork'
import SectionCTA from '../components/SectionCTA'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <StatsBar />
      <StudioPhilosophy />
      <FeaturedWork />
      <SectionCTA
        label="Ready to Make Your Mark?"
        heading="Your Story. Inked Forever."
        description="Book your bespoke private consultation with one of our master resident tattoo artists today."
        buttonText="Begin Consultation"
        buttonLink="/book"
        image="/images/tattoo-realism.png"
      />
    </PageTransition>
  )
}
