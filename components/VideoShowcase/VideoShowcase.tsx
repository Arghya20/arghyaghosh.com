"use client";

import { useState, useEffect, useCallback } from "react";
import ShowcaseCard from "@/components/ShowcaseCard/ShowcaseCard";
import VideoModal from "@/components/VideoModal/VideoModal";
import { videos, Video } from "@/data/videos";

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Only load Wistia scripts when a video is actually clicked
  const loadWistiaScripts = useCallback(async () => {
    if (scriptsLoaded) return;

    try {
      // Load scripts only when needed
      const script1 = document.createElement("script");
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;
      
      const script2 = document.createElement("script");
      script2.src = "https://fast.wistia.com/embed/g6se1x2eam.js";
      script2.async = true;
      script2.type = "module";

      // Wait for scripts to load
      await Promise.all([
        new Promise((resolve) => {
          script1.onload = resolve;
          document.head.appendChild(script1);
        }),
        new Promise((resolve) => {
          script2.onload = resolve;
          document.head.appendChild(script2);
        })
      ]);

      const style = document.createElement("style");
      style.textContent = `
        wistia-player[media-id='g6se1x2eam']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/g6se1x2eam/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 56.25%; 
        }
      `;
      document.head.appendChild(style);

      setScriptsLoaded(true);
    } catch (error) {
      console.error('Failed to load Wistia scripts:', error);
    }
  }, [scriptsLoaded]);

  const handleVideoClick = useCallback(async (video: Video) => {
    // For YouTube videos, open directly
    if (video.type === "youtube" && video.youtubeId && typeof window !== 'undefined') {
      const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
      window.open(youtubeUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // For Wistia videos, load scripts first if needed
    if (!scriptsLoaded) {
      await loadWistiaScripts();
    }

    setSelectedVideo(video);
    setIsModalOpen(true);
  }, [loadWistiaScripts, scriptsLoaded]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="w-full max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center py-12 px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Project
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Gallery.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-10 grid-rows-8 gap-4 h-[80vh] min-h-[600px]">
          {/* Video 1 - Top left rectangle */}
          <ShowcaseCard
            video={videos[0]}
            onClick={() => handleVideoClick(videos[0])}
            className="col-span-10 md:col-span-4 row-span-4 md:row-span-3 rounded-2xl"
          />

          {/* Video 2 - Tall right rectangle */}
          <ShowcaseCard
            video={videos[1]}
            onClick={() => handleVideoClick(videos[1])}
            className="col-span-10 md:col-span-6 row-span-4 md:row-span-6 rounded-2xl"
          />

          {/* Video 3 - Middle left rectangle */}
          <ShowcaseCard
            video={videos[2]}
            onClick={() => handleVideoClick(videos[2])}
            className="col-span-10 md:col-span-4 row-span-4 md:row-span-3 rounded-2xl"
          />

          {/* Video 4 - Bottom left square */}
          <ShowcaseCard
            video={videos[3]}
            onClick={() => handleVideoClick(videos[3])}
            className="col-span-5 md:col-span-3 row-span-4 md:row-span-2 rounded-2xl"
          />

          {/* Video 5 - Bottom center square */}
          <ShowcaseCard
            video={videos[4]}
            onClick={() => handleVideoClick(videos[4])}
            className="col-span-5 md:col-span-3 row-span-4 md:row-span-2 rounded-2xl"
          />

          {/* Video 6 - Bottom right rectangle */}
          <ShowcaseCard
            video={videos[5]}
            onClick={() => handleVideoClick(videos[5])}
            className="col-span-10 md:col-span-4 row-span-4 md:row-span-2 rounded-2xl"
          />
        </div>

        {/* Video Modal - Only render for non-YouTube videos */}
        {selectedVideo && selectedVideo.type !== "youtube" && (
          <VideoModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            video={selectedVideo}
          />
        )}
      </section>
    </div>
  );
}
