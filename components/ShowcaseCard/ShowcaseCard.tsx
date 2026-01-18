"use client";

import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Video } from "@/data/videos";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ShowcaseCardProps {
  video: Video;
  onClick: () => void;
  className?: string;
}

export default function ShowcaseCard({
  video,
  onClick,
  className,
}: ShowcaseCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackSvg = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#1F2937"/>
      <circle cx="200" cy="150" r="40" fill="#6366F1"/>
      <svg x="180" y="130" width="40" height="40" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z"/>
      </svg>
      <text x="200" y="220" text-anchor="middle" fill="#9CA3AF" font-family="Arial" font-size="14">Video ${video.id}</text>
    </svg>
  `)}`;

  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.01] hover:z-10 bg-gray-900/50 border-gray-800 overflow-hidden backdrop-blur-sm hover:bg-gray-900/70 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10",
        className
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Loading placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center z-10">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}

        <img
          src={imageError ? fallbackSvg : video.thumbnail}
          alt={`Video ${video.id} thumbnail`}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            if (!imageError) {
              setImageError(true);
              setImageLoaded(true); // Show fallback immediately
            }
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-white" fill="currentColor" />
          </div>
        </div>

        {/* Subtle border glow on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-300" />
      </div>
    </Card>
  );
}
