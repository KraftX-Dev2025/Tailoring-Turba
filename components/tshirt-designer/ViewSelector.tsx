"use client"
import type { TShirtView } from "./types"

interface ViewSelectorProps {
  selectedView: TShirtView
  onViewChange: (view: TShirtView) => void
}

export default function ViewSelector({ selectedView, onViewChange }: ViewSelectorProps) {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-2 flex flex-col gap-2">
      <button
        className={`p-2 rounded-md ${selectedView === "front" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
        onClick={() => onViewChange("front")}
      >
        Front
      </button>
      <button
        className={`p-2 rounded-md ${selectedView === "back" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
        onClick={() => onViewChange("back")}
      >
        Back
      </button>
      <button
        className={`p-2 rounded-md ${selectedView === "left" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
        onClick={() => onViewChange("left")}
      >
        Left
      </button>
      <button
        className={`p-2 rounded-md ${selectedView === "right" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"}`}
        onClick={() => onViewChange("right")}
      >
        Right
      </button>
    </div>
  )
}
