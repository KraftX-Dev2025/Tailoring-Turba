"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Minus, Plus, ShoppingCart } from "lucide-react"

// This would typically come from a database or API
const products = {
  "round-neck": {
    premium: {
      id: 1,
      name: "Premium Round Neck T-Shirt",
      description:
        "Premium cotton round neck t-shirt with superior comfort. Perfect for everyday wear and customization.",
      longDescription: `
        <p>Our Premium Round Neck T-Shirt is perfect for those who value comfort and style. Made from 100% premium cotton, this t-shirt offers exceptional softness and durability.</p>
        <p>Features:</p>
        <ul>
          <li>100% premium cotton</li>
          <li>220 GSM fabric weight for durability</li>
          <li>Ribbed collar for a clean finish</li>
          <li>Double-stitched hems for added strength</li>
          <li>Pre-shrunk to minimize shrinkage after washing</li>
          <li>Available in multiple colors</li>
        </ul>
        <p>This premium round neck t-shirt is perfect for custom printing and will ensure your designs look great while providing maximum comfort to the wearer. Whether for personal use, team events, or promotional merchandise, this t-shirt is an excellent choice.</p>
      `,
      price: 349,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      options: {
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        color: ["Black", "White", "Navy", "Red", "Green", "Yellow", "Gray"],
        quantity: [1, 5, 10, 25, 50, 100],
      },
      defaultOptions: {
        size: "M",
        color: "Black",
        quantity: 1,
      },
    },
  },
  polo: {
    premium: {
      id: 2,
      name: "Premium Cotton Polo T-Shirt",
      description:
        "Premium cotton polo t-shirt with superior comfort. Perfect for a smart casual look and customization.",
      longDescription: `
        <p>Our Premium Cotton Polo T-Shirt is designed for those who want to combine comfort with a smart casual look. Made from premium cotton with a honeycomb texture, this polo t-shirt offers exceptional softness and breathability.</p>
        <p>Features:</p>
        <ul>
          <li>100% premium cotton with honeycomb texture</li>
          <li>220 GSM fabric weight for durability</li>
          <li>Classic three-button placket</li>
          <li>Ribbed collar and cuffs</li>
          <li>Double-stitched hems for added strength</li>
          <li>Available in multiple colors</li>
        </ul>
        <p>This premium polo t-shirt is perfect for custom printing and will ensure your designs look great while providing a smart casual appearance. Ideal for corporate events, team uniforms, or casual business attire.</p>
      `,
      price: 449,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      options: {
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        color: ["Black", "White", "Navy", "Red", "Green", "Yellow", "Gray"],
        quantity: [1, 5, 10, 25, 50, 100],
      },
      defaultOptions: {
        size: "M",
        color: "Black",
        quantity: 1,
      },
    },
  },
}

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
  const productData = products[params.category as keyof typeof products]?.[params.product as string]

  if (!productData) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState(productData.defaultOptions)
  const [quantity, setQuantity] = useState(1)

  const handleOptionChange = (option: string, value: string | number) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: value,
    })
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const addToCart = () => {
    // This would typically add the product to a cart state or make an API call
    alert("Product added to cart!")
  }

  const addToWishlist = () => {
    // This would typically add the product to a wishlist state or make an API call
    alert("Product added to wishlist!")
  }

  const startDesigning = () => {
    // Redirect to design page with product info
    window.location.href = `/design?product=${params.category}-${params.product}`
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="relative h-[400px] md:h-[500px] mb-4 rounded-lg overflow-hidden">
              <Image
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-24 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === index ? "border-blue-500" : "border-transparent"}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${productData.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <nav className="flex text-sm mb-4">
              <Link href="/" className="text-gray-500 hover:text-blue-500">
                Home
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/products" className="text-gray-500 hover:text-blue-500">
                Products
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href={`/products/${params.category}`} className="text-gray-500 hover:text-blue-500">
                {params.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Link>
            </nav>

            <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
            <p className="text-xl text-blue-500 font-bold mb-4">₹{productData.price}</p>
            <p className="text-gray-600 mb-6">{productData.description}</p>

            <div className="space-y-6 mb-8">
              {/* Size Options */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {productData.options.size.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-xl ${selectedOptions.size === size
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-300 hover:border-blue-500"
                        }`}
                      onClick={() => handleOptionChange("size", size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Options */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {productData.options.color.map((color) => (
                    <button
                      key={color}
                      className={`px-4 py-2 border rounded-md ${selectedOptions.color === color
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-300 hover:border-blue-500"
                        }`}
                      onClick={() => handleOptionChange("color", color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Options */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center"
                  />
                  <button
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
                onClick={startDesigning}
              >
                Start Designing Now
              </button>
              <button
                className="flex-1 border border-blue-500 text-blue-500 py-3 px-6 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                onClick={addToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>

            {/* Product Features */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Premium Fabric"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span>Premium Fabric</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="100% Secure Payment"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span>100% Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Free Delivery"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span>Free Delivery</span>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-xl font-bold mb-4">Product Description</h3>
              <div
                className="text-gray-600 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: productData.longDescription }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
