'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import pigImg from '@/public/efpigs.jpg'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-300">Our Story</h2>
          <p className="section-subtitle text-gray-800">A family farm with generations of history and tradition</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-semibold text-farm-brown mb-4">From Our Family to Yours</h3>
            <p className="text-farm-gray mb-4">
              From our family to yours, founded in 2015, Ekselar Integrated Farms grew out of a family tradition of farming that spans over four decades. What began as a small, homegrown effort has evolved into a thriving agricultural enterprise all while staying true to our roots in sustainable and ethical farming.
            </p>
            <p className="text-farm-gray mb-6">
              At Ekselar, we honour the land through a blend of traditional methods and modern eco-friendly practices. Our animals are raised humanely with room to roam, and our crops are grown naturally without harmful pesticides or chemicals. Every product we offer is a reflection of our passion for quality, care and community.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 flex-1 min-w-[180px]">
                <div className="bg-farm-green/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-farm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-farm-brown">Organic</h4>
                  <p className="text-sm text-farm-gray">100% Certified</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 flex-1 min-w-[180px]">
                <div className="bg-farm-green/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-farm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-farm-brown">Fresh</h4>
                  <p className="text-sm text-farm-gray">Farm to Table</p>
                </div>
              </div>
            </div>
            <Button className="bg-yellow-300 text-gray-800 hover:text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src={pigImg}
                alt="Pigs on the farm"
                className="rounded-lg shadow-lg object-cover"
                width={800}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center border-4 border-farm-cream">
                <span className="text-3xl font-bold text-farm-green">10+</span>
                <span className="text-sm text-farm-gray text-center">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 