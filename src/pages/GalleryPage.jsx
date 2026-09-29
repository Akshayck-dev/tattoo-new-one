import PageTransition from '../components/PageTransition'
import InstagramGallery from '../components/InstagramGallery'
import SectionCTA from '../components/SectionCTA'

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="page-offset">
        <InstagramGallery />
        <SectionCTA
          label="Like What You See?"
          heading="Let's Create Something Beautiful"
          description="Every tattoo begins with a conversation. Tell us your story."
          buttonText="Book Consultation"
          buttonLink="/book"
          image="/images/artist-3.png"
        />
      </div>
    </PageTransition>
  )
}
