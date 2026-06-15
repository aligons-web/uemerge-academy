import { Button } from "@/components/ui/button";
import gradientImg from "@assets/gradient_1781558709404.png";
import stuckImg from "@assets/stuck_1781564302009.png";
import clarityImg from "@assets/clarity_1781560530056.png";
import blueprintImg from "@assets/blueprint_1781560530056.png";

export function TransformationSection() {
  return (
    <section
      className="px-4 py-16 md:py-24"
      style={{ backgroundImage: `url(${gradientImg})`, backgroundRepeat: "repeat-x", backgroundSize: "auto", backgroundColor: "#efefef" }}
      data-testid="section-transformation"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
          style={{ fontFamily: "'GFS Didot', 'Didot', 'Bodoni MT', 'Playfair Display', serif" }}
          data-testid="text-transformation-headline"
        >
          You did everything right—yet something still feels missing.
        </h2>
        <h2
          className="text-lg md:text-xl text-black dark:text-black leading-relaxed mb-6"
          style={{ fontFamily: "'Nunito Sans', 'Avenir Next', 'Proxima Nova', sans-serif", fontWeight: 600 }}
        >
          If you're stuck between who you are and who you know you're meant to become, this is your time to take action!
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <img src={stuckImg} alt="01. Feeling Stuck" className="w-full h-auto rounded-md" data-testid="tag-feeling-stuck" />
          <img src={clarityImg} alt="02. Seeking Clarity" className="w-full h-auto rounded-md" data-testid="tag-seeking-clarity" />
          <img src={blueprintImg} alt="03. Building Transformation" className="w-full h-auto rounded-md" data-testid="tag-building-transformation" />
        </div>

        <h2
          className="text-lg md:text-xl text-foreground mb-6"
          style={{ fontFamily: "'Nunito Sans', 'Avenir Next', 'Proxima Nova', sans-serif", fontWeight: 600 }}
        >
          Let go of doubt. Step forward with intention.
        </h2>
        <Button asChild size="lg" data-testid="button-challenge-signup">
          <a href="https://www.skool.com/life-transformation-network-2320" target="_blank" rel="noopener noreferrer">Join the Community</a>
        </Button>
      </div>
    </section>
  );
}
