import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const cursor = cursorRef.current

    const moveCursor = (e) => {
      if (!visible) setVisible(true)
      cursor.style.left = `${e.clientX - 10}px`
      cursor.style.top = `${e.clientY - 10}px`
    }

    const handleOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        setHovering(true)
      }
    }

    const handleOut = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        setHovering(false)
      }
    }

    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [visible])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor hidden md:block ${hovering ? 'hovering' : ''}`}
      style={{ opacity: visible ? 1 : 0 }}
    />
  )
}
