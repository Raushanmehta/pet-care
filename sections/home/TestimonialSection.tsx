import React from "react";
import { site, TestimonialsData } from "@/data";
import { FaPaw } from "react-icons/fa";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { CurvedUnderlineDoodle } from "@/components/icons";

interface TestimonialSectionProps {
  data?: TestimonialsData;
}

export default function TestimonialSection({ data = site.testimonials }: TestimonialSectionProps) {
  const testimonials = data;
  const items = testimonials.items;
  const itemLeft1 = items[0];
  const itemRight = items[1];
  const itemLeft2 = items[2];
  const itemRight2 = items[3];

  return (
    <section className="relative w-full bg-white py-10 lg:py-16 overflow-hidden select-none">
      {/* Decorative Paw */}
      <div className="absolute top-8 right-8 sm:right-16 pointer-events-none opacity-15">
        <FaPaw className="w-14 h-14 sm:w-16 sm:h-16 text-[#225cc0] -rotate-12" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-12 h-[2.5px] bg-[#225cc0]/60 rounded-full" />
            <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.16em] uppercase text-[#225cc0]">
              {testimonials.tag}
            </span>
            <span className="w-12 h-[2.5px] bg-[#225cc0]/60 rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-[#111827] leading-[1.12]">
            {testimonials.headline.main}
            <br />
            <span className="relative inline-flex items-center text-[#225cc0] font-serif mt-1">
              <span>{testimonials.headline.highlight}</span>

              {/* Paw Icon */}
              <FaPaw className="w-6 h-6 sm:w-7 sm:h-7 text-[#225cc0] ml-2.5 inline-block -rotate-12" />

              {/* Hand-drawn curved */}
              <CurvedUnderlineDoodle className="absolute -bottom-3 left-0 w-full h-3 sm:h-4 text-[#225cc0] overflow-visible" />
            </span>
          </h2>
        </div>

        {/* Testimonials Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-12 lg:space-y-16">
            {/* Card 1 */}
            {itemLeft1 && <TestimonialCard item={itemLeft1} />}

            {/* Card 3 */}
            {itemLeft2 && (
              <TestimonialCard item={itemLeft2} className="pt-2 lg:pt-6" />
            )}
          </div>

          {/* Right Column */}
          <div className="relative md:pt-24 lg:pt-28 flex flex-col items-start md:items-end">
            {itemRight && (
              <TestimonialCard item={itemRight} showPawWatermark={true} />
            )}

            {/* Card 4 */}
            {itemRight2 && (
              <TestimonialCard item={itemRight2} className="pt-10 lg:pt-14" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
