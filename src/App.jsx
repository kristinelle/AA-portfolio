import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './components/Landing.jsx'
import MemberPending from './components/MemberPending.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { teamMembers } from './data/site.js'
import Portfolio from './members/abbenisha ann/Portfolio.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/abbenisha" element={<Portfolio />} />

        {/* Every other member keeps a working route. Each one swaps this for
            their own <Route> when their portfolio is ready. */}
        {teamMembers
          .filter((member) => !member.ready)
          .map((member) => (
            <Route key={member.id} path={member.route} element={<MemberPending />} />
          ))}

        <Route path="*" element={<MemberPending />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
