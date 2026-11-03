"use client";

import React, { useEffect, useRef, useState } from "react";
import { site, StatsData } from "@/data";
import { FaPaw } from "react-icons/fa";
import {
  PeopleTeamIcon,
  PetTrainerIcon,
  PawHouseIcon,
  RibbonBadgeIcon,
  LoopTrailDoodle,
  SlantedTransition,
} from "@/components/icons";

interface StatsSectionProps {
  data?: StatsData;
  className?: string;
}

// Animated counter
function AnimatedStatCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Support numbers
    const digitsOnly = value.replace(/[^\d]/g, "");
    if (!digitsOnly) {
      return;
    }

    const hasComma = value.includes(",");
    const targetNumber = parseInt(digitsOnly, 10);

    // Extract prefix
    const prefixMatch = value.match(/^[^\d]*/);
    const prefix = prefixMatch ? prefixMatch[0] : "";

    // Extract suffix
    const suffixMatch = value.match(/[^\d]*$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";

    let current = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      current = Math.round(easeOut * targetNumber);

      const formattedNumber = hasComma
        ? current.toLocaleString("en-US")
        : current.toString();

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}

export default function StatsSection({ data = site.stats, className = "" }: StatsSectionProps) {
  const stats = data;

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "team":
        return <PeopleTeamIcon className="w-11 h-11 text-[#225cc0]" />;
      case "trainer":
        return <PetTrainerIcon className="w-11 h-11 text-[#225cc0]" />;
      case "house":
        return <PawHouseIcon className="w-11 h-11 text-[#225cc0]" />;
      case "ribbon":
        return <RibbonBadgeIcon className="w-11 h-11 text-[#225cc0]" />;
      default:
        return <PeopleTeamIcon className="w-11 h-11 text-[#225cc0]" />;
    }
  };

  return (
    <section className={`relative w-full overflow-hidden bg-transparent select-none ${className}`}>
      {/* TOP SLANTED */}
      <div className="w-full overflow-hidden leading-none -mb-[1px]">
        <SlantedTransition type="service-top" fill="#225cc0" />
      </div>

      {/* Main Blue */}
      <div className="relative w-full bg-[#225cc0] py-12 sm:py-16 lg:py-20">
        {/* Decorative Floating */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Top Left Area */}
          <FaPaw className="absolute top-10 left-12 w-14 h-14 text-white -rotate-12" />

          {/* Bottom Left Area */}
          <FaPaw className="absolute bottom-12 left-10 w-12 h-12 text-white rotate-12" />

          {/* Top Right Area */}
          <FaPaw className="absolute top-8 right-16 w-14 h-14 text-white rotate-12" />

          {/* Bottom Right Area */}
          <FaPaw className="absolute bottom-10 right-14 w-20 h-20 text-white -rotate-12" />
        </div>

        {/* Decorative Dashed */}
        <LoopTrailDoodle className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 z-10">
          {/* 4 Hanging */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-center justify-items-center">
            {stats.items.map((item) => (
              <div
                key={item.id}
                className="relative w-full max-w-[260px] pt-6 flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Top Hanging */}
                <div className="absolute top-0 flex flex-col items-center z-20">
                  {/* Vertical Hook */}
                  <div className="w-[3px] h-3.5 bg-white rounded-full shadow-sm" />
                  {/* Metal */}
                  <div className="w-5 h-5 rounded-full border-2 border-white bg-[#225cc0] flex items-center justify-center -mt-1 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Tag Body */}
                <div className="w-full bg-white rounded-[26px] p-6 sm:p-7 shadow-xl flex flex-col items-center text-center relative border-[2px] border-dashed border-[#225cc0]/30 hover:border-[#225cc0]/60 transition-colors">
                  {/* Circular Icon Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eff6ff] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    {renderIcon(item.icon)}
                  </div>

                  {/* Stat Counter */}
                  <div className="text-4xl sm:text-[48px] md:text-[52px] font-black text-[#225cc0] font-poppins tracking-tight leading-none mb-2.5">
                    <AnimatedStatCounter value={item.value} />
                  </div>

                  {/* Stat Label */}
                  <div className="text-xs sm:text-[14px] font-bold text-[#1e293b] tracking-[0.14em] uppercase font-poppins">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SLANTED */}
      <div className="w-full overflow-hidden leading-none -mt-[1px] bg-white">
        <SlantedTransition type="service-bottom" fill="#225cc0" />
      </div>
    </section>
  );
}
