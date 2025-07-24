'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/efLogo.jpg'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  return (
    <nav className="bg-white py-1 shadow-md z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Ekselar Farms Logo"
            className="object-contain"
            width={64}
            height={64}
            priority
          />
          <span className="text-xl font-bold text-farm-green">Ekselar Farms</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-farm-gray hover:text-farm-green transition-colors">About Us</Link>
          <Link href="#products" className="text-farm-gray hover:text-farm-green transition-colors">Our Products</Link>
          <Link href="#contact" className="text-farm-gray hover:text-farm-green transition-colors">Contact</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-farm-gray focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="text-farm-gray hover:text-farm-green">Home</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-farm-gray hover:text-farm-green">About Us</Link>
            <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="text-farm-gray hover:text-farm-green">Our Products</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-farm-gray hover:text-farm-green">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

