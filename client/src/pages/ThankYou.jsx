import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

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
            data-testid="text-thankyou-title"
          >
            Thank You
          </h1>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
