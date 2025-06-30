"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:yourname@gmail.com";
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 md:p-16 lg:p-20 text-center backdrop-blur-sm">
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              have a project in mind
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              or just want to say hello?
            </h3>
            <p className="text-xl md:text-2xl text-zinc-300 font-light mt-8">
              feel free to reach out anytime.
            </p>
          </div>

          <Button
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white border-0 rounded-xl px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden group"
            size="lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <Mail className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10">hello@arghyaghosh.com</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
