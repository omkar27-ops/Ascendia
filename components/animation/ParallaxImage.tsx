"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  offset?: number;
}

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  offset = 50,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  // If the src is an external URL, we can just use a standard img tag for simplicity,
  // or a Next.js Image with unoptimized=true depending on config.
  // Since we might use Unsplash images without domain config, we'll use a standard img tag with motion.
  
  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15 }}
        className={cn("absolute inset-0 w-full h-full object-cover", imageClassName)}
      />
    </div>
  );
}
