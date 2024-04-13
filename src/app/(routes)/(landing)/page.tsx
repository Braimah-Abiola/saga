import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import NewSection from "@/components/sections/news";
import ServiceSection from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <NewSection />
      <ContactSection />
    </main>
  );
}
