'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCallback, useRef } from 'react'


const SLIDES = [
  {
    src: '/efmainc.jpg',
    alt: 'Fresh produce',
    text: 'Farm Fresh Produce',
    subtext: 'Fresh From Our Farm To Your Table Experience natures flavour with our organic produce',
  },
  {
    src: '/noilers.jpg',
    alt: 'Noiler birds',
    text: 'Healthy Noiler Birds Raised Organically',
  },
  {
    src: '/pepper.jpg',
    alt: 'Fresh Pepper',
    text: 'Fresh Pepper from Our Farm',
  },
  {
    src: '/fishpond.jpg',
    alt: 'Fish Pond',
    text: 'Locally Sourced Fish from Our Pond',
  },
  {
    src: '/casava.jpg',
    alt: 'Green Crops',
    text: 'Locally Grown Crops and Vegetables',
  },
  {
    src: '/efgoats.jpg',
    alt: 'Healthy Goats',
    text: 'Healthy Goats Raised Organically',
  },
  {
    src: '/plains.jpg',
    alt: 'Green land',
    text: 'Locally Grown Crops and Vegetables',
  },
]

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  )

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])

  return (
    <section className="relative overflow-hidden" id='home'>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {SLIDES.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_100%] relative h-[90vh]"
              key={index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end justify-start px-8 pb-12 text-left sm:items-center sm:justify-center sm:text-center">
                <div className="space-y-6 max-w-lg">
                  <h2 className="text-7xl md:text-5xl font-bold text-white">
                    {slide.text}
                  </h2>
                  <h4 className="text-3xl md:text-4xl font-semibold text-yellow-200">
                    {slide.subtext}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                    <Button className="bg-farm-green text-white px-8 py-3 text-lg">
                      Explore Our Products
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg hover:bg-yellow-300 hover:text-gray-800 transition-all"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-black p-2 rounded-full hover:bg-white"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-black p-2 rounded-full hover:bg-white"
        aria-label="Next"
      >
        ›
      </button>
    </section>
  )
}



