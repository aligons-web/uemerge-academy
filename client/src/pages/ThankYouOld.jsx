import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-thank-you">
      <SocialBar />
      <MainNav />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
            data-testid="text-challenge-title"
          >
            Thank you for signing up for the 3-Day Challenge
          </h1>

          <h2 
            className="text-2xl md:text-3xl font-bold text-center mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Join the Community!
          </h2>

          <h3 
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            LIFE Transformation Network (LTN) Community on Skool
          </h3>

          <p className="text-foreground/80 mb-6 leading-relaxed">
            The LIFE Transformation Network (LTN) is a purpose-driven community for people who are ready to grow, reset, and move forward with intention. Inside, you'll connect with others on the same journey, get encouragement, accountability, and practical guidance to help you stay consistent, build momentum, and transform your life one step at a time.
          </p>

          <div className="mb-12">
            <Button asChild size="lg" data-testid="button-join-ltn">
              <a 
                href="https://www.skool.com/life-transformation-network-2320" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join the LTN Community
              </a>
            </Button>
          </div>

          <h2 
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            LIFE Transformation Web App — Founders Program (Coming Soon)
          </h2>

          <p className="text-foreground/80 leading-relaxed">
            The LIFE Transformation Web App Founders Program is a limited early-access opportunity for those who want to be first in line when the platform launches. Founders will receive exclusive benefits, early feature access, and special founder-level perks as the app rolls out—helping you turn your purpose into a clear plan with structured steps, tools, and progress tracking. Coming soon!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
