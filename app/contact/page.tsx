import ContactPageClient from "./ContactPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Tailoring Turba",
  description:
    "Get in touch with Tailoring Turba for any questions or inquiries about our custom t-shirt printing services.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
