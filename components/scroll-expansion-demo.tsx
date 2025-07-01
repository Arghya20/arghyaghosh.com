"use client";

import { useState, useEffect } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { BeamsBackground } from "@/components/ui/beams-background";
import TiltedCard from "./TiltedCard/tiltedCard";
const HeroSection = "/videos/hero-section.webm";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: HeroSection,
    poster:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    background: "", // Using BeamsBackground instead
    title: "From Raw to Remarkable",
    date: "Scroll to",
    scrollToExpand: "Expand Experience",
    about: {
      overview:
        "Transform your raw footage into cinematic masterpieces with our professional video editing services. This interactive scroll experience showcases how we bring your vision to life through cutting-edge technology and creative expertise.",
      conclusion:
        "Our video editing services combine technical excellence with artistic vision to create content that captivates and engages your audience. Experience the power of professional video editing.",
    },
  },
  image: {
    src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    background: "", // Using BeamsBackground instead
    title: "CREATIVE VISION REALIZED",
    date: "Visual Storytelling",
    scrollToExpand: "Scroll to Expand Experience",
    about: {
      overview:
        "Every frame tells a story. Our professional editing services transform static images and raw footage into compelling visual narratives that resonate with your audience and elevate your brand.",
      conclusion:
        "Through meticulous attention to detail and creative expertise, we help you communicate your message with maximum impact and visual appeal.",
    },
  },
};

// Custom ScrollExpandMedia component that uses BeamsBackground
const ScrollExpandMediaWithBeams = ({
  mediaType,
  mediaSrc,
  posterSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: {
  mediaType: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  title: string;
  date: string;
  scrollToExpand: string;
  textBlend?: boolean;
  children: React.ReactNode;
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const splitIndex = title.indexOf(" to ");
  const firstWord = splitIndex !== -1 ? title.slice(0, splitIndex) : title;
  const restOfTitle = splitIndex !== -1 ? title.slice(splitIndex + 1) : "";

  return (
    <BeamsBackground
      intensity="medium"
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
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
                      preload="auto"
                      className="w-full h-full object-cover rounded-xl"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    <div
                      className="absolute inset-0 z-10"
                      style={{ pointerEvents: "none" }}
                    ></div>

                    <div
                      className="absolute inset-0 bg-black/30 rounded-xl"
                      style={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      style={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && (
                    <p
                      className=" text-yellow-400/60"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-yellow-400/60 font-medium text-center"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? "mix-blend-difference" : "mix-blend-normal"
                }`}
              >
                {/* "text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-none" */}
                <h2
                  className="whitespace-pre-wrap bg-gradient-to-b from-blue-200 to-white bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </h2>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-yellow-400 transition-none"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </h2>
              </div>
            </div>

            <section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
              style={{
                opacity: showContent ? 1 : 0,
                transition: "opacity 0.7s",
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
  const [mediaType, setMediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <ScrollExpandMediaWithBeams
        mediaType={mediaType as "video" | "image"}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        {/* Add any valid children content here */}
        <div className="text-center text-white">
          <p>Additional content goes here.</p>
        </div>
      </ScrollExpandMediaWithBeams>
    </div>
  );
};

export default ScrollExpansionDemo;
