import ContactSection from "@/components/home/contactSection";
import CropDetailsSection from "@/components/home/cropDetailsSection";
import FarmingGuidesSection from "@/components/home/farmingGuidesSection";
import FeaturesSection from "@/components/home/featuresSection";
import HeroSection from "@/components/home/heroSection";
import PestControlSection from "@/components/home/pestControlSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgroHub - Agriculture Information Hub",
  description:
    "AgroHub is an Agriculure Information Hub where farmers can gather information about the agriculture.",
  keywords: "agriculture, information, farmer",
  robots: "index, follow",
};

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
