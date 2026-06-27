'use client'

import { useState } from 'react'

const Header = ({ onOrderClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">♻️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-accent-brown">VALLEYCYCLE</h1>
              <p className="text-xs text-gray-600">RECYCLING</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium">Pricing</a>
            <a href="#how" className="text-gray-700 hover:text-primary-600 font-medium">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
            <button onClick={onOrderClick} className="btn-primary">ORDER NOW</button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-accent-brown">☰</button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-primary-600 py-2">Home</a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary-600 py-2">Pricing</a>
            <a href="#how" className="block text-gray-700 hover:text-primary-600 py-2">How It Works</a>
            <a href="#about" className="block text-gray-700 hover:text-primary-600 py-2">About Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-primary-600 py-2">Contact</a>
            <button onClick={onOrderClick} className="w-full btn-primary mt-2">ORDER NOW</button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
