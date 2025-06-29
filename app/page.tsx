import VideoShowcase from '@/components/VideoShowcase/VideoShowcase';
import ScrollExpansionDemo from '@/components/scroll-expansion-demo';
import TiltedCard from '@/components/TiltedCard/tiltedCard';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <ScrollExpansionDemo />
      <VideoShowcase />
      <TiltedCard />

      {/* https://21st.dev/ui-layouts/scroll-card/default */}

      {/* https://21st.dev/ui-layouts/stacking-card/default */}

      {/* https://21st.dev/anurag-mishra22/interactive-bento-gallery/default - bento grid */}
    </main>
  );
}