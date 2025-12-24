import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ltwCover from "@assets/ltwCover_1766601258374.jpg";
import uypCover from "@assets/uypbkcvr2025_1766601258374.jpg";
import ltnLogo from "@assets/ltnlogopng_1766601258373.png";

const products = [
  {
    id: "ltw",
    title: "Life Transformation Workbook",
    description: "A comprehensive workbook designed to guide you through your personal transformation journey. Complete exercises and reflections to launch the new version of you!",
    image: ltwCover,
    badge: "Now Available",
    cta: "Purchase on Amazon",
    link: "https://www.amazon.com",
  },
  {
    id: "uyp",
    title: "Understanding Your Path",
    description: "Discover purpose through your journey. This revised edition helps you navigate life's path with clarity and intention, finding meaning in every step.",
    image: uypCover,
    badge: "Revised Edition",
    cta: "Get on Amazon",
    link: "https://www.amazon.com",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-products">
      <SocialBar />
      <MainNav />
      
      <main className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-products-title"
            >
              Our Products
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transformational resources designed to help you discover your purpose and achieve meaningful growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden bg-card" data-testid={`card-product-${product.id}`}>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-40 h-auto rounded-md shadow-lg mx-auto sm:mx-0"
                        data-testid={`img-product-${product.id}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {product.badge}
                        </Badge>
                      </div>
                      <h2 
                        className="text-xl md:text-2xl font-bold text-foreground mb-3"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {product.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <Button asChild>
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                          data-testid={`button-buy-${product.id}`}
                        >
                          {product.cta}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20" data-testid="card-ltn-program">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={ltnLogo} 
                alt="Life Transformation Network" 
                className="w-32 h-auto"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 
                  className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  LTN Program
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join our online learning environment to complete the LT Workbook and connect with a community of like-minded individuals pursuing transformation.
                </p>
                <Button asChild>
                  <a 
                    href="https://www.skool.com/life-transformation-network-2320/classroom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                    data-testid="button-join-ltn-products"
                  >
                    Join the Community
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
