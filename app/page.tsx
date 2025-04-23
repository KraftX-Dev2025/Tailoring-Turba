import HeroSection from "@/components/hero-section"
import TShirtCategories from "@/components/tshirt-categories"
import FeaturedProducts from "@/components/featured-products"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TShirtCategories />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  )
}
