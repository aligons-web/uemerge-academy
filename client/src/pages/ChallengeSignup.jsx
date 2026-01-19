import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

export default function ChallengeSignup() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-challenge-signup">
      <SocialBar />
      <MainNav />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
            data-testid="text-challenge-title"
          >
            3-Day Challenge Signup
          </h1>
          <iframe width="540" height="305" src="https://786bb9df.sibforms.com/serve/MUIFABPJ7sL_tcsdYF40O_tj0Xexk66kg5gYWZJsoOFPPR_zdKpFOqwGjmiyurtwSnBBAVAkHlm2tNzqhyxKjd4_xgFSlH7q1jQcFnhS4WsGdYQAF65oyYOLptFc3moHbBahfemKYO0a-u05ElTtNevEzX3U_BvcjYDmv8G46I6Sgv9VMy_IWFz71awXnPVPj64ivGrc0jgsfBcOlw==" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
