import dynamic from "next/dynamic";
import ScrollExpansionDemo from "@/components/scroll-expansion-optimized";

// Lazy load heavy components to improve initial page load
const VideoShowcase = dynamic(() => import("@/components/VideoShowcase/VideoShowcase"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-white animate-pulse">Loading Gallery...</div>
  </div>,
});

const TimelineDemo = dynamic(() => import("@/components/TimeLine/timeline-demo").then(mod => ({ default: mod.TimelineDemo })), {
  loading: () => <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
    <div className="text-white animate-pulse">Loading Timeline...</div>
  </div>,
});

const ContactSection = dynamic(() => import("@/components/ContactSection/ContactSection"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-white animate-pulse">Loading Contact...</div>
  </div>,
});

// Only load performance monitor in development
const PerformanceMonitor = dynamic(() => import("@/components/PerformanceMonitor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
      <ScrollExpansionDemo />
      <VideoShowcase />
      <TimelineDemo />
      <ContactSection />
    </main>
  );
}
