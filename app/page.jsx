import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import HelpSeekerSection from "./sections/HelpSeekerSection";
import VIPPackageSection from "./sections/VIPPackageSection";

export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
      <HelpSeekerSection />
      <VIPPackageSection />
      </main>
    </div>
  );
}
