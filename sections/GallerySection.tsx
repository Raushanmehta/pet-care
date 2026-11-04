"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { site, GalleryData } from "@/data";
import GalleryCard from "@/components/cards/GalleryCard";

interface GallerySectionProps {
  data?: GalleryData;
  className?: string;
}

export default function GallerySection({
  data = site.gallery,
  className = "",
}: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const totalImages = data.items.length;

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + totalImages) % totalImages
    );
  }, [totalImages]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % totalImages
    );
  }, [totalImages]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation (Arrow keys + Escape)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext, handleClose]);

  const activeImage = selectedIndex !== null ? data.items[selectedIndex] : null;

  return (
    <section
      aria-label="Pet Gallery"
      className={`relative w-full overflow-hidden bg-white text-[#111827] py-10 lg:py-16 select-none ${className}`}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
        <FaPaw className="absolute top-10 left-10 sm:left-24 w-18 h-18 sm:w-24 sm:h-24 text-[#225cc0] rotate-12" />
        <FaPaw className="absolute top-12 right-10 sm:right-28 w-18 h-18 sm:w-24 sm:h-24 text-[#225cc0] -rotate-12" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Centered Tagline */}
          <div className="inline-flex items-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-[2.5px] bg-[#225cc0]/70 rounded-full" />
            <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.2em] uppercase text-[#225cc0]">
              {data.tag}
            </span>
            <span className="w-8 sm:w-12 h-[2.5px] bg-[#225cc0]/70 rounded-full" />
          </div>

          {/* Main Headline */}
          <div className="relative inline-flex items-center justify-center">
            {/* Left 3-dash */}
            <div className="absolute -left-10 sm:-left-12 -top-1 sm:-top-2 text-[#225cc0] pointer-events-none">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="16" x2="2" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="9" y1="11" x2="7" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16" y1="9" x2="14" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#225cc0] tracking-tight leading-tight">
              {data.headline.main}{" "}
              <span className="text-[#3b82f6] font-bold">{data.headline.highlight}</span>
            </h2>

            {/* Right 3-dash */}
            <div className="absolute -right-10 sm:-right-12 -top-1 sm:-top-2 text-[#225cc0] pointer-events-none scale-x-[-1]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="16" x2="2" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="9" y1="11" x2="7" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16" y1="9" x2="14" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Subtitle description */}
          <p className="font-roboto text-sm sm:text-base md:text-[16.5px] text-[#4b5563] leading-relaxed max-w-2xl mt-2">
            {data.description}
          </p>
        </div>

        {/* 4x4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {data.items.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX SLIDER MODAL */}
      {activeImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <X size={24} />
          </button>

          {/* Previous Slide Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-xl"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Slide Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-xl"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl w-full h-[65vh] sm:h-[75vh] md:h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 shadow-2xl">
              <Image
                key={activeImage.id}
                src={activeImage.image}
                alt={activeImage.alt}
                fill
                priority
                className="object-contain transition-all duration-300"
              />
            </div>

            {/* Bottom Caption & Counter Indicator */}
            <div className="mt-4 flex items-center justify-between w-full px-2 text-white/90 text-sm sm:text-base font-poppins">
              <span className="font-medium truncate max-w-[70%]">{activeImage.alt}</span>
              <span className="text-white/60 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full">
                {selectedIndex + 1} / {totalImages}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

