import Link from "next/link"
import Image from "next/image"
import { Shirt, ShirtIcon as ShirtRound, FlagOffIcon as ShirtOff, ShirtIcon } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Round Neck T-Shirts",
    description: "Classic and comfortable round neck t-shirts for everyday wear",
    icon: <ShirtRound className="h-10 w-10 text-blue-500" />,
    image: "/placeholder.svg?height=300&width=300",
    link: "/products/round-neck",
  },
  {
    id: 2,
    name: "Polo T-Shirts",
    description: "Stylish polo t-shirts for a smart casual look",
    icon: <ShirtIcon className="h-10 w-10 text-blue-500" />,
    image: "/placeholder.svg?height=300&width=300",
    link: "/products/polo",
  },
  {
    id: 3,
    name: "V-Neck T-Shirts",
    description: "Trendy v-neck t-shirts for a modern look",
    icon: <ShirtOff className="h-10 w-10 text-blue-500" />,
    image: "/placeholder.svg?height=300&width=300",
    link: "/products/v-neck",
  },
  {
    id: 4,
    name: "Full Sleeve T-Shirts",
    description: "Full sleeve t-shirts for cooler weather",
    icon: <Shirt className="h-10 w-10 text-blue-500" />,
    image: "/placeholder.svg?height=300&width=300",
    link: "/products/full-sleeve",
  },
]

export default function TShirtCategories() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">T-Shirt Categories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of high-quality t-shirts to customize and make your own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              href="/design"
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-blue-500 font-medium">View Products →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
