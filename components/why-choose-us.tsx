import { CheckCircle, Clock, Award, Truck } from "lucide-react"

const features = [
  {
    id: 1,
    icon: <CheckCircle className="h-10 w-10 text-[#ff6b00]" />,
    title: "Premium Quality",
    description: "We use top-grade materials and advanced printing technology to deliver exceptional quality prints.",
  },
  {
    id: 2,
    icon: <Clock className="h-10 w-10 text-[#ff6b00]" />,
    title: "Quick Turnaround",
    description:
      "Get your prints delivered on time, every time. We offer fast turnaround times without compromising quality.",
  },
  {
    id: 3,
    icon: <Award className="h-10 w-10 text-[#ff6b00]" />,
    title: "Expert Design Team",
    description: "Our team of experienced designers can help you create stunning designs that stand out.",
  },
  {
    id: 4,
    icon: <Truck className="h-10 w-10 text-[#ff6b00]" />,
    title: "Free Delivery",
    description: "Enjoy free delivery on all orders above ₹1000 within the city limits.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrintShark?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best printing solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
