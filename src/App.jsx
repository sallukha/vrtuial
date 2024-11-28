import React from 'react'
import NavBar from './componenets/NavBar'
import HeroSection from './componenets/HeroSection'
import Features from './componenets/Features'
import WorkFlow from './componenets/WorkFlow'
import PriceOptions from './componenets/PriceOptions'
import Testimonials from './componenets/Testimonials'
import Footer from './componenets/Footer'
import Singin from './componenets/pages/Singin'
import Login from './componenets/pages/Login'
import Home from './componenets/pages/Home'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/Singin" element={<Singin />} />
            <Route path="Login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
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
