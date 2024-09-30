import React from 'react'
import NavBar from './componenets/NavBar'
import HeroSection from './componenets/HeroSection'
import Features from './componenets/Features'
import WorkFlow from './componenets/WorkFlow'
import PriceOptions from './componenets/PriceOptions'
import Testimonials from './componenets/Testimonials'
import Footer from './componenets/Footer'
const App = () => {
  return (
    <main>
      <NavBar />
      <div className="max-w-7xl mx-auto  pt-20 px-6">
        <HeroSection />
        <Features />
        <WorkFlow />
        <PriceOptions />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}

export default App
