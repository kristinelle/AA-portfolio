import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Router keeps the scroll position between pages, which lands you mid-page
   after navigating. Reset to the top on every route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
