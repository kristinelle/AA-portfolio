import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './components/Landing.jsx'
import MemberPending from './components/MemberPending.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { teamMembers } from './data/site.js'
import Portfolio from './members/abbenisha ann/Portfolio.jsx'
import IzzatyPortfolio from './members/izzaty/Portfolio.jsx'
import EMOmazeProject from './members/izzaty/EMOmazeProject.jsx'
import TVASProject from './members/izzaty/TVASProject.jsx'
import ImageToolsProject from './members/izzaty/ImageToolsProject.jsx'
import HananiPortfolio from './members/hanani/Portfolio.jsx'
import KristinePortfolio from './members/kristine elle/Portfolio.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/member/abbenisha" element={<Portfolio />} />
        <Route path="/member/izzaty" element={<IzzatyPortfolio />} />
        <Route path="/project/emomaze" element={<EMOmazeProject />} />
        <Route path="/project/utm-tvas" element={<TVASProject />} />
        <Route path="/project/image-editing-tools" element={<ImageToolsProject />} />
        <Route path="/member/hanani" element={<HananiPortfolio />} />
        <Route path="/member/kristine" element={<KristinePortfolio />} />

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
