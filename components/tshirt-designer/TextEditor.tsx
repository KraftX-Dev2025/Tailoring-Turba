"use client"

import type React from "react"
import { useState } from "react"
import { Bold, Italic, Underline } from "lucide-react"
import type { DesignElement } from "./types"

interface TextEditorProps {
  element: DesignElement
  onUpdateContent: (content: string) => void
  onUpdateProps: (props: Partial<DesignElement["textProps"]>) => void
}

const fontFamilies = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Trebuchet MS",
  "Impact",
]

const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72]

export default function TextEditor({ element, onUpdateContent, onUpdateProps }: TextEditorProps) {
  const [text, setText] = useState(element.content)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value
    setText(newText)
    onUpdateContent(newText)
  }

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateProps({ fontFamily: e.target.value })
  }

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateProps({ fontSize: Number.parseInt(e.target.value) })
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProps({ color: e.target.value })
  }

  const toggleBold = () => {
    onUpdateProps({ bold: !element.textProps?.bold })
  }

  const toggleItalic = () => {
    onUpdateProps({ italic: !element.textProps?.italic })
  }

  const toggleUnderline = () => {
    onUpdateProps({ underline: !element.textProps?.underline })
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      <h3 className="font-semibold mb-2">Text Editor:</h3>

      <div className="space-y-3">
        {/* Text input */}
        <div>
          <label htmlFor="text-content" className="block text-sm font-medium text-gray-700 mb-1">
            Text
          </label>
          <input
            id="text-content"
            type="text"
            value={text}
            onChange={handleTextChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Font family */}
        <div>
          <label htmlFor="font-family" className="block text-sm font-medium text-gray-700 mb-1">
            Font
          </label>
          <select
            id="font-family"
            value={element.textProps?.fontFamily || "Arial"}
            onChange={handleFontFamilyChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {fontFamilies.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
        </div>

        {/* Font size */}
        <div>
          <label htmlFor="font-size" className="block text-sm font-medium text-gray-700 mb-1">
            Size
          </label>
          <select
            id="font-size"
            value={element.textProps?.fontSize || 24}
            onChange={handleFontSizeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size}px
              </option>
            ))}
          </select>
        </div>

        {/* Text color */}
        <div>
          <label htmlFor="text-color" className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <div className="flex items-center">
            <input
              id="text-color"
              type="color"
              value={element.textProps?.color || "#000000"}
              onChange={handleColorChange}
              className="w-10 h-10 p-0 border-0 rounded-md cursor-pointer"
            />
            <span className="ml-2">{element.textProps?.color || "#000000"}</span>
          </div>
        </div>

        {/* Text formatting */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={toggleBold}
              className={`p-2 border rounded-md ${
                element.textProps?.bold ? "bg-blue-100 border-blue-500" : "border-gray-300"
              }`}
              title="Bold"
            >
              <Bold size={16} />
            </button>
            <button
              type="button"
              onClick={toggleItalic}
              className={`p-2 border rounded-md ${
                element.textProps?.italic ? "bg-blue-100 border-blue-500" : "border-gray-300"
              }`}
              title="Italic"
            >
              <Italic size={16} />
            </button>
            <button
              type="button"
              onClick={toggleUnderline}
              className={`p-2 border rounded-md ${
                element.textProps?.underline ? "bg-blue-100 border-blue-500" : "border-gray-300"
              }`}
              title="Underline"
            >
              <Underline size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
