"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { BeamsBackground } from "@/components/ui/beams-background-optimized";
import TiltedCard from "./TiltedCard/tiltedCard";

const HeroSection = "/videos/hero-section.webm";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: HeroSection,
    poster: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    background: "",
    title: "From Raw to Remarkable",
    date: "Scroll to",
    scrollToExpand: "Expand Experience",
    about: {
      overview: "Transform your raw footage into cinematic masterpieces with our professional video editing services.",
      conclusion: "Our video editing services combine technical excellence with artistic vision to create content that captivates and engages your audience.",
    },
  },
};

const ScrollExpandMediaOptimized = ({
  mediaType,
  mediaSrc,
  posterSrc,
  title,
  date,
  scrollToExpand,
  children,
}: {
  mediaType: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  title: string;
  date: string;
  scrollToExpand: string;
  children: React.ReactNode;
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  
  const touchStartY = useRef<number>(0);
  const lastScrollTime = useRef<number>(0);
  const scrollAccumulator = useRef<number>(0);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Reset states when media type changes
  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    scrollAccumulator.current = 0;
  }, [mediaType]);

  // Throttled scroll handler
  const handleScroll = useCallback((deltaY: number) => {
    if (typeof window === 'undefined') return;
    
    const now = Date.now();
    if (now - lastScrollTime.current < 16) return; // ~60fps throttle
    
    lastScrollTime.current = now;
    
    if (mediaFullyExpanded && deltaY < 0 && window.scrollY <= 5) {
      setMediaFullyExpanded(false);
      return;
    }
    
    if (!mediaFullyExpanded) {
      const scrollDelta = deltaY * (reducedMotion ? 0.002 : 0.0009);
      const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
      
      setScrollProgress(newProgress);
      
      if (newProgress >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (newProgress < 0.75) {
        setShowContent(false);
      }
    }
  }, [scrollProgress, mediaFullyExpanded, reducedMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (reducedMotion) {
      // Skip complex scroll interactions for reduced motion
      setMediaFullyExpanded(true);
      setShowContent(true);
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      if (!mediaFullyExpanded) {
        e.preventDefault();
      }
      handleScroll(e.deltaY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY.current) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      if (!mediaFullyExpanded) {
        e.preventDefault();
      }
      
      handleScroll(deltaY * 2); // Amplify touch movement
      touchStartY.current = touchY;
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    const handlePageScroll = () => {
      if (!mediaFullyExpanded && typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    // Use passive listeners where possible
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handlePageScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll, mediaFullyExpanded, reducedMotion]);

  // Optimized mobile detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkIfMobile, 250);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Optimized calculations
  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const splitIndex = title.indexOf(" to ");
  const firstWord = splitIndex !== -1 ? title.slice(0, splitIndex) : title;
  const restOfTitle = splitIndex !== -1 ? title.slice(splitIndex + 1) : "";

  return (
    <BeamsBackground intensity="medium" className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl will-change-transform"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata" // Changed from "auto" to reduce initial load
                      className="w-full h-full object-cover rounded-xl"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                      style={{ willChange: 'transform' }}
                    />
                    <div
                      className="absolute inset-0 bg-black/30 rounded-xl transition-opacity duration-300"
                      style={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={mediaSrc}
                      alt="Media content"
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0 bg-black/50 rounded-xl transition-opacity duration-300"
                      style={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4">
                  {date && (
                    <p
                      className="text-yellow-400/60 transition-transform duration-300"
                      style={{ 
                        transform: `translateX(-${textTranslateX}vw)`,
                        willChange: 'transform'
                      }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-yellow-400/60 font-medium text-center transition-transform duration-300"
                      style={{ 
                        transform: `translateX(${textTranslateX}vw)`,
                        willChange: 'transform'
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col">
                <h2
                  className="whitespace-pre-wrap bg-gradient-to-b from-blue-200 to-white bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 transition-transform duration-300"
                  style={{ 
                    transform: `translateX(-${textTranslateX}vw)`,
                    willChange: 'transform'
                  }}
                >
                  {firstWord}
                </h2>
                <h2
                  className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-yellow-400 transition-transform duration-300"
                  style={{ 
                    transform: `translateX(${textTranslateX}vw)`,
                    willChange: 'transform'
                  }}
                >
                  {restOfTitle}
                </h2>
              </div>
            </div>

            <section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 transition-opacity duration-700"
              style={{
                opacity: showContent ? 1 : 0,
              }}
            >
              <TiltedCard />
            </section>
          </div>
        </div>
      </section>
    </BeamsBackground>
  );
};

const ScrollExpansionDemo = () => {
  const [mediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <ScrollExpandMediaOptimized
        mediaType={mediaType as "video" | "image"}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <div className="text-center text-white">
          <p>Additional content goes here.</p>
        </div>
      </ScrollExpandMediaOptimized>
    </div>
  );
};

export default ScrollExpansionDemo;