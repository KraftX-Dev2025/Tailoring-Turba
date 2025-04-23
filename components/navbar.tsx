"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-opacity-80 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center font-bold text-gray-800 text-3xl">
            {/* <Image
              src="/placeholder.svg?height=50&width=180"
              alt="Tailoring Turba Logo"
              width={180}
              height={50}
              className="h-10 w-auto"
            /> */}
            TAILORING TURBA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/products" className="text-gray-800 hover:text-blue-500 font-medium text-lg">
              Products
            </Link>
            {/* <Link href="/design" className="text-gray-800 hover:text-blue-500 font-medium">
              Design Your Shirt
            </Link> */}
            <Link href="/about" className="text-gray-800 hover:text-blue-500 font-medium text-lg">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500 font-medium text-lg">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-blue-500 font-medium text-lg">
              FAQs
            </Link>
          </nav>

          {/* CTA and Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/cart" className="text-gray-800 hover:text-blue-500">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/my-orders" className="text-gray-800 hover:text-blue-500 font-medium">
              My Orders
            </Link>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
            <div className="flex items-center text-blue-500">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm">+91 8080917565</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="container-custom py-4 space-y-4">
            <Link
              href="/products"
              className="block text-gray-800 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/design"
              className="block text-gray-800 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Design Your Shirt
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="block text-gray-800 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/my-orders"
              className="block text-gray-800 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              My Orders
            </Link>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <Link
                href="/cart"
                className="flex items-center text-gray-800 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" /> Cart
              </Link>
              <Link href="/login" className="btn-primary" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </div>
            <div className="flex items-center text-blue-500 pt-2">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm">+91 8080917565</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
