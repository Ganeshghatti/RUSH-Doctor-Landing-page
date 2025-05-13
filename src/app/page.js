import HeroSection from "@/section/HeroSection";
import FeaturesSection from "@/section/FeaturesSection";
import HealthRecordsSection from "@/section/HealthRecordsSection";
import USPSection from "@/section/USPSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <USPSection />
      <FeaturesSection />
      <HealthRecordsSection />
    </main>
  );
}