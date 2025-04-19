import ContactSection from "@/components/home/contactSection";
import CropDetailsSection from "@/components/home/cropDetailsSection";
import FarmingGuidesSection from "@/components/home/farmingGuidesSection";
import FeaturesSection from "@/components/home/featuresSection";
import HeroSection from "@/components/home/heroSection";
import PestControlSection from "@/components/home/pestControlSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <FarmingGuidesSection />
      <CropDetailsSection />
      <PestControlSection />
      <ContactSection />
    </main>
  );
}
