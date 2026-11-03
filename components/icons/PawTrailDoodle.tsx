import React from "react";

interface PawTrailDoodleProps {
  className?: string;
  stroke?: string;
}

export default function PawTrailDoodle({
  className = "w-[120px] h-[80px]",
  stroke = "white",
}: PawTrailDoodleProps) {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={className}>
      <path
        d="M10 70 C 30 50, 40 40, 50 30 C 55 25, 65 20, 70 30 C 75 40, 60 50, 50 60 C 40 50, 25 40, 30 30 C 35 20, 45 25, 50 30"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

