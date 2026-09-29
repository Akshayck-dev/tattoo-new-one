import PageTransition from '../components/PageTransition'
import BookConsultation from '../components/BookConsultation'

export default function BookPage() {
  return (
    <PageTransition>
      <div className="page-offset">
        <BookConsultation />
      </div>
    </PageTransition>
  )
}
