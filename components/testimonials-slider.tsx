"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "Marketing Director, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "PrintShark delivered exceptional quality business cards and brochures for our company. The team was professional, responsive, and the turnaround time was impressive. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Owner, Cafe Delight",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We ordered menus and promotional flyers from PrintShark and were blown away by the quality. The colors were vibrant, and the paper quality was excellent. Will definitely use their services again!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    position: "Event Manager, Celebration Inc.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The banners an  Celebration Inc.",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The banners and posters we ordered for our corporate event were perfect. The quality was outstanding, and they were delivered ahead of schedule. PrintShark has become our go-to printing partner for all our events.",
    rating: 4,
  },
]

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
