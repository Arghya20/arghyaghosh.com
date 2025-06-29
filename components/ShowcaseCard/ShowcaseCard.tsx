'use client';

import Image from 'next/image';
import { Video } from '@/data/videos';
import { PlayCircle } from 'lucide-react';

interface ShowcaseCardProps {
  video: Video;
  onClick: () => void;
  className?: string;
}

export default function ShowcaseCard({ video, onClick, className = '' }: ShowcaseCardProps) {
  // Safety check to prevent accessing properties of undefined video
  if (!video) {
    return null;
  }

  return (
    <div
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] ${className}`}
      onClick={onClick}
    >
      {/* Video Thumbnail */}
      <div className="relative w-full h-full">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Play Button Overlay - Only visible on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
}