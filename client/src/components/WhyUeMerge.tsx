import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import uypCover from "@assets/uypbkcvr2025_1766601258374.jpg";

export function WhyUeMerge() {
  return (
    <section className="py-16 md:py-20 px-4 bg-background" data-testid="section-why-uemerge">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            data-testid="text-why-uemerge-title"
          >
            Why U eMerge?
          </h2>
          <p className="text-foreground font-medium max-w-2xl mx-auto mb-2">
            Isn't it time to move towards your LIFE Transformation?
          </p>
          <p className="text-lg font-bold text-foreground max-w-2xl mx-auto mb-4">
            2026 is the year you discover your true direction.
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
            <a 
              href="https://www.amazon.com/Understanding-Your-Path-Discovering-purpose/dp/B0F6DG44HV/ref=sr_1_1?crid=3O9ENLJPG3VM7&dib=eyJ2IjoiMSJ9.wVRIga8-ojyZuY7OWdGifA.pTNl8r2IEPZNLy2Id9n1xXSE0-bL2wymaOEu8o0_8Hw&dib_tag=se&keywords=alexander+ligons+understanding+your+path&qid=1766613285&sprefix=understanding+your+path+%2Caps%2C115&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-uyp-cover"
            >
              <img 
                src={uypCover} 
                alt="Understanding Your Path Book" 
                className="w-32 h-auto rounded-md shadow-lg hover:opacity-90 transition-opacity"
                data-testid="img-uyp-cover"
              />
            </a>
            <div>
              <h3 
                className="text-2xl md:text-3xl font-bold text-primary mb-4"
              >
                Revised Edition
              </h3>
              <p className="text-muted-foreground">
                Get your copy on{" "}
                <a 
                  href="https://www.amazon.com/Understanding-Your-Path-Discovering-purpose/dp/B0F6DG44HV/ref=sr_1_1?crid=3O9ENLJPG3VM7&dib=eyJ2IjoiMSJ9.wVRIga8-ojyZuY7OWdGifA.pTNl8r2IEPZNLy2Id9n1xXSE0-bL2wymaOEu8o0_8Hw&dib_tag=se&keywords=alexander+ligons+understanding+your+path&qid=1766613285&sprefix=understanding+your+path+%2Caps%2C115&sr=8-1"
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
