import React from "react";
import { QuoteMarkIcon } from "@/components/icons";
import { FaPaw } from "react-icons/fa";

export interface TestimonialItem {
  id?: string;
  quote: string;
  author: string;
  role: string;
}

interface TestimonialCardProps {
  item: TestimonialItem;
  className?: string;
  showPawWatermark?: boolean;
}

export default function TestimonialCard({
  item,
  className = "",
  showPawWatermark = false,
}: TestimonialCardProps) {
  return (
    <div className={`relative group max-w-md w-full ${className}`}>
      {/* Quote Icon: */}
      <div className="mb-4 inline-block overflow-visible">
        <QuoteMarkIcon className="w-11 h-9 sm:w-12 sm:h-10 text-[#60a5fa] scale-x-[-1] overflow-visible" />
      </div>
      <p className="text-[#334155] text-[15px] sm:text-base leading-relaxed font-roboto">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="w-9 h-[2px] bg-[#225cc0] my-4" />
      <div>
        <h4 className="font-bold text-[#0f172a] text-[16px] sm:text-base font-poppins tracking-wide">
          {item.author}
        </h4>
        <p className="text-[14px] sm:text-sm text-[#64748b] font-roboto mt-0.5">
          {item.role}
        </p>
      </div>

      {showPawWatermark && (
        <div className="absolute -bottom-8 -right-4 sm:-right-8 pointer-events-none opacity-20 overflow-visible">
          <FaPaw className="w-16 h-16 sm:w-20 sm:h-20 text-[#3b82f6] -rotate-12 scale-x-[-1]" />
        </div>
      )}
    </div>
  );
}

