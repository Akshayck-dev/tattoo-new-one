import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ArtistsPage from './pages/ArtistsPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import BookPage from './pages/BookPage'
import GalleryPage from './pages/GalleryPage'
import ScrollToTop from './components/ScrollToTop'

const LOADER_KEY = 'inkwell-loader-seen'

function App() {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem(LOADER_KEY)
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!loading) return undefined

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(LOADER_KEY, '1')
      } catch {
        /* ignore */
      }
      setLoading(false)
    }, 1400)

    return () => clearTimeout(timer)
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
