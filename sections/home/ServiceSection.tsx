"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import {
  ArrowRightIcon,
  SlantedTransition,
  ToothDentalIcon,
  MedicalCrossIcon,
  ScissorsGroomingIcon,
} from "@/components/icons";
import { site, ServicesData, ServiceItem } from "@/data";
import { TbVaccine } from "react-icons/tb";

interface ServiceSectionProps {
  data?: ServicesData;
  hideTopSlant?: boolean;
}

export default function ServiceSection({
  data = site.services,
  hideTopSlant = false,
}: ServiceSectionProps) {
  const shouldHideTopSlant = hideTopSlant;
  const renderServiceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "vaccine":
        return <TbVaccine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#225cc0]" />;
      case "paw":
        return <FaPaw className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#225cc0]" />;
      case "dental":
        return <ToothDentalIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#225cc0]" />;
      case "cross":
        return <MedicalCrossIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#225cc0]" />;
      case "scissors":
        return <ScissorsGroomingIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#225cc0]" />;
      default:
        return <FaPaw className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#225cc0]" />;
    }
  };

  return (
    <section
      aria-label="Our Services"
      className="relative w-full overflow-hidden bg-transparent select-none"
    >
      {/* TOP SLANTED */}
      {!shouldHideTopSlant && (
        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <SlantedTransition type="service-top" fill="#2761c2" />
        </div>
      )}

      {/* MAIN BLUE CONTAINER */}
      <div className="relative w-full bg-[#2761c2] text-white py-10 lg:py-16">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-2 md:mb-6 ">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-12 h-[2.5px] bg-white/60 rounded-full" />
              <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.16em] uppercase text-white/90">
                {data.tag}
              </span>
              <span className="w-12 h-[2.5px] bg-white/60 rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-white leading-[1.12] mb-3">
              {data.headline}
            </h2>

            {/* Subheadline description */}
            <p className="font-roboto text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
              {data.subheadline}
            </p>
          </div>

          {/* 5 SERVICE */}
          <div className="flex flex-col divide-y divide-white/20">
            {data.items.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="group py-3 sm:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6"
              >
                {/* 1. IMAGE */}
                <div className="relative shrink-0 w-full sm:w-64 md:w-72 h-36 sm:h-32 md:h-40 rounded-2xl overflow-hidden bg-white/10 shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 250px, 280px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* ROW FOR SM / MOBILE: [ICON] [TITLE / DESC] [BUTTON] */}
                <div className="w-full flex-1 flex flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
                  {/* 2. ICON (Chota Icon Badge) */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16 rounded-full bg-white text-[#225cc0] shadow-[0_4px_16px_rgba(0,0,0,0.18)] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {renderServiceIcon(service.icon)}
                  </div>

                  {/* 3. TITLE & DESCRIPTION */}
                  <div className="flex-1 flex flex-col min-w-0 pr-1 md:pr-4">
                    <h3 className="font-poppins font-semibold text-base sm:text-xl md:text-[24px] text-white tracking-tight leading-snug mb-0.5 sm:mb-1 group-hover:text-blue-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-roboto text-sm sm:text-sm md:text-[15px] text-white/85 leading-relaxed line-clamp-2 md:line-clamp-none max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {/* 4. BUTTON */}
                  <div className="shrink-0 self-center">
                    <Link
                      href={service.ctaHref || "#"}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 md:px-7 py-2.5 sm:py-2.5 md:py-3.5 rounded-full bg-white text-[#1d5cbf] hover:bg-[#fbc52e] hover:text-[#0f1418] active:bg-[#e0a609] active:text-[#0f1418] active:scale-[0.96] font-poppins font-semibold text-[13px] sm:text-xs md:text-[13.5px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_22px_rgba(251,197,46,0.5)] active:shadow-inner transition-all duration-150 select-none cursor-pointer whitespace-nowrap"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRightIcon className="w-4 h-4 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SLANTED */}
      <div className="w-full overflow-hidden leading-none -mt-[1px] bg-white">
        <SlantedTransition type="service-bottom" fill="#2761c2" />
      </div>
    </section>
  );
}
