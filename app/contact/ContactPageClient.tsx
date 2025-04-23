"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions or need a quote? Get in touch with our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 T-Shirt Avenue, Fashion District
                        <br />
                        Mumbai, India 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-600">
                        +91 8080917565
                        <br />
                        +91 9876543210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-600">
                        info@Tailoring Turba.com
                        <br />
                        support@Tailoring Turba.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Quote Request">Quote Request</option>
                          <option value="Order Status">Order Status</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit our office to discuss your custom t-shirt printing needs in person.
            </p>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            {/* This would typically be a Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Map Placeholder - Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
