import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedPizzas } from "@/components/featured-pizzas"
import { ContactSection } from "@/components/contact-section"
import { LocationsSection } from "@/components/locations-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedPizzas />
        <ContactSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  )
}
