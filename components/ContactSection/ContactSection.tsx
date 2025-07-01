"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hello@arghyaghosh.com";
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background blur glow effects - static and responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-pink-600/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl relative z-10">
        {/* Frosted glass container */}
        <div className="relative">
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl"></div>

          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl sm:rounded-3xl"></div>

          {/* Content container */}
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-gray-50/50 to-gray-300 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                Have a project in mind
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-b from-gray-50/50 to-gray-300 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                or just want to say hello?
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-gray-50/50 to-gray-300 bg-clip-text text-transparent font-normal mt-4 sm:mt-6 md:mt-8 drop-shadow-md px-2 sm:px-0">
                Feel free to reach out anytime.
              </p>
            </div>

            <Button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500  text-white border-0 rounded-lg sm:rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 relative overflow-hidden group backdrop-blur-sm w-full sm:w-auto"
              size="lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10 drop-shadow-sm" />
              <span className="relative z-10 drop-shadow-sm">
                hello@arghyaghosh.com
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
