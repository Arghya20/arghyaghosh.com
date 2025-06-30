import VideoShowcase from "@/components/VideoShowcase/VideoShowcase";
import ScrollExpansionDemo from "@/components/scroll-expansion-demo";
import TiltedCard from "@/components/TiltedCard/tiltedCard";
import { TimelineDemo } from "@/components/TimeLine/timeline-demo";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <ScrollExpansionDemo />
      <VideoShowcase />
      <TimelineDemo />
      <ContactSection />

      {/* https://21st.dev/ui-layouts/scroll-card/default */}

      {/* https://21st.dev/ui-layouts/stacking-card/default */}

      {/* https://21st.dev/anurag-mishra22/interactive-bento-gallery/default - bento grid */}

      {/* https://21st.dev/jatin-yadav05/glowing-card/default */}
    </main>
  );
}
