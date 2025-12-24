import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, BookOpen, Users, Compass, GraduationCap } from "lucide-react";

const resources = [
  {
    id: "ltn-community",
    title: "Life Transformation Network",
    description: "Join our online community of like-minded individuals pursuing personal growth and transformation.",
    icon: Users,
    link: "https://www.skool.com/life-transformation-network-2320/classroom",
    cta: "Join Community",
  },
  {
    id: "t-builder",
    title: "Transformation Builder",
    description: "Access tools and frameworks to build your personal transformation journey step by step.",
    icon: Compass,
    link: "https://transformationbuilder.com",
    cta: "Explore T Builder",
  },
  {
    id: "ltw-amazon",
    title: "Life Transformation Workbook",
    description: "Get your copy of the LT Workbook on Amazon and start your transformation journey today.",
    icon: BookOpen,
    link: "https://www.amazon.com",
    cta: "Buy on Amazon",
  },
  {
    id: "academy",
    title: "Purpose-Driven Learning",
    description: "Learn about our educational approach and how Purpose Driven Learning can unlock your potential.",
    icon: GraduationCap,
    link: "/about",
    cta: "Learn More",
    internal: true,
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-resources">
      <SocialBar />
      <MainNav />
      
      <main className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-resources-title"
            >
              Resources
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our collection of tools, communities, and materials to support your transformation journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Card 
                key={resource.id} 
                className="p-6 bg-card hover-elevate flex flex-col"
                data-testid={`card-resource-${resource.id}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  {resource.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {resource.description}
                </p>
                {resource.internal ? (
                  <Button variant="outline" asChild className="w-full">
                    <a href={resource.link} data-testid={`button-resource-${resource.id}`}>
                      {resource.cta}
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" asChild className="w-full">
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                      data-testid={`button-resource-${resource.id}`}
                    >
                      {resource.cta}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </Card>
            ))}
          </div>

          <Card className="mt-16 p-8 bg-primary text-primary-foreground">
            <div className="text-center max-w-2xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Take the first step towards discovering your true purpose and unlocking your potential.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                asChild
              >
                <a 
                  href="https://www.skool.com/life-transformation-network-2320/classroom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  data-testid="button-cta-resources"
                >
                  Join the LTN Community
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
