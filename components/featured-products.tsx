import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Premium Cotton Round Neck T-Shirt",
    description: "100% cotton round neck t-shirt for everyday comfort",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹299",
    link: "/products/round-neck/premium",
  },
  {
    id: 2,
    name: "Premium Cotton Polo T-Shirt",
    description: "Stylish polo t-shirt made from premium cotton",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹399",
    link: "/products/polo/premium",
  },
  {
    id: 3,
    name: "V-Neck Cotton T-Shirt",
    description: "Comfortable v-neck t-shirt for a casual look",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹349",
    link: "/products/v-neck/cotton",
  },
  {
    id: 4,
    name: "Full Sleeve Cotton T-Shirt",
    description: "Full sleeve t-shirt for cooler weather",
    image: "/placeholder.svg?height=300&width=400",
    price: "₹449",
    link: "/products/full-sleeve/cotton",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our most popular t-shirts that are perfect for customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold">{product.price}</span>
                  <Link href="/design" className="text-blue-500 hover:underline font-medium">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
