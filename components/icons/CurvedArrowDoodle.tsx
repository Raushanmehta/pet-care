import React from "react";

interface CurvedArrowDoodleProps {
  className?: string;
  strokeWidth?: number;
}

export default function CurvedArrowDoodle({
  className = "w-12 h-10 text-[#225cc0]",
  strokeWidth = 2.4,
}: CurvedArrowDoodleProps) {
  return (
    <svg
      width="48"
      height="40"
      viewBox="0 0 48 40"
      fill="none"
      className={className}
    >
      <path
        d="M6 10 C 24 8, 38 15, 38 32 M 30 25 L 38 32 L 44 24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

