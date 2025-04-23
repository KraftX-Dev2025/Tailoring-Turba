import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/placeholder.svg?height=50&width=180"
              alt="Tailoring Turba Logo"
              width={180}
              height={50}
              className="h-10 w-auto mb-4 invert"
            />
            <p className="text-gray-300 mb-4">
              Tailoring Turba is your one-stop solution for all custom t-shirt printing needs. We provide high-quality
              printing services for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-blue-500">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/design" className="text-gray-300 hover:text-blue-500">
                  Design Your Shirt
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/round-neck" className="text-gray-300 hover:text-blue-500">
                  Round Neck T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products/polo" className="text-gray-300 hover:text-blue-500">
                  Polo T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products/v-neck" className="text-gray-300 hover:text-blue-500">
                  V-Neck T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products/full-sleeve" className="text-gray-300 hover:text-blue-500">
                  Full Sleeve T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products/hoodies" className="text-gray-300 hover:text-blue-500">
                  Hoodies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                <span className="text-gray-300">123 T-Shirt Avenue, Fashion District, Mumbai, India 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <Link href="tel:+918080917565" className="text-gray-300 hover:text-blue-500">
                  +91 8080917565
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <Link href="mailto:info@Tailoring Turba.com" className="text-gray-300 hover:text-blue-500">
                  info@Tailoring Turba.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tailoring Turba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
