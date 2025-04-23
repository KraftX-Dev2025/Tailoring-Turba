import TShirtDesigner from "@/components/tshirt-designer/TShirtDesigner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "T-Shirt Designer | Custom T-Shirt Printing",
  description:
    "Design your own custom t-shirt with our easy-to-use online designer. Upload images, add text, and customize colors.",
}

export default function DesignPage() {
  return (
    <div className="pt-20">
      <TShirtDesigner />
    </div>
  )
}
