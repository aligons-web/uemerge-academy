import { SocialBar } from "@/components/SocialBar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const jumpLinks = [
  { label: "Vision", id: "vision" },
  { label: "Mission", id: "mission" },
  { label: "Founder", id: "founder" },
];

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
      <SocialBar />
      <MainNav />
      
      <main className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-center"
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-about-title"
            >
              About U eMerge Academy
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {jumpLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="outline"
                  onClick={() => scrollToSection(link.id)}
                  data-testid={`button-jump-${link.id}`}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          <section className="mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Unique Emerge (U eMerge, LLC)</strong>, a Purpose-Driven Learning Academy, is a comprehensive online educational platform designed to equip individuals with knowledge and skills for a purposeful life, combining spiritual growth, practical skills, and personal development. It is a "unique emerge" experience. You will uniquely eMerge (U eMerge).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This academy offers a diverse range of courses to help students navigate their faith, enhance their professional capabilities, and contribute meaningfully to their communities.
            </p>
          </section>

          <Card className="p-8 mb-16 bg-muted/30">
            <h2 className="text-xl font-bold text-foreground mb-4">Educational Approach</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The academy's educational approach is rooted in <strong className="text-foreground">Purpose Driven Learning (PDL)</strong>, which focuses on unlocking each learner's inner strengths by connecting academic studies to real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This method transforms learning from pedantic to powerful, ensuring that lessons are personalized and relevant to students' lives. The goal is to create life-long learners who fuel their future passionately with knowledge, preparing them for both college or career and life success.
            </p>
          </Card>

          <Card className="p-8 mb-16 bg-muted/30">
            <h2 className="text-xl font-bold text-foreground mb-4">Supportive Community</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Purpose-Driven Learning Academy provides a supportive community where students can explore their identities, connect with others empathetically, and clarify their purpose. This environment fosters a sense of belonging and encourages students to engage deeply with their learning and personal development.
            </p>
            <Button className="mt-4" asChild>
              <a 
                href="https://www.skool.com/life-transformation-network-2320/classroom" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="button-join-ltn"
              >
                Join the LTN Community
              </a>
            </Button>
          </Card>

          <p className="text-muted-foreground leading-relaxed mb-16">
            By offering a diverse curriculum that integrates faith, practical skills, and personal growth, the Purpose-Driven Learning Academy prepares individuals to lead purposeful lives, make meaningful contributions to their communities, and effectively navigate both spiritual and professional paths.
          </p>

          <section id="vision" className="scroll-mt-24 mb-16">
            <h2 
              className="text-2xl md:text-3xl font-bold text-primary mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-vision-title"
            >
              Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The vision of The Purpose-Driven Learning Academy is to provide a high-quality comprehensive online educational platform designed to equip individuals with knowledge and skills for a purposeful life, combining spiritual growth, practical skills, and personal development knowledge in an innovative and creative approach through technology.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This academy offers a diverse range of courses to help students navigate their faith, enhance their professional capabilities, and contribute meaningfully to their communities and the world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Purpose-Driven Learning Academy aims to be a transformative online educational platform that empowers individuals to discover and pursue their unique purpose in life. We envision a community of lifelong learners who integrate spiritual growth, practical skills, and personal development to make meaningful contributions to their communities and the world at large.
            </p>
          </section>

          <section id="mission" className="scroll-mt-24 mb-16">
            <h2 
              className="text-2xl md:text-3xl font-bold text-primary mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-mission-title"
            >
              Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our mission is to provide a comprehensive, purpose-driven educational experience that:
            </p>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <span><strong className="text-foreground">Fosters personal growth:</strong> We help students explore their identities, clarify their values, and discover their God-given purpose through a combination of biblical studies, personal development courses, and practical skill-building.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <span><strong className="text-foreground">Integrates thinking, being, and doing that leads to having:</strong> We emphasize the connection between learning, emotional intelligence, and real-world application, creating a holistic educational approach that includes biblical perspectives for a fulfilling life.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <span><strong className="text-foreground">Develops future-ready skills:</strong> We equip students with essential skills in leadership, technology, communication, and business administration to thrive in an ever-changing world.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <span><strong className="text-foreground">Cultivates spiritual foundations:</strong> We provide a strong foundation in biblical knowledge and interpretation, helping students navigate their faith journey and apply spiritual principles to daily life.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">5.</span>
                <span><strong className="text-foreground">Promotes purposeful living:</strong> We guide students to develop a "stable intention that is meaningful to self and consequential for the world," encouraging them to live with intention and make a positive impact.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">6.</span>
                <span><strong className="text-foreground">Enhances well-being:</strong> We strive to create happier, healthier learners who are better equipped to manage stress and contribute to the common good.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">7.</span>
                <span><strong className="text-foreground">Fosters community and belonging:</strong> We create a supportive online environment where students can connect with like-minded individuals, share experiences, and grow together.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">8.</span>
                <span><strong className="text-foreground">Prepares for life success:</strong> We focus on creating life-long learners who can fuel their future passionately with knowledge, preparing them for both career and life success.</span>
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mt-6">
              By fulfilling this mission, the Purpose-Driven Learning Academy seeks to transform education from pointless to powerful, ensuring that lessons are personalized, relevant, and deeply connected to students' lives and the world around them. Our ultimate goal is to empower individuals to lead purposeful lives, make meaningful contributions to their communities, and effectively navigate both spiritual and professional paths.
            </p>
          </section>

          <section id="founder" className="scroll-mt-24">
            <h2 
              className="text-2xl md:text-3xl font-bold text-primary mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
              data-testid="text-founder-title"
            >
              Founder
            </h2>
            <Card className="p-8 bg-muted/30">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Alexander Ligons</strong> is the founder of U eMerge Academy and author of multiple transformational works including the Life Transformation Workbook and Understanding Your Path.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a passion for purpose-driven education and personal development, Alexander has dedicated his work to helping individuals discover their unique path and achieve meaningful transformation in their lives.
              </p>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
