import React from "react";

interface LoopTrailDoodleProps {
  className?: string;
  stroke?: string;
}

export default function LoopTrailDoodle({
  className = "w-full h-full pointer-events-none opacity-40",
  stroke = "white",
}: LoopTrailDoodleProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left heart-shaped */}
      <path
        d="M -30 200 C 60 220 90 280 60 300 C 40 310 10 270 30 230 C 50 190 130 270 170 310"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      {/* Right heart-shaped */}
      <path
        d="M 750 160 C 820 180 870 160 850 140 C 830 120 790 140 820 180 C 850 220 930 200 960 180"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
    </svg>
  );
}

