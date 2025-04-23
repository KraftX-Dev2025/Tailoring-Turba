import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Tailoring Turba",
  description:
    "Browse our wide range of high-quality t-shirts for customization. Choose from round neck, polo, v-neck, and full sleeve t-shirts.",
}

const productCategories = [
  {
    id: 1,
    name: "Round Neck T-Shirts",
    description: "Classic and comfortable round neck t-shirts for everyday wear",
    image: "/placeholder.svg?height=300&width=400",
    link: "/products/round-neck",
  },
  {
    id: 2,
    name: "Polo T-Shirts",
    description: "Stylish polo t-shirts for a smart casual look",
    image: "/placeholder.svg?height=300&width=400",
    link: "/products/polo",
  },
  {
    id: 3,
    name: "V-Neck T-Shirts",
    description: "Trendy v-neck t-shirts for a modern look",
    image: "/placeholder.svg?height=300&width=400",
    link: "/products/v-neck",
  },
  {
    id: 4,
    name: "Full Sleeve T-Shirts",
    description: "Full sleeve t-shirts for cooler weather",
    image: "/placeholder.svg?height=300&width=400",
    link: "/products/full-sleeve",
  },
  {
    id: 5,
    name: "Hoodies",
    description: "Comfortable hoodies for a casual look",
    image: "/placeholder.svg?height=300&width=400",
    link: "/products/hoodies",
  },
  {
    id: 6,
    name: "Sweatshirts",
    description: "Cozy sweatshirts for everyday comfort",
    image: "/placeholder.svg?height=300&width=400",
    link: "/products/sweatshirts",
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our wide range of high-quality t-shirts for customization. Choose from various styles and colors to
              create your perfect custom t-shirt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Link href={category.link} key={category.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <span className="text-blue-500 font-medium group-hover:underline">View Products →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
