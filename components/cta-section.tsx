import Link from "next/link"

export default function CTASection() {
  return (
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
  )
}
