import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Features from "@/components/sections/features";
import AboutSection from "@/components/sections/about";
import OrderTrackingSection from "@/components/sections/order-tracking";
import ServicesSection from "@/components/sections/services";
import ClientsSection from "@/components/sections/clients";
import ProcessSection from "@/components/sections/process";
import VideoCTA from "@/components/sections/video-cta";
import TestimonialsStats from "@/components/sections/testimonials-stats";
import Portfolio from "@/components/sections/portfolio";
import CTABanner from "@/components/sections/cta-banner";
import WhyChooseUs from "@/components/sections/why-choose-us";
import NewsSection from "@/components/sections/news";
import ShippingForm from "@/components/sections/shipping-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <AboutSection />
      <OrderTrackingSection />
      <ServicesSection />
      <ClientsSection />
      <ProcessSection />
      <VideoCTA />
      <TestimonialsStats />
      <Portfolio />
      <CTABanner />
      <WhyChooseUs />
      <NewsSection />
      <ShippingForm />
      <Footer />
    </>
  );
}
