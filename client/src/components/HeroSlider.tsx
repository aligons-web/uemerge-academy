import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ladywritingVideo from "@assets/ladywriting_1766601258373.mp4";
import buildingfoundationVideo from "@assets/buildingfoundation_1766601258372.mp4";
import scenicforestVideo from "@assets/scenicforest_1766601258374.mp4";

const slides = [
  {
    id: 1,
    text: "Enlightened and empowered with focus",
    video: ladywritingVideo,
  },
  {
    id: 2,
    text: "Build upon a solid foundation for your future",
    video: buildingfoundationVideo,
  },
  {
    id: 3,
    text: "Start your journey now",
    video: scenicforestVideo,
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative h-[90vh] min-h-[500px] overflow-hidden" data-testid="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={slide.video} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg px-8 py-6 shadow-xl">
                <h1 
                  className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight"
                  style={{ fontFamily: "Arial Black, Arial, sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                  data-testid={`text-slide-${index + 1}`}
                >
                  {slide.text}
                </h1>
              </div>
              <Button 
                className="mt-6"
                size="lg"
                asChild
              >
                <Link href="/about" data-testid="button-read-more-hero">
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary/30 hover:bg-primary/50 text-white transition-colors"
        aria-label="Previous slide"
        data-testid="button-slider-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary/30 hover:bg-primary/50 text-white transition-colors"
        aria-label="Next slide"
        data-testid="button-slider-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-slider-dot-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
