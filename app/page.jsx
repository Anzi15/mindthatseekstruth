import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import HelpSeekerSection from "./sections/HelpSeekerSection";
import MindsetBookSection from "./sections/Mindset-book";
import LetsTalkSection from "./sections/LetsTalkSection";
import BookSection from "./sections/BookSection";
import AskQuestionIntro from "./sections/AskQuestionIntro";
import OurNumbersSection from "./sections/OurNumbersSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import DoubtsSection from "./sections/DoubtsSection";
import YoutubeLatestVideosSections from "./components/YoutubeContent";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <HelpSeekerSection />
        <MindsetBookSection />
        <YoutubeLatestVideosSections channelId={"UUbVS0QWs2qSP02xkOjtqVCQ"}/>
        <LetsTalkSection/>
        <BookSection/>
        <AskQuestionIntro/>
        <TestimonialsSection/>
        <DoubtsSection/>
      </main>
    </div>
  );
}
