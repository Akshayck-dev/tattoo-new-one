import PageTransition from '../components/PageTransition'
import AboutStory from '../components/AboutStory'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import SectionCTA from '../components/SectionCTA'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="page-offset">
        <AboutStory />
        <WhyChooseUs />
        <Testimonials />
        <SectionCTA
          label="Convinced?"
          heading={<>Book <span className="text-gold">Your Session</span></>}
          description="Take the first step towards your next masterpiece."
          buttonText="Book Consultation"
          buttonLink="/book"
          image="/images/tattoo-japanese.png"
        />
      </div>
    </PageTransition>
  )
}
