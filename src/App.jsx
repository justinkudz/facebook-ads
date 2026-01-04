import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import WhyIBuiltThis from './components/WhyIBuiltThis'
import TheSystem from './components/TheSystem'
import WhatYouGet from './components/WhatYouGet'
import Selective from './components/Selective'
import Guarantee from './components/Guarantee'
import Investment from './components/Investment'
import WhoThisIsFor from './components/WhoThisIsFor'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import GridBackground from './components/GridBackground'
import AnimatedGradientBackground from './components/AnimatedGradientBackground'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="app">
      <GridBackground />
      <AnimatedGradientBackground />
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <WhatIDo />
      <WhyIBuiltThis />
      <TheSystem />
      <WhatYouGet />
      <Selective />
      <Guarantee />
      <Investment />
      <WhoThisIsFor />
      <FAQ />
      <FinalCTA onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}

export default App
