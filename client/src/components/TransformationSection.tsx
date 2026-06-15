import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const tags = [
  { label: "Feeling stuck", number: "01" },
  { label: "Desiring more", number: "02" },
  { label: "Seeking direction", number: "03" },
];

export function TransformationSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background" data-testid="section-transformation">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
              data-testid="text-transformation-headline"
            >
              You did everything right—yet something still feels missing.
            </h2>
            <h2 
              className="text-lg md:text-xl text-black dark:text-black leading-relaxed mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
            >
              If you're stuck between who you are and who you know you're meant to become, this is your time to take action!
            </h2>
            <h2 
              className="text-lg md:text-xl text-foreground mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
            >
              Let go of doubt. Step forward with intention.
            </h2>
            <Button asChild size="lg" data-testid="button-challenge-signup">
              <a href="https://www.skool.com/life-transformation-network-2320" target="_blank" rel="noopener noreferrer">Join the Community</a>
            </Button>
          </div>
          
          <div className="flex flex-col gap-3">
            {tags.map((tag) => (
              <div
                key={tag.label}
                className="flex items-center gap-3 bg-primary rounded-md p-4 hover-elevate"
                data-testid={`tag-${tag.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-sm text-white font-medium">{tag.number}.</span>
                <span className="font-semibold text-white">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
