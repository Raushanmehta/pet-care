import React from "react";

interface QuoteMarkIconProps {
  className?: string;
  fill?: string;
}

export default function QuoteMarkIcon({
  className = "w-8 h-8 text-[#60a5fa]",
  fill = "currentColor",
}: QuoteMarkIconProps) {
  return (
    <svg
      viewBox="-2 -2 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left comma-shaped quote */}
      <path
        d="M14.5 12.5C14.5 6 11 0 0.5 0C0.5 5.5 3 8 5.5 9.5C2.5 11 0.5 14.5 0.5 18.5C0.5 24.5 5 29.5 11 29.5C16.5 29.5 14.5 19 14.5 12.5Z"
        fill={fill}
      />
      {/* Right comma-shaped quote */}
      <path
        d="M39.5 12.5C39.5 6 36 0 25.5 0C25.5 5.5 28 8 30.5 9.5C27.5 11 25.5 14.5 25.5 18.5C25.5 24.5 30 29.5 36 29.5C41.5 29.5 39.5 19 39.5 12.5Z"
        fill={fill}
      />
    </svg>
  );
}

