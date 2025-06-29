"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Tilt } from "@/components/ui/tilt";
import { Sparkles, Zap, CheckCircle, Rocket, Shield } from "lucide-react";

export default function TiltedCard() {
  return (
    <div className=" transition-colors duration-500">
      {/* Hero Section */}
      <div className="text-center py-12 px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          What
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {" "}
            Matters.
          </span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center items-center px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl">
          {/* Card 1 - Reliability */}
          <Tilt
            rotationFactor={8}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
          >
            <SpotlightCard
              className="w-full max-w-[350px] h-[300px] gap-6"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="p-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <CheckCircle
                  className="w-8 h-8"
                  style={{ color: "var(--icon-color)" }}
                />
              </div>
              <div className="space-y-4 flex-1">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--heading-text)" }}
                >
                  Consistent Support
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--paragraph-text)" }}
                >
                  We stay committed from start to finish—no ghosting, no
                  excuses.
                </p>
              </div>
            </SpotlightCard>
          </Tilt>

          {/* Card 2 - Performance */}
          <Tilt
            rotationFactor={8}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
          >
            <SpotlightCard
              className="w-full max-w-[350px] h-[300px] gap-6"
              spotlightColor="rgba(168, 85, 247, 0.2)"
            >
              <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Rocket
                  className="w-8 h-8"
                  style={{ color: "var(--icon-color)" }}
                />
              </div>
              <div className="space-y-4 flex-1">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--heading-text)" }}
                >
                  Speed with Precision
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--paragraph-text)" }}
                >
                  Quick turnarounds, always maintaining top-tier quality.
                </p>
              </div>
            </SpotlightCard>
          </Tilt>

          {/* Card 3 - Security */}
          <Tilt
            rotationFactor={8}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
          >
            <SpotlightCard
              className="w-full max-w-[350px] h-[300px] gap-6"
              spotlightColor="rgba(34, 197, 94, 0.2)"
            >
              <div className="p-2 rounded-full bg-green-500/10 border border-green-500/20">
                <Shield
                  className="w-8 h-8"
                  style={{ color: "var(--icon-color)" }}
                />
              </div>
              <div className="space-y-4 flex-1">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--heading-text)" }}
                >
                  Built on Trust
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--paragraph-text)" }}
                >
                  For us, relationships matter more than revenue.
                </p>
              </div>
            </SpotlightCard>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
