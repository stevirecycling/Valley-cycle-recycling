'use client'

const Footer = () => {
  return (
    <footer className="bg-accent-brown-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">♻️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">VALLEYCYCLE</h3>
                <p className="text-xs text-gray-300">RECYCLING</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Serving Stevensville and the Bitterroot Valley with convenient recycling solutions.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Pickup Service</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT US</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2"><span>📍</span><p className="text-gray-300">Stevensville & Bitterroot Valley, Montana</p></div>
              <div className="flex items-center gap-2"><span>📞</span><a href="tel:+14065614274" className="text-gray-300 hover:text-white transition-colors">(406) 561-4274</a></div>
              <div className="flex items-center gap-2"><span>📧</span><a href="mailto:stevi.valley.cycling@gmail.com" className="text-gray-300 hover:text-white transition-colors">stevi.valley.cycling@gmail.com</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; 2024 Valley Cycle Recycling. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://www.facebook.com" className="hover:text-white transition-colors">Follow Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
