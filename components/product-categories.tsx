import Link from "next/link"
import { CreditCard, FileText, Flag, Briefcase, Package } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Business Cards",
    description: "Make a lasting impression with our premium business cards",
    icon: <CreditCard className="h-10 w-10 text-[#ff6b00]" />,
    link: "/products/business-cards",
  },
  {
    id: 2,
    name: "Flyers & Brochures",
    description: "Spread your message with eye-catching flyers and brochures",
    icon: <FileText className="h-10 w-10 text-[#ff6b00]" />,
    link: "/products/flyers",
  },
  {
    id: 3,
    name: "Banners & Signage",
    description: "Get noticed with high-quality banners and signage",
    icon: <Flag className="h-10 w-10 text-[#ff6b00]" />,
    link: "/products/banners",
  },
  {
    id: 4,
    name: "Stationery",
    description: "Complete your brand identity with custom stationery",
    icon: <Briefcase className="h-10 w-10 text-[#ff6b00]" />,
    link: "/products/stationery",
  },
  {
    id: 5,
    name: "Packaging",
    description: "Impress your customers with custom packaging solutions",
    icon: <Package className="h-10 w-10 text-[#ff6b00]" />,
    link: "/products/packaging",
  },
]

export default function ProductCategories() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of high-quality printing products designed to help your business stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-[#ff6b00] font-medium">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
