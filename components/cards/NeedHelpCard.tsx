"use client";

import React from "react";
import Image from "next/image";
import { FaPaw, FaPhoneAlt } from "react-icons/fa";
import { ServiceDetailHelpCard } from "@/data";

interface NeedHelpCardProps {
  data: ServiceDetailHelpCard;
  className?: string;
}

export default function NeedHelpCard({
  data,
  className = "",
}: NeedHelpCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#eaf2fd] via-[#e5eefb] to-[#dde8f8] border border-blue-100/60 p-6 flex flex-col items-center text-center shadow-[0_6px_24px_rgba(34,92,192,0.06)] ${className}`}
    >
      {/* Decorative Subtle */}
      <div className="absolute top-4 right-5 pointer-events-none opacity-20">
        <FaPaw className="w-8 h-8 text-[#225cc0] rotate-12" />
        <FaPaw className="w-5 h-5 text-[#225cc0] -rotate-12 translate-x-3 translate-y-1" />
      </div>

      {/* Dog with */}
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md bg-white">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Title & Subtitle */}
      <h4 className="font-poppins font-bold text-xl sm:text-2xl text-[#111827] tracking-tight mb-2">
        {data.title}
      </h4>
      <p className="font-roboto text-xs sm:text-[15px] text-[#4b5563] leading-relaxed max-w-[300px] mb-5">
        {data.subtitle}
      </p>

      {/* Call Us */}
      <a
        href={`tel:${data.phone.replace(/[^0-9+]/g, "")}`}
        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-blue-50/80 text-[#111827] px-4 py-3 rounded-xl border border-blue-200/60 shadow-sm transition-all duration-200 group"
      >
        <div className="w-10 h-10 rounded-full bg-[#225cc0] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <FaPhoneAlt className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-roboto text-[15px] font-medium text-[#225cc0]">
            {data.callText}
          </span>
          <span className="font-poppins font-bold text-sm sm:text-[16px] text-[#111827] tracking-tight">
            {data.phone}
          </span>
        </div>
      </a>
    </div>
  );
}

