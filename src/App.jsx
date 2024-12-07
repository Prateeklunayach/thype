import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CapabilitiesSection from './components/CapabilitiesSection'
import ContactNew from './components/ContactNew'
import AboutSection from './components/AboutSection'
import IndustriesSection from './components/IndustriesSection'
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
            </>
          } />
          <Route path="/capabilities" element={<CapabilitiesSection />} />
          <Route path="/contact" element={<ContactNew />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/industries" element={<IndustriesSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App