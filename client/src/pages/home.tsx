import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { HeroSlider } from "@/components/HeroSlider";
import { TransformationSection } from "@/components/TransformationSection";
import { ProgramShowcase } from "@/components/ProgramShowcase";
import { WhyUeMerge } from "@/components/WhyUeMerge";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <SocialBar />
      <MainNav />
      <main>
        <HeroSlider />
        <TransformationSection />
        <ProgramShowcase />
        <WhyUeMerge />
      </main>
      <Footer />
    </div>
  );
}
