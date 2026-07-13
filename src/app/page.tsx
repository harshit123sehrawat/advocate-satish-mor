import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";

// Dynamically import below-the-fold components to reduce unused JavaScript
const About = dynamic(() => import("@/components/About"));
const PracticeAreas = dynamic(() => import("@/components/PracticeAreas"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const Statistics = dynamic(() => import("@/components/Statistics"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Disclaimer = dynamic(() => import("@/components/Disclaimer"));

const WhatsAppButton = dynamic(() => import("@/components/FloatingElements").then((mod) => mod.WhatsAppButton));
const BackToTopButton = dynamic(() => import("@/components/FloatingElements").then((mod) => mod.BackToTopButton));
const MobileConsultationBar = dynamic(() => import("@/components/FloatingElements").then((mod) => mod.MobileConsultationBar));

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <BackToTopButton />
      <MobileConsultationBar />
      <Disclaimer />
    </main>
  );
}
