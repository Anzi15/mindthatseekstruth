import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import HelpSeekerSection from "./sections/HelpSeekerSection";
import MindsetBookSection from "./sections/Mindset-book";
import LetsTalkSection from "./sections/LetsTalkSection";
import BookSection from "./sections/BookSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <HelpSeekerSection />
        <MindsetBookSection />
        <LetsTalkSection/>
        <BookSection/>
      </main>
    </div>
  );
}
