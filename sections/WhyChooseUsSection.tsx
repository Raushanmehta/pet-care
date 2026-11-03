"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { FiTarget, FiEye, FiCheck } from "react-icons/fi";
import { FaBone, FaPlay } from "react-icons/fa6";
import { site, WhyChooseUsData } from "@/data";
import { SlantedTransition } from "@/components/icons";

interface WhyChooseUsProps {
  data?: WhyChooseUsData;
  className?: string;
}

export default function WhyChooseUsSection({
  data = site.whyChooseUs,
  className = "",
}: WhyChooseUsProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      aria-label="Why Choose Us"
      className={`relative w-full overflow-hidden bg-transparent select-none ${className}`}
    >
      {/* TOP SLANTED */}
      <div className="w-full overflow-hidden leading-none -mb-[1px]">
        <SlantedTransition type="service-top" fill="#1b62cc" />
      </div>

      {/* MAIN ROYAL */}
      <div className="relative w-full bg-[#1b62cc] text-white py-10 lg:py-16">
        {/* Subtle Decorative */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
          <FaPaw className="absolute top-8 left-8 sm:left-16 w-14 h-14 sm:w-16 sm:h-16 text-white -rotate-12" />
          <FaPaw className="absolute top-1/2 left-4 sm:left-8 w-16 h-16 text-white rotate-12" />
          <FaPaw className="absolute top-16 left-[48%] w-16 h-16 text-white rotate-45" />
          <FaBone className="absolute top-24 right-[36%] w-14 h-14 text-white -rotate-45" />
          <FaPaw className="absolute bottom-12 right-[38%] w-16 h-16 text-white -rotate-12" />
        </div>

        {/* CONTAINER */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* LEFT */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-3 mb-2">
                <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.16em] uppercase text-white/95">
                  {data.tag}
                </span>
                <span className="w-12 h-[2.5px] bg-white/60 rounded-full" />
              </div>

              {/* Main Headline */}
              <h2 className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-white leading-[1.12] mb-6 sm:mb-8">
                <span className="block">{data.headline.line1}</span>
                <span className="relative inline-flex items-center text-[#a5ccff] mt-1">
                  <span>{data.headline.highlight}</span>
                  <span className="text-white ml-2.5 font-serif">{data.headline.line2}</span>
                </span>
              </h2>

              {/* Lower Subsection: */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                {/* Video Card */}
                <div className="sm:col-span-6 relative">
                  {/* Left 3-dash */}
                  <div className="absolute -top-3 -left-4 text-white pointer-events-none">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <line x1="4" y1="16" x2="1" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="8" y1="11" x2="6" y2="7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="15" y1="9" x2="13" y2="5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Video Thumbnail Frame */}
                  <div className="relative w-full aspect-[4/3] rounded-[28px] sm:rounded-[34px] overflow-hidden border-[4px] border-white shadow-[0_12px_36px_rgba(0,0,0,0.18)] bg-slate-200 group">
                    <Image
                      src={data.video.thumbnail}
                      alt={data.video.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />

                    {/* Floating Circular */}
                    <button
                      type="button"
                      onClick={() => setVideoModalOpen(true)}
                      aria-label="Play Video"
                      className="absolute top-4 left-4 sm:top-5 sm:left-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white active:bg-blue-50 text-[#1b62cc] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-150 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
                    >
                      <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-1 text-[#1b62cc]" />
                    </button>
                  </div>
                </div>

                {/* Our Mission */}
                <div className="sm:col-span-6 flex flex-col gap-5 sm:gap-6 pl-0 sm:pl-2">
                  {/* Our Mission */}
                  <div className="flex items-start gap-3.5 p-1 rounded-2xl transition-transform duration-200 hover:translate-x-1">
                    {/* Circular Icon */}
                    <div className="w-14 h-14 rounded-full bg-white text-[#1b62cc] flex items-center justify-center shrink-0 shadow-sm">
                      <FiTarget className="w-7 h-7 stroke-[2.3]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-poppins font-semibold text-[16px] sm:text-[17px] text-white tracking-tight leading-snug mb-1">
                        {data.mission.title}
                      </h3>
                      <p className="font-roboto text-xs sm:text-sm text-white/85 leading-relaxed">
                        {data.mission.description}
                      </p>
                    </div>
                  </div>

                  {/* Our Vision */}
                  <div className="flex items-start gap-3.5 p-1 rounded-2xl transition-transform duration-200 hover:translate-x-1">
                    {/* Circular Icon */}
                    <div className="w-14 h-14 rounded-full bg-white text-[#1b62cc] flex items-center justify-center shrink-0 shadow-sm">
                      <FiEye className="w-7 h-7 stroke-[2.3]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-[16px] sm:text-[17px] text-white tracking-tight leading-snug mb-1">
                        {data.vision.title}
                      </h3>
                      <p className="font-roboto text-xs sm:text-sm text-white/85 leading-relaxed">
                        {data.vision.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">


              {/* Main Card */}
              <div className="relative w-full max-w-[420px] bg-white text-[#111827] rounded-[36px] sm:rounded-[44px] p-6 sm:p-8 shadow-[0_16px_40px_rgba(34,92,192,0.18)] overflow-hidden">
                {/* Bottom Right */}
                <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-15">
                  <FaPaw className="w-24 h-24 text-[#1b62cc] rotate-12" />
                </div>

                {/* Card Title */}
                <h3 className="font-poppins font-bold text-2xl sm:text-[26px] text-[#111827] tracking-tight leading-snug mb-2.5">
                  {data.card.title.line1}
                  <br />
                  <span className="text-[#1b62cc]">{data.card.title.line2}</span>
                </h3>

                {/* Card Subtitle */}
                <p className="font-roboto text-xs sm:text-sm text-[#4b5563] leading-relaxed mb-5">
                  {data.card.description}
                </p>

                {/* Checklist items */}
                <ul className="space-y-3 sm:space-y-3.5">
                  {data.card.reasons.map((reason) => (
                    <li key={reason} className="flex items-center gap-3">
                      {/* Circular Blue */}
                      <span className="w-5 h-5 rounded-full bg-[#1b62cc] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <FiCheck className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="font-poppins font-medium text-xs sm:text-[13.5px] text-[#334155]">
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SLANTED */}
      <div className="w-full overflow-hidden leading-none -mt-[1px] bg-white">
        <SlantedTransition type="service-bottom" fill="#1b62cc" />
      </div>

      {/* VIDEO MODAL POPUP */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={data.video.youtubeUrl}
              title="Why Choose PetCare Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
