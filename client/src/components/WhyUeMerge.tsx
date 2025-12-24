import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import uypCover from "@assets/uypbkcvr2025_1766601258374.jpg";

export function WhyUeMerge() {
  return (
    <section className="py-16 md:py-20 px-4 bg-background" data-testid="section-why-uemerge">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-4">
            2026 is the year you discover your true direction.
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            data-testid="text-why-uemerge-title"
          >
            Why U eMerge?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            A pertinent question to the question above is
          </p>
          <p className="text-foreground font-medium max-w-2xl mx-auto mb-2">
            why not emerge? <span className="text-muted-foreground">Isn't it</span> time to move towards your LIFE Transformation?
          </p>
          <Button 
            className="mt-6"
            asChild
          >
            <Link href="/about" data-testid="button-read-more-why">
              READ MORE
            </Link>
          </Button>
        </div>

        <Card className="max-w-xl mx-auto p-6 bg-card">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img 
              src={uypCover} 
              alt="Understanding Your Path Book" 
              className="w-32 h-auto rounded-md shadow-lg"
              data-testid="img-uyp-cover"
            />
            <div>
              <h3 
                className="text-2xl md:text-3xl font-bold text-primary mb-1"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Revised Edition
              </h3>
              <p className="text-destructive font-semibold text-lg mb-4">
                Released!
              </p>
              <p className="text-muted-foreground">
                Get your copy on{" "}
                <a 
                  href="https://www.amazon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline underline-offset-2"
                  data-testid="link-amazon-uyp"
                >
                  Amazon
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
