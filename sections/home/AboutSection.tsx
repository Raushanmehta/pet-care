"use client";

import React from "react";
import Image from "next/image";
import {
  CurvedUnderlineDoodle,
  CurvedArrowDoodle,
  HomeShelterIcon,
} from "@/components/icons";
import { site, AboutData } from "@/data";
import { FaPaw } from "react-icons/fa";

interface AboutSectionProps {
  data?: AboutData;
}

export default function AboutSection({ data = site.about }: AboutSectionProps) {
  return (
    <section
      aria-label="About Us"
      className="relative w-full overflow-hidden bg-white text-[#111827] py-10 lg:py-16  select-none"
    >
      {/* Decorative Top-Right */}
      <div className="absolute top-8 right-8 sm:right-16 pointer-events-none opacity-15">
        <FaPaw className="w-14 h-14 sm:w-16 sm:h-16 text-[#225cc0] -rotate-12" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* UPPER ROW: */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start mb-6 sm:mb-8">
          {/* Left Column: */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.16em] uppercase text-[#225cc0]">
                {data.tag}
              </span>
              <span className="w-12 h-[2.5px] bg-[#225cc0]/60 rounded-full" />
            </div>

            {/* Serif Headline */}
            <h2 className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-[#111827] leading-[1.12]">
              <span className="block">{data.headline.line1}</span>
              <span className="block">{data.headline.line2}</span>
              <span className="relative inline-flex items-center text-[#225cc0] mt-1">
                <span>{data.headline.highlight}</span>

                {/* Paw Icon */}
                <FaPaw className="w-6 h-6 sm:w-7 sm:h-7 text-[#225cc0] ml-2.5 inline-block -rotate-12" />

                {/* Hand-drawn curved */}
                <CurvedUnderlineDoodle className="absolute -bottom-3 left-0 w-full h-3 sm:h-4 text-[#225cc0] overflow-visible" />
              </span>
            </h2>
          </div>

          {/* Right Column: */}
          <div className="lg:col-span-5 flex flex-col items-start pt-1 lg:pt-6 relative">
            {/* Hand-drawn arrow */}
            <div className="hidden lg:block absolute -top-4 -left-12 text-[#225cc0] pointer-events-none">
              <CurvedArrowDoodle />
            </div>

            <p className="font-roboto text-[15px] sm:text-base text-[#4b5563] leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* LOWER SECTION: */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          {/* LEFT SUB-GRID: */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Photo 1 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[340px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-slate-100">
              <Image
                src={data.images.teamPet.src || "/images/about-team-pet.webp"}
                alt={data.images.teamPet.alt || "Couple with pet"}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover object-center transition-transform duration-500"
              />

            </div>

            {/* Two Bottom */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6 pt-2">
              {data.features.map((feature, idx) => (
                <React.Fragment key={feature.id}>
                  <div className="flex-1 flex items-start gap-3.5 p-1 rounded-2xl transition-transform duration-200 hover:translate-x-1">
                    {/* Circular Icon Badge */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: feature.badgeBg, color: feature.iconColor }}
                    >
                      {feature.icon === "paw" ? (
                        <FaPaw className="w-7 h-7" />
                      ) : (
                        <HomeShelterIcon className="w-7 h-7 text-[#0f1418]" />
                      )}
                    </div>

                    {/* Feature Text */}
                    <div className="flex flex-col i">
                      <h3 className="font-semibold text-[16px] sm:text-[17px] text-[#111827] tracking-tight leading-snug ">
                        {feature.title}
                      </h3>
                      <p className="font-roboto text-sm sm:text-base text-[#6b7280] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  {idx === 0 && (
                    <div className="hidden sm:block w-[1.5px] bg-slate-200 self-stretch my-1 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT SUB-GRID: */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center ">
            {/* The Outer */}
            <div className="relative w-full max-w-[390px] sm:max-w-[500px] aspect-[1/1.08]">
              {/* Tilted Soft */}
              <div
                className="hidden sm:block absolute inset-y-[-16px] sm:inset-y-[-24px] inset-x-[14px] sm:inset-x-[20px] bg-[#d9e8fb] rounded-[36px] sm:rounded-[44px] rotate-8 sm:rotate-9 pointer-events-none"
                style={{ transformOrigin: "center center" }}
              />

              {/* Main Foreground */}
              <div className="relative w-full h-full rounded-[36px] sm:rounded-[44px] overflow-hidden shadow-[0_16px_40px_rgba(34,92,192,0.14)] bg-slate-100 z-10">
                <Image
                  src={data.images.dog.src || "/images/about-dog.webp"}
                  alt={data.images.dog.alt || "Happy smiling dog"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
