"use client"
import Image from "next/image"
import type { TShirtStyle } from "./types"

interface TShirtStyleSelectorProps {
  styles: TShirtStyle[]
  selectedStyle: TShirtStyle
  onSelectStyle: (style: TShirtStyle) => void
}

export default function TShirtStyleSelector({ styles, selectedStyle, onSelectStyle }: TShirtStyleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {styles.map((style) => (
        <button
          key={style.id}
          className={`p-2 rounded-md border ${
            selectedStyle.id === style.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
          }`}
          onClick={() => onSelectStyle(style)}
        >
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 mb-1">
              <Image src={`/tshirts/${style.id}-thumbnail.png`} alt={style.name} fill className="object-contain" />
            </div>
            <span className="text-sm">{style.name}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
