import PageTransition from '../components/PageTransition'
import Portfolio from '../components/Portfolio'
import SectionCTA from '../components/SectionCTA'

export default function PortfolioPage() {
  return (
    <PageTransition>
      <div className="page-offset">
        <Portfolio />
        <SectionCTA
          label="Ready to Begin?"
          heading="Start Your Journey"
          description="Book a free consultation and let's bring your vision to life."
          buttonText="Book Consultation"
          buttonLink="/book"
          image="/images/tattoo-fineline.png"
        />
      </div>
    </PageTransition>
  )
}
