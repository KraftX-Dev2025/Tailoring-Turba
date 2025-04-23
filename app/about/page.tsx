import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Tailoring Turba",
  description:
    "Learn about Tailoring Turba, our mission, values, and the team behind our custom t-shirt printing solutions.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tailoring Turba</h1>
              <p className="text-gray-600 text-lg mb-6">
                Tailoring Turba is a leading custom t-shirt printing solutions provider dedicated to helping individuals and
                businesses express themselves through high-quality custom apparel.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2018, we have grown from a small local print shop to a comprehensive custom t-shirt service
                provider with state-of-the-art equipment and a team of experienced professionals.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/products" className="btn-secondary">
                  Our Products
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Tailoring Turba Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              To provide individuals and businesses with high-quality custom t-shirt printing solutions that help them
              express their unique identity, delivered with exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We are committed to delivering the highest quality custom t-shirts using premium materials and
                  advanced printing technology.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  We put our customers first, providing personalized service and solutions tailored to their specific
                  needs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from design and printing to customer service and
                  delivery.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We deliver on our promises, ensuring on-time delivery and consistent quality for every order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tailoring Turba History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Tailoring Turba was founded in 2018 by a group of t-shirt enthusiasts who saw a gap in the market for
                high-quality, customer-focused custom t-shirt printing services.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with just a small shop and a few printing machines, we have grown steadily over the years,
                expanding our services and investing in state-of-the-art equipment to meet the evolving needs of our
                customers.
              </p>
              <p className="text-gray-600 mb-4">
                Today, Tailoring Turba is a trusted name in the custom t-shirt printing industry, serving individuals and
                businesses of all sizes across the country. Our commitment to quality, innovation, and customer
                satisfaction remains at the heart of everything we do.
              </p>
              <p className="text-gray-600">
                We continue to evolve and adapt to new technologies and trends in the printing industry, ensuring that
                our customers always receive the best possible products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to providing you with the best custom t-shirt printing
              solutions and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">Rajesh Sharma</h3>
                <p className="text-blue-500 mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 10 years of experience in the printing industry, Rajesh leads our team with passion and
                  vision.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">Priya Patel</h3>
                <p className="text-blue-500 mb-2">Design Director</p>
                <p className="text-gray-600 text-sm">
                  Priya brings creativity and innovation to our design team, ensuring our clients receive stunning
                  visual solutions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">Amit Verma</h3>
                <p className="text-blue-500 mb-2">Production Manager</p>
                <p className="text-gray-600 text-sm">
                  Amit oversees our production process, ensuring high-quality standards and timely delivery for every
                  order.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">Neha Singh</h3>
                <p className="text-blue-500 mb-2">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Neha ensures our customers receive exceptional service and support throughout their journey with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-500">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Custom T-Shirt?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Design your own custom t-shirt today and stand out from the crowd with your unique style.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/design"
                className="bg-white text-blue-500 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                Start Designing
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
