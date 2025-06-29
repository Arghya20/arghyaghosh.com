"use client";

import { useState } from "react";
import ShowcaseCard from "@/components/ShowcaseCard/ShowcaseCard";
import VideoModal from "@/components/VideoModal/VideoModal";
import { videos, Video } from "@/data/videos";

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
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

      {/* Bento Grid Layout - Optimized proportions */}
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

        {/* Video 4 - Bottom left square (smaller) */}
        <ShowcaseCard
          video={videos[3]}
          onClick={() => handleVideoClick(videos[3])}
          className="col-span-5 md:col-span-3 row-span-4 md:row-span-2 rounded-2xl"
        />

        <ShowcaseCard
          video={videos[3]}
          onClick={() => handleVideoClick(videos[3])}
          className="col-span-5 md:col-span-3 row-span-4 md:row-span-2 rounded-2xl"
        />

        {/* Video 5 - Bottom right rectangle (larger) */}
        <ShowcaseCard
          video={videos[4]}
          onClick={() => handleVideoClick(videos[4])}
          className="col-span-5 md:col-span-4 row-span-4 md:row-span-2 rounded-2xl"
        />
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={selectedVideo}
      />
    </section>
  );
}
