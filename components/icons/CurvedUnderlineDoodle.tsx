import React from "react";

interface CurvedUnderlineDoodleProps {
  className?: string;
  strokeWidth?: number;
}

export default function CurvedUnderlineDoodle({
  className = "w-full h-3 sm:h-4 text-[#225cc0]",
  strokeWidth = 3.5,
}: CurvedUnderlineDoodleProps) {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 11 C 60 4, 180 3, 235 13"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

