"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ScrollVideoScrubber } from "./ScrollVideoScrubber";

interface ScrollytellingEngineProps {
  children: React.ReactNode;
}

export function ScrollytellingEngine({ children }: ScrollytellingEngineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track global scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Add buttery-smooth physics to the scroll
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Fade out the cinematic background as the user scrolls past the first ~60% of the page.
  // This prevents the rocket from bleeding into Testimonials / CTA sections.
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 0.7], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* Scroll Video Scrubber Background (Z: -10) */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden"
      >
        <ScrollVideoScrubber progress={smoothProgress} frameCount={120} />
      </motion.div>

      {/* Website Content Layer (Z: 0) */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}
