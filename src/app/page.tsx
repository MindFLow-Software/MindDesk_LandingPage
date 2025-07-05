import HeroSection from "@/src/components/landing-page/hero";
import BenefitsSection from "../components/landing-page/benefits-section";
import FeaturesSection from "../components/landing-page/features-section";
import ImageGallerySection from "../components/landing-page/image-gallery-section";
import TestimonialsSection from "../components/landing-page/testimonials-section";
import FAQSection from "../components/landing-page/faq-section";
import Footer from "../components/landing-page/footer";
import Header from "../components/landing-page/header";
import PricingSection from "../components/landing-page/pricing-section";


export default function HelpdeskLanding() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <FeaturesSection />
      <ImageGallerySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />

    </div>
  )
}
