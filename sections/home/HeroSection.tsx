"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { site, HeroData } from "@/data";
import { SlantedTransition } from "@/components/icons";

interface HeroSectionProps {
  data?: HeroData;
}

// Animated counter
function AnimatedStatValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Check if
    const match = value.match(/^(\D*)(\d+)(\D*)$/);

    if (!match) {
      return;
    }

    const prefix = match[1] || "";
    const targetNumber = parseInt(match[2], 10);
    const suffix = match[3] || "";

    let current = 0;
    const duration = 1800; // 1.8 seconds animation
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      current = Math.round(easeOut * targetNumber);

      setDisplayValue(`${prefix}${current}${suffix}`);

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
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}

export default function HeroSection({ data = site.hero }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-[#2d6ac3] text-white pt-30 sm:pt-30 md:pt-26 lg:pt-32 select-none">
      {/* Upper Subtle */}
      <div className="absolute top-0 right-1/4 -z-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* IMAGE COLUMN */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end items-center relative pb-1 lg:pb-12 w-full lg:w-auto">
            {/* Outer Dashed */}
            <div className="relative p-2.5 sm:p-3 rounded-[110px] sm:rounded-[140px] md:rounded-[170px] lg:rounded-[190px] border-2 border-dashed border-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.22)] w-full max-w-[460px] lg:w-auto lg:max-w-none flex justify-center">
              {/* Inner Clipped */}
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:w-[430px] lg:max-w-none h-[450px] sm:h-[450px] md:h-[500px] lg:h-[560px] rounded-[100px] sm:rounded-[130px] md:rounded-[160px] lg:rounded-[180px] overflow-hidden bg-slate-100 shadow-inner">
                <Image
                  src={data.image.src || "/images/hero-puppy.webp"}
                  alt={data.image.alt || "Cute Golden Puppy"}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 430px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start z-10">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-medium tracking-tight text-white leading-[1.08] mb-4 md:mb-6">
              <span className="block drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                {data.headline.line1}
              </span>
              <span className="block drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                {data.headline.line2}
              </span>
            </h1>

            {/* Subheadline */}
            <div className="w-full flex justify-end pr-0 sm:pr-8 md:pr-12 lg:pr-16 mb-6 sm:mb-8 md:mb-20">
              <p className="font-poppins text-xs sm:text-[13px] md:text-[13.5px] text-white/95 leading-relaxed max-w-[340px] text-left">
                {data.subheadline}
              </p>
            </div>

            {/* Floating Stats */}
            <div className="relative inline-flex items-center p-1 sm:p-1.5 rounded-full border-2 border-dashed border-white/90 bg-transparent transition-all duration-300 hover:scale-[1.03]">
              <div className="flex items-center divide-x divide-slate-200/90 bg-white text-[#111827] rounded-full px-5 sm:px-7 py-3 sm:py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                {data.stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col text-center ${idx === 0
                      ? "pr-4 sm:pr-6"
                      : idx === data.stats.length - 1
                        ? "pl-4 sm:pl-6"
                        : "px-4 sm:px-6"
                      }`}
                  >
                    <span className="font-poppins font-black text-lg sm:text-xl md:text-2xl text-[#111827] tracking-tight leading-none mb-1">
                      <AnimatedStatValue value={stat.value} />
                    </span>
                    <span className="font-roboto text-[9.5px] sm:text-[11px] font-medium text-slate-500 whitespace-nowrap leading-none">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SLANTED */}
      <div className="relative w-full leading-none overflow-hidden -mb-[1px]">
        <SlantedTransition type="hero-bottom" fill="#ffffff" />
      </div>
    </section>
  );
}
