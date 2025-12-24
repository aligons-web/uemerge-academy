import { Badge } from "@/components/ui/badge";

const tags = [
  { label: "Feeling stuck", number: "02" },
  { label: "Desiring more", number: "01" },
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
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-transformation-headline"
            >
              You did everything right—yet something still feels missing.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you're stuck between who you are and who you know you're meant to become, this is your sign.
            </p>
            <p className="text-foreground font-medium text-lg">
              Let go of doubt. Step forward with intention.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {tags.map((tag) => (
              <div
                key={tag.label}
                className="flex items-center gap-3 bg-primary/10 rounded-md p-4 hover-elevate"
                data-testid={`tag-${tag.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-sm text-muted-foreground font-medium">{tag.number}.</span>
                <span className="font-semibold text-foreground">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
