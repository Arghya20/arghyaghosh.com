'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';
import { Video } from '@/data/videos';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  if (!video) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-black shadow-2xl transition-all">
                {/* Close Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={onClose}
                    className="rounded-full bg-black/50 p-3 text-white/80 hover:bg-black/70 hover:text-white transition-all duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video bg-black">
                  <video
                    className="w-full h-full rounded-2xl"
                    controls
                    autoPlay
                    poster={video.thumbnail}
                    preload="metadata"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}