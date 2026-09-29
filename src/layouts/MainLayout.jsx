import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import SmoothScroller from '../components/SmoothScroller'

export default function MainLayout() {
  const location = useLocation()

  return (
    <SmoothScroller>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </SmoothScroller>
  )
}
