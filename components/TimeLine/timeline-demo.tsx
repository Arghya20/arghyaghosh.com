"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Getting to Know You",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed">
            Everything begins with understanding you and your brand. I take the
            time to learn about your audience, your content goals, and the
            message you want to share. Whether you're a creator looking to level
            up your YouTube presence or a brand wanting to stand out on social
            media, I shape my process around your unique needs.
          </p>
        </div>
      ),
    },
    {
      title: "Crafting the Vision",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed">
            After our initial conversation, I develop a clear and personalized
            plan. This includes defining the style and tone of your content,
            aligning the visuals with your brand identity, and outlining how and
            when the content should be published—if scheduling is part of your
            workflow.
          </p>
        </div>
      ),
    },
    {
      title: "Bringing Ideas to Life",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed">
            Once the plan is in place, I begin the creative process. I focus on
            delivering high-quality video edits that reflect your brand's
            personality and purpose. If needed, I also design eye-catching
            thumbnails and brainstorm new content ideas to keep things fresh,
            relevant, and engaging.
          </p>
        </div>
      ),
    },
    {
      title: "Fine-Tuning and Handoff",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed">
            You'll receive the edited content for review, and I'll refine it
            based on your feedback. Once everything feels right, I deliver the
            final files in the format you prefer. If you're working with me on a
            regular basis, I'll ensure your content stays consistent and aligned
            with your vision.
          </p>
        </div>
      ),
    },
    {
      title: "Why It Works",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed">
            This process has been tried and tested—both for my personal projects
            and for clients. It's flexible, efficient, and focused on delivering
            quality results every time, without cutting corners or wasting time.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950">
      <Timeline data={data} />
    </div>
  );
}
