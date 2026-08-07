"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface ScrollVideoScrubberProps {
  progress: MotionValue<number>;
  frameCount: number;
  /**
   * Where the video's focal point (rocket) sits vertically in the source frames.
   * 0 = top of the image, 1 = bottom. Default 0.55 (55% down).
   * This anchor stays at the center of the viewport on all screen sizes.
   */
  focalPointY?: number;
}

export function ScrollVideoScrubber({
  progress,
  frameCount,
  focalPointY = 0.55,
}: ScrollVideoScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedSetRef = useRef<Set<number>>(new Set());
  const lastDrawnRef = useRef<number>(-1);
  const dprRef = useRef<number>(1);

  // Map scroll progress → frame index (1-based)
  const currentFrameIndex = useTransform(progress, [0, 1], [1, frameCount]);

  // ─── Image loading ───────────────────────────────────────────────────
  const loadFrame = useCallback(
    (index: number) => {
      if (index < 1 || index > frameCount) return;
      if (loadedSetRef.current.has(index)) return; // already loaded or loading

      const img = imagesRef.current[index];
      if (!img) return;

      loadedSetRef.current.add(index);
      const paddedIndex = index.toString().padStart(4, "0");
      img.src = `/frames/frame-${paddedIndex}.webp`;

      img.onload = () => {
        // Draw first frame as soon as it arrives
        if (index === 1 && lastDrawnRef.current === -1) {
          drawFrame(index);
        }
      };
    },
    [frameCount],
  );

  // ─── Canvas draw ─────────────────────────────────────────────────────
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      // Avoid redundant draws
      if (lastDrawnRef.current === index) return;
      lastDrawnRef.current = index;

      const cw = canvas.width;
      const ch = canvas.height;

      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;

      const canvasRatio = cw / ch;
      const imgRatio = imgW / imgH;

      let drawW: number;
      let drawH: number;
      let dx: number;
      let dy: number;

      if (canvasRatio > imgRatio) {
        // Canvas is wider → scale to fill width, crop height
        drawW = cw;
        drawH = cw / imgRatio;
      } else {
        // Canvas is taller → scale to fill height, crop width
        drawH = ch;
        drawW = ch * imgRatio;
      }

      // Center the focal point (rocket) in the viewport
      // focalPointY tells us where in the *source image* the rocket lives.
      // We want that point to land at ~50% of the canvas height.
      dx = (cw - drawW) / 2; // horizontally centered
      dy = ch * 0.5 - drawH * focalPointY;

      // Clamp so we never show empty space outside the image
      const minDy = ch - drawH; // most we can shift up
      const maxDy = 0;          // most we can shift down
      dy = Math.max(minDy, Math.min(maxDy, dy));

      // Use high-quality image rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, drawW, drawH);
    },
    [focalPointY],
  );

  // ─── Initialise image array ──────────────────────────────────────────
  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      imgArray[i] = new Image();
    }
    imagesRef.current = imgArray;
    loadedSetRef.current = new Set();
    lastDrawnRef.current = -1;

    // Eagerly preload the first batch (first 20 frames)
    for (let i = 1; i <= Math.min(20, frameCount); i++) {
      loadFrame(i);
    }
  }, [frameCount, loadFrame]);

  // ─── React to scroll changes ────────────────────────────────────────
  useEffect(() => {
    return currentFrameIndex.on("change", (latestValue) => {
      const idx = Math.max(1, Math.min(frameCount, Math.round(latestValue)));

      requestAnimationFrame(() => drawFrame(idx));

      // Preload a generous rolling window (+/- 20 frames)
      const windowSize = 20;
      for (
        let i = Math.max(1, idx - windowSize);
        i <= Math.min(frameCount, idx + windowSize);
        i++
      ) {
        loadFrame(i);
      }
    });
  }, [currentFrameIndex, frameCount, drawFrame, loadFrame]);

  // ─── Responsive canvas sizing ────────────────────────────────────────
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Use devicePixelRatio for crisp rendering on HiDPI / Retina screens
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Reset last-drawn so the next change redraws
      lastDrawnRef.current = -1;

      const idx = Math.max(
        1,
        Math.min(frameCount, Math.round(currentFrameIndex.get())),
      );
      drawFrame(idx);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, [drawFrame, frameCount, currentFrameIndex]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none bg-black overflow-hidden">
      {/* Full-clarity canvas — no blend modes, no global blur */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: "auto" }}
      />

      {/* Subtle vignette for cinematic framing — does NOT blur the image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Top & bottom gradient so text remains readable without washing out the art */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
