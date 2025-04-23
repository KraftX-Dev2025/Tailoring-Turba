import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// This would typically come from a database or API
const productCategories = {
  "round-neck": {
    title: "Round Neck T-Shirts",
    description: "Classic and comfortable round neck t-shirts for everyday wear",
    products: [
      {
        id: 1,
        name: "Basic Round Neck T-Shirt",
        description: "100% cotton round neck t-shirt for everyday comfort",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹249",
        link: "/products/round-neck/basic",
      },
      {
        id: 2,
        name: "Premium Round Neck T-Shirt",
        description: "Premium cotton round neck t-shirt with superior comfort",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹349",
        link: "/products/round-neck/premium",
      },
      {
        id: 3,
        name: "Slim Fit Round Neck T-Shirt",
        description: "Slim fit round neck t-shirt for a modern look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹299",
        link: "/products/round-neck/slim-fit",
      },
      {
        id: 4,
        name: "Oversized Round Neck T-Shirt",
        description: "Oversized round neck t-shirt for a relaxed fit",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹399",
        link: "/products/round-neck/oversized",
      },
    ],
  },
  polo: {
    title: "Polo T-Shirts",
    description: "Stylish polo t-shirts for a smart casual look",
    products: [
      {
        id: 1,
        name: "Basic Polo T-Shirt",
        description: "Classic polo t-shirt for a smart casual look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹349",
        link: "/products/polo/basic",
      },
      {
        id: 2,
        name: "Premium Cotton Polo T-Shirt",
        description: "Premium cotton polo t-shirt with superior comfort",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹449",
        link: "/products/polo/premium",
      },
      {
        id: 3,
        name: "Slim Fit Polo T-Shirt",
        description: "Slim fit polo t-shirt for a modern look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹399",
        link: "/products/polo/slim-fit",
      },
      {
        id: 4,
        name: "Striped Polo T-Shirt",
        description: "Striped polo t-shirt for a stylish look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹499",
        link: "/products/polo/striped",
      },
    ],
  },
  "v-neck": {
    title: "V-Neck T-Shirts",
    description: "Trendy v-neck t-shirts for a modern look",
    products: [
      {
        id: 1,
        name: "Basic V-Neck T-Shirt",
        description: "Classic v-neck t-shirt for a casual look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹249",
        link: "/products/v-neck/basic",
      },
      {
        id: 2,
        name: "Premium V-Neck T-Shirt",
        description: "Premium cotton v-neck t-shirt with superior comfort",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹349",
        link: "/products/v-neck/premium",
      },
      {
        id: 3,
        name: "Slim Fit V-Neck T-Shirt",
        description: "Slim fit v-neck t-shirt for a modern look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹299",
        link: "/products/v-neck/slim-fit",
      },
      {
        id: 4,
        name: "Deep V-Neck T-Shirt",
        description: "Deep v-neck t-shirt for a stylish look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹399",
        link: "/products/v-neck/deep",
      },
    ],
  },
  "full-sleeve": {
    title: "Full Sleeve T-Shirts",
    description: "Full sleeve t-shirts for cooler weather",
    products: [
      {
        id: 1,
        name: "Basic Full Sleeve T-Shirt",
        description: "Classic full sleeve t-shirt for cooler weather",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹349",
        link: "/products/full-sleeve/basic",
      },
      {
        id: 2,
        name: "Premium Full Sleeve T-Shirt",
        description: "Premium cotton full sleeve t-shirt with superior comfort",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹449",
        link: "/products/full-sleeve/premium",
      },
      {
        id: 3,
        name: "Slim Fit Full Sleeve T-Shirt",
        description: "Slim fit full sleeve t-shirt for a modern look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹399",
        link: "/products/full-sleeve/slim-fit",
      },
      {
        id: 4,
        name: "Henley Full Sleeve T-Shirt",
        description: "Henley full sleeve t-shirt for a stylish look",
        image: "/placeholder.svg?height=300&width=400",
        price: "₹499",
        link: "/products/full-sleeve/henley",
      },
    ],
  },
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = productCategories[params.category as keyof typeof productCategories]

  if (!category) {
    return {
      title: "Product Not Found | Tailoring Turba",
      description: "The requested product category could not be found.",
    }
  }

  return {
    title: `${category.title} | Tailoring Turba`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = productCategories[params.category as keyof typeof productCategories]

  if (!category) {
    notFound()
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <Link href={product.link} key={product.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-500 font-bold">{product.price}</span>
                      <span className="text-blue-500 font-medium group-hover:underline">View Details</span>
                    </div>
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
