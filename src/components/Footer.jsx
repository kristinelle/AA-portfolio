import { site } from '../data/site.js'
import './layout.css'

export default function Footer() {
  return (
    <footer className="layout-footer">
      <p>
        {site.groupName} · {site.course}
      </p>
      <p>© {new Date().getFullYear()} Universiti Teknologi Malaysia</p>
    </footer>
  )
}
