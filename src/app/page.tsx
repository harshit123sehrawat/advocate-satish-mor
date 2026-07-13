import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import {
  WhatsAppButton,
  BackToTopButton,
  MobileConsultationBar,
  LoadingScreen,
} from "@/components/FloatingElements";

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
