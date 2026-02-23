import { useState } from 'react'

export default function LoginModal({ isOpen, onClose, type }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
    }, 2000)
  }

  if (!isOpen) return null

  const isCustomer = type === 'customer'

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="glass-card rounded-3xl p-6 sm:p-10 max-w-md w-full glow-purple relative animate-scale-in" 
           style={{ boxShadow: '0 20px 100px rgba(168, 85, 247, 0.6), 0 0 100px rgba(168, 85, 247, 0.3)' }}>
        
        <button 
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-gray-400">
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 sm:mb-4 glow-purple" 
                   style={{ background: 'linear-gradient(135deg, var(--neon-purple), var(--electric-violet))', boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}>
                {isCustomer ? (
                  <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ) : (
                  <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                {isCustomer ? 'Customer Login' : 'Venue Login'}
              </h3>
              <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                {isCustomer ? 'Access your song requests' : 'Access your venue dashboard'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Email address
                </label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="your@email.com" 
                  className="input-field w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl font-body text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Password
                </label>
                <input 
                  id="password"
                  type="password" 
                  placeholder="••••••••" 
                  className="input-field w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl font-body text-sm sm:text-base"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="glow-button w-full px-6 py-3 sm:py-4 rounded-xl font-display font-bold text-base sm:text-lg mt-4 sm:mt-6">
                Sign In
              </button>
            </form>

            <div className="mt-4 sm:mt-6 text-center">
              <a href="#" className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Forgot password?
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-6 sm:py-8">
            <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4" 
                 style={{ background: 'rgba(34, 227, 161, 0.15)' }}>
              <svg className="w-6 sm:w-8 h-6 sm:h-8" style={{ color: 'var(--revenue-green)' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Login Successful!</h3>
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm sm:text-base">Welcome back to MixMind</p>
          </div>
        )}
      </div>
    </div>
  )
}
