import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-bwt.jpg"
          alt="Custom T-Shirt Printing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            GET BEST DEALS ON <span className="text-zinc-900">Custom T-SHIRT</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Design your own custom t-shirts with our easy-to-use online designer. Upload your designs, choose colors,
            and create your perfect t-shirt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/design" className="btn-primary bg-blue-500 hover:bg-blue-600">
              Start Designing
            </Link>
            <Link
              href="/products"
              className="bg-white text-blue-500 px-6 py-2 rounded-xl font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
