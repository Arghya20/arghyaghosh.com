"use client";

import { useEffect } from "react";
import { Video } from "@/data/videos";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

export default function VideoModal({
  isOpen,
  onClose,
  video,
}: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle YouTube videos by opening in new tab
  useEffect(() => {
    if (isOpen && video && video.type === "youtube" && video.youtubeId) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
      window.open(youtubeUrl, "_blank", "noopener,noreferrer");
      onClose(); // Close the modal since we're opening YouTube in a new tab
    }
  }, [isOpen, video, onClose]);

  if (!isOpen || !video) return null;

  // Only render modal for non-YouTube videos (Wistia)
  if (video.type === "youtube") {
    return null; // YouTube videos are handled by opening in new tab
  }

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm group"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video player for Wistia videos */}
          <div className="aspect-video">
            {/* @ts-ignore */}
            <wistia-player
              media-id={video.videoId}
              wistia-popover="false"
              aspect="1.7777777777777777"
              className="w-full h-full rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
