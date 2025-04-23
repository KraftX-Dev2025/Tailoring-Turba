"use client"

interface Color {
  name: string
  value: string
}

interface ColorPaletteProps {
  colors: Color[]
  selectedColor: Color
  onSelectColor: (color: Color) => void
}

export default function ColorPalette({ colors, selectedColor, onSelectColor }: ColorPaletteProps) {
  return (
    <>
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-8 h-8 rounded-full border-2 ${
            selectedColor.name === color.name ? "border-blue-500" : "border-gray-300"
          }`}
          style={{ backgroundColor: color.value }}
          onClick={() => onSelectColor(color)}
          title={color.name}
        />
      ))}
    </>
  )
}
