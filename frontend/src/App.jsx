import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import BusinessValue from './components/BusinessValue'
import VenueTypes from './components/VenueTypes'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [loginType, setLoginType] = useState('customer')

  const openLoginModal = (type) => {
    setLoginType(type)
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <div className="w-full min-h-screen bg-bg-deep text-white overflow-x-hidden">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
        type={loginType}
      />
      <Navigation onLoginClick={openLoginModal} />
      <Hero />
      <div className="h-12 md:h-16 bg-gradient-to-b from-bg-deep to-bg-base"></div>
      <Problems />
      <div className="h-12 md:h-16 bg-gradient-to-b from-bg-base to-bg-deep"></div>
      <HowItWorks />
      <Features />
      <BusinessValue />
      <VenueTypes />
      <Waitlist />
      <Footer />
    </div>
  )
}
