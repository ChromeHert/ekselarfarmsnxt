'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-400 text-white pt-16 pb-8" id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ekselar Integrated Farms</h3>
            <p className="text-gray-800 mb-4">
              Providing organic produce and ethically raised livestock since 2015. From our farm to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-800 hover:text-farm-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-800 hover:text-farm-yellow transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-800 hover:text-farm-yellow transition-colors">Our Products</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-farm-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-800 hover:text-yellow-300 transition-colors">Catfish (Live & Smoked)</a></li>
              <li><a href="#" className="text-gray-800 hover:text-yellow-300 transition-colors">Poultry Birds (Noiler)</a></li>
              <li><a href="#" className="text-gray-800 hover:text-yellow-300 transition-colors">Goats</a></li>
              <li><a href="#" className="text-gray-800 hover:text-yellow-300 transition-colors">Pigs</a></li>
              <li><a href="#" className="text-gray-800 hover:text-yellow-300 transition-colors">Crops & Vegetables</a></li>
              <li><a href="#" className="text-gray-800 hover:text-yellow-300 transition-colors">Snail</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-800 mb-4">
              Subscribe to our newsletter for seasonal updates, special offers, and farming tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
              />
              <button
                type="submit"
                className="bg-yellow-300 text-green-400 px-4 py-2 rounded-r-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-800 text-sm">
          <p>&copy; {new Date().getFullYear()} Ekselar Integrated Farms. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
