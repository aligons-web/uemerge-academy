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
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              U eMerge Academy presents the LTN Program
            </h3>
            <div className="flex items-start gap-4 mt-4">
              <div className="flex-1">
                <p className="text-muted-foreground mb-6">
                  This is an online learning environment to complete the <strong className="text-foreground">LT Workbook</strong> to launch the new version of you!
                </p>
                <p className="text-muted-foreground mb-4">
                  Become part of a community of like-minded individuals who are pursuing a bright future!
                </p>
                <Button 
                  asChild
                >
                  <a 
                    href="https://www.skool.com/life-transformation-network-2320/classroom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="button-join-community"
                  >
                    Join
                  </a>
                </Button>
              </div>
              <a 
                href="https://www.skool.com/life-transformation-network-2320" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-ltn-logo"
              >
                <img 
                  src={ltnLogo} 
                  alt="Life Transformation Network" 
                  className="w-24 h-auto hover:opacity-90 transition-opacity"
                  data-testid="img-ltn-logo"
                />
              </a>
            </div>
          </div>

          <Card className="p-6 bg-card">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <a 
                href="https://www.amazon.com/LIFE-Transformation-Intentionally-Focused-Everyday/dp/B0FBL8WTQP/ref=sr_1_1?crid=2NSWLWYX1K03&dib=eyJ2IjoiMSJ9.09NkP6lvZy6qSBavigXj_N2cQjPUelsKc9M_09fpcgY.arRoKtV3pe8WphX3HNdszvWrZsPO7Ef_-TXTxX4Pomw&dib_tag=se&keywords=life+transformation+workbook+alexander+ligons&qid=1766613400&sprefix=alexander+ligons+life+tra%2Caps%2C106&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-ltw-cover"
              >
                <img 
                  src={ltwCover} 
                  alt="Life Transformation Workbook" 
                  className="w-40 h-auto rounded-md shadow-lg hover:opacity-90 transition-opacity"
                  data-testid="img-ltw-cover"
                />
              </a>
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                >
                  Now Available!
                </h3>
                <p className="text-muted-foreground mb-4">
                  The LT Workbook can now be{" "}
                  <a 
                    href="https://www.amazon.com/LIFE-Transformation-Intentionally-Focused-Everyday/dp/B0FBL8WTQP/ref=sr_1_1?crid=2NSWLWYX1K03&dib=eyJ2IjoiMSJ9.09NkP6lvZy6qSBavigXj_N2cQjPUelsKc9M_09fpcgY.arRoKtV3pe8WphX3HNdszvWrZsPO7Ef_-TXTxX4Pomw&dib_tag=se&keywords=life+transformation+workbook+alexander+ligons&qid=1766613400&sprefix=alexander+ligons+life+tra%2Caps%2C106&sr=8-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium underline underline-offset-2"
                    data-testid="link-amazon-ltw"
                  >
                    purchased on Amazon
                  </a>.
                </p>
                <p className="text-muted-foreground mb-4">
                  Find out more about the <strong className="text-foreground">LT Workbook</strong> and join the <strong className="text-foreground">Life Transformation Network (LTN)</strong>.
                </p>
                <Button 
                  asChild
                >
                  <a 
                    href="https://www.skool.com/life-transformation-network-2320" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="button-read-more-ltw"
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
