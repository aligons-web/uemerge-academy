import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ltnLogo from "@assets/ltnlogopng_1766601258373.png";
import ltwCover from "@assets/ltwCover_1766601258374.jpg";

export function ProgramShowcase() {
  return (
    <section className="py-16 md:py-20 px-4 bg-muted/30" data-testid="section-program-showcase">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Join our Community
            </h2>
            <p className="text-muted-foreground mb-4">
              Become part of a group of like-minded individuals who are pursuing a bright future!
            </p>
            <Button 
              className="mb-8"
              asChild
            >
              <a 
                href="https://www.skool.com/life-transformation-network-2320/classroom" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="button-join-community"
              >
                JOIN
              </a>
            </Button>

            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                U eMerge Academy presents the LTN Program
              </h3>
              <div className="flex items-start gap-4 mt-4">
                <div className="flex-1">
                  <p className="text-muted-foreground">
                    This is an online learning environment to complete the <strong className="text-foreground">LT Workbook</strong> to launch the new version of you!
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    data-testid="button-read-more-ltn"
                  >
                    READ MORE
                  </Button>
                </div>
                <img 
                  src={ltnLogo} 
                  alt="Life Transformation Network" 
                  className="w-24 h-auto"
                  data-testid="img-ltn-logo"
                />
              </div>
            </div>
          </div>

          <Card className="p-6 bg-card">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={ltwCover} 
                alt="Life Transformation Workbook" 
                className="w-40 h-auto rounded-md shadow-lg"
                data-testid="img-ltw-cover"
              />
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Now Available!
                </h3>
                <p className="text-muted-foreground mb-4">
                  The LT Workbook can now be purchased on Amazon.
                </p>
                <p className="text-muted-foreground mb-4">
                  Find out more about the <strong className="text-foreground">LT Workbook</strong> and join the <strong className="text-foreground">Life Transformation Network (LTN)</strong>.
                </p>
                <Button 
                  variant="outline"
                  asChild
                >
                  <a 
                    href="https://www.amazon.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="button-amazon-ltw"
                  >
                    READ MORE
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
