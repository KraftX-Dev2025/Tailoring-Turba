"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Upload, Type, Info, Share, ChevronUp, ChevronDown, ChevronRight } from "lucide-react"

// T-shirt colors
const tshirtColors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#1E3A8A" },
  { name: "Red", value: "#DC2626" },
  { name: "Green", value: "#059669" },
  { name: "Yellow", value: "#FBBF24" },
  { name: "Purple", value: "#7C3AED" },
  { name: "Gray", value: "#6B7280" },
  { name: "Ocean", value: "#67E8F9" },
  { name: "Maroon", value: "#7F1D1D" },
  { name: "Bottle-Green", value: "#064E3B" },
  { name: "Moss-Green", value: "#65A30D" },
]

// T-shirt styles
const tshirtStyles = [
  { id: "round-neck", name: "Round Neck", image: "/placeholder.svg?height=100&width=100" },
  { id: "polo", name: "Polo", image: "/placeholder.svg?height=100&width=100" },
  { id: "v-neck", name: "V-Neck", image: "/placeholder.svg?height=100&width=100" },
  { id: "full-sleeve", name: "Full Sleeve", image: "/placeholder.svg?height=100&width=100" },
]

export default function TShirtDesigner() {
  const [selectedColor, setSelectedColor] = useState(tshirtColors[0])
  const [selectedStyle, setSelectedStyle] = useState(tshirtStyles[0])
  const [selectedView, setSelectedView] = useState("front")
  const [designImage, setDesignImage] = useState<string | null>(null)
  const [designPosition, setDesignPosition] = useState({ x: 0, y: 0 })
  const [designSize, setDesignSize] = useState({ width: 200, height: 200 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const canvasRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setDesignImage(event.target.result as string)
          // Reset position to center
          setDesignPosition({ x: 0, y: 0 })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle design drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!designImage) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - designPosition.x,
      y: e.clientY - designPosition.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !canvasRef.current) return

    const canvasBounds = canvasRef.current.getBoundingClientRect()
    const canvasWidth = canvasBounds.width
    const canvasHeight = canvasBounds.height

    // Calculate new position
    let newX = e.clientX - dragStart.x
    let newY = e.clientY - dragStart.y

    // Limit movement within canvas bounds
    const maxX = canvasWidth / 2 - designSize.width / 2
    const maxY = canvasHeight / 2 - designSize.height / 2

    newX = Math.max(-maxX, Math.min(newX, maxX))
    newY = Math.max(-maxY, Math.min(newY, maxY))

    setDesignPosition({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle design resize
  const increaseSize = () => {
    if (designSize.width < 300) {
      setDesignSize({
        width: designSize.width + 20,
        height: designSize.height + 20,
      })
    }
  }

  const decreaseSize = () => {
    if (designSize.width > 100) {
      setDesignSize({
        width: designSize.width - 20,
        height: designSize.height - 20,
      })
    }
  }

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  // Clean up event listeners
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Design Your Custom T-Shirt</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* T-shirt Preview */}
        <div className="lg:col-span-2 bg-gray-100 rounded-lg p-4">
          <div className="bg-white rounded-lg p-4 h-[500px] relative">
            {/* T-shirt view selector */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-2 flex flex-col gap-2">
              <button
                className={`p-2 rounded-md ${selectedView === "front" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedView("front")}
              >
                Front
              </button>
              <button
                className={`p-2 rounded-md ${selectedView === "back" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedView("back")}
              >
                Back
              </button>
              <button
                className={`p-2 rounded-md ${selectedView === "left" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedView("left")}
              >
                Left
              </button>
              <button
                className={`p-2 rounded-md ${selectedView === "right" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedView("right")}
              >
                Right
              </button>
            </div>

            {/* T-shirt canvas */}
            <div
              ref={canvasRef}
              className="w-full h-full flex items-center justify-center cursor-move"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <div className="relative" style={{ width: "300px", height: "400px" }}>
                {/* T-shirt base image with selected color */}
                <div className="absolute inset-0 z-0" style={{ backgroundColor: selectedColor.value }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YZW91mrg0HMbeoivVi4hIQMhvk3Pak.png"
                    alt={`${selectedStyle.name} T-Shirt ${selectedView} view`}
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>

                {/* Design overlay */}
                {designImage && (
                  <div
                    className="absolute z-10"
                    style={{
                      width: `${designSize.width}px`,
                      height: `${designSize.height}px`,
                      left: `50%`,
                      top: `50%`,
                      transform: `translate(calc(-50% + ${designPosition.x}px), calc(-50% + ${designPosition.y}px))`,
                    }}
                  >
                    <Image
                      src={designImage || "/placeholder.svg"}
                      alt="Custom Design"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Design size controls */}
            {designImage && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-2 flex flex-col gap-2">
                <button className="p-2 rounded-md hover:bg-gray-100" onClick={increaseSize}>
                  <ChevronUp className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100" onClick={decreaseSize}>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Color selector */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Select Color:</h3>
            <div className="flex flex-wrap gap-2">
              {tshirtColors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor.name === color.name ? "border-blue-500" : "border-gray-300"}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Design Tools */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Customize Your T-Shirt</h2>

          {/* T-shirt style selector */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Style:</h3>
            <div className="grid grid-cols-2 gap-2">
              {tshirtStyles.map((style) => (
                <button
                  key={style.id}
                  className={`p-2 rounded-md border ${selectedStyle.id === style.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                  onClick={() => setSelectedStyle(style)}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 mb-1">
                      <Image src={style.image || "/placeholder.svg"} alt={style.name} fill className="object-contain" />
                    </div>
                    <span className="text-sm">{style.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Design tools */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              onClick={handleUploadClick}
            >
              <Upload className="h-8 w-8 text-blue-500 mb-2" />
              <span>Upload Design</span>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
            </button>

            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Type className="h-8 w-8 text-blue-500 mb-2" />
              <span>Add Text</span>
            </button>

            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Image src="/placeholder.svg?height=32&width=32" alt="Template" width={32} height={32} className="mb-2" />
              <span>Template</span>
            </button>

            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Info className="h-8 w-8 text-blue-500 mb-2" />
              <span>Product Details</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Design Instructions:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Click and drag to position your design</li>
              <li>• Use the size controls to resize your design</li>
              <li>• Switch between views to design all sides</li>
              <li>• For best results, use high-resolution images</li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center justify-center">
              Save & Proceed
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>

            <button className="w-full border border-gray-300 py-3 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              Check Price
            </button>

            <button className="w-full border border-gray-300 py-3 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Share className="h-5 w-5 mr-2" />
              Share Design
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
