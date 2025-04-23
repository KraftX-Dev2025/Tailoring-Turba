import { MousePointer, Upload, Palette, ShoppingBag } from "lucide-react"

const steps = [
  {
    id: 1,
    icon: <MousePointer className="h-10 w-10 text-blue-500" />,
    title: "Choose Your Product",
    description: "Select from our wide range of high-quality t-shirts in various styles and colors.",
  },
  {
    id: 2,
    icon: <Upload className="h-10 w-10 text-blue-500" />,
    title: "Upload Your Design",
    description: "Upload your own design or create one using our online designer tool.",
  },
  {
    id: 3,
    icon: <Palette className="h-10 w-10 text-blue-500" />,
    title: "Customize",
    description: "Position, resize, and adjust your design to get it just right.",
  },
  {
    id: 4,
    icon: <ShoppingBag className="h-10 w-10 text-blue-500" />,
    title: "Order & Receive",
    description: "Place your order and receive your custom t-shirt at your doorstep.",
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Creating your custom t-shirt is easy with our simple 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
