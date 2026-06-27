'use client'

const Hero = ({ onOrderClick }) => {
  return (
    <section id="home" className="hero relative min-h-screen flex items-center justify-start" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%238db8e8;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%234a90a4;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22600%22 fill=%22url(%23grad)%22 /%3E%3C/svg%3E")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">FAST PICKUP.<br />CLEAN COMMUNITIES.</h1>
          <p className="text-xl text-gray-100 mb-8">Convenient recycling pickup in Stevensville and the Bitterroot Valley.</p>
          <button onClick={onOrderClick} className="btn-primary text-lg px-8 py-4">ORDER NOW</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
