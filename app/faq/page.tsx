import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQs | Tailoring Turba",
  description: "Find answers to frequently asked questions about our custom t-shirt printing services.",
}

export default function FAQPage() {
  return (
    <section className="pt-32 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our custom t-shirt printing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {/* Ordering Process */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Ordering Process</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">How do I place an order for custom t-shirts?</h3>
                  <p className="text-gray-600">
                    You can place an order by using our online designer tool to create your custom t-shirt. Simply
                    select your preferred t-shirt style, upload your design, customize it, and proceed to checkout.
                    Alternatively, you can contact our customer service team for assistance.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">What file formats do you accept for designs?</h3>
                  <p className="text-gray-600">
                    We accept PNG, JPG, JPEG, and SVG file formats for designs. For best results, we recommend using
                    high-resolution images (at least 300 DPI) with transparent backgrounds (PNG or SVG).
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">What is the minimum order quantity?</h3>
                  <p className="text-gray-600">
                    There is no minimum order quantity. You can order as few as one custom t-shirt. However, bulk orders
                    receive discounted pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Printing & Quality */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Printing & Quality</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">What printing methods do you use?</h3>
                  <p className="text-gray-600">
                    We use several printing methods including Direct-to-Garment (DTG), Screen Printing, and Heat
                    Transfer. The method used depends on your design, quantity, and t-shirt material. Our team will
                    select the best method to ensure optimal quality for your specific order.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">How durable are the prints?</h3>
                  <p className="text-gray-600">
                    Our prints are highly durable and designed to withstand regular washing and wearing. To maintain
                    print quality, we recommend washing your t-shirts inside out in cold water and avoiding bleach or
                    harsh detergents.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">What is the quality of your t-shirts?</h3>
                  <p className="text-gray-600">
                    We use premium quality t-shirts made from 100% cotton or cotton blends, depending on the style. Our
                    t-shirts are pre-shrunk, comfortable, and durable. We offer various styles including round neck,
                    polo, v-neck, and full sleeve t-shirts in multiple colors.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping & Delivery</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">How long does it take to receive my order?</h3>
                  <p className="text-gray-600">
                    Production typically takes 3-5 business days, and shipping takes an additional 2-4 business days
                    within India. For bulk orders or during peak seasons, production may take longer. You can check the
                    status of your order in your account or contact our customer service team.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">Do you offer international shipping?</h3>
                  <p className="text-gray-600">
                    Yes, we offer international shipping to select countries. International shipping typically takes
                    7-14 business days, depending on the destination. Additional shipping charges and customs duties may
                    apply.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">Is there a shipping fee?</h3>
                  <p className="text-gray-600">
                    We offer free shipping on orders above ₹1000 within India. For orders below ₹1000, a shipping fee of
                    ₹100 is applicable. International shipping fees vary based on the destination country and order
                    weight.
                  </p>
                </div>
              </div>
            </div>

            {/* Returns & Refunds */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Returns & Refunds</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">What is your return policy?</h3>
                  <p className="text-gray-600">
                    Since our products are custom-made, we do not accept returns unless there is a defect in the product
                    or a mistake on our part. If you receive a defective product, please contact our customer service
                    team within 7 days of receiving your order.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">How do I request a refund?</h3>
                  <p className="text-gray-600">
                    If you receive a defective product or if there was a mistake on our part, please contact our
                    customer service team with photos of the issue. If approved, we will either replace the product or
                    issue a refund, depending on your preference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Couldn't find the answer you were looking for? Contact our customer service team for assistance.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
