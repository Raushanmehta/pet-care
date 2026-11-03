"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { site, GalleryData, GalleryItemData } from "@/data";
import GalleryCard from "@/components/cards/GalleryCard";

interface GallerySectionProps {
  data?: GalleryData;
  className?: string;
}

export default function GallerySection({
  data = site.gallery,
  className = "",
}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItemData | null>(null);

  return (
    <section
      aria-label="Pet Gallery"
      className={`relative w-full overflow-hidden bg-white text-[#111827]  py-10 lg:py-16  select-none ${className}`}
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {data.items.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL PREVIEW */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85  animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer text-xl font-bold"
            >
              ✕
            </button>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-center font-poppins text-sm sm:text-base">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

