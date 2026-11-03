import React from "react";

interface ArrowRightIconProps {
  className?: string;
  strokeWidth?: number;
}

export default function ArrowRightIcon({
  className = "w-4 h-4",
  strokeWidth = 2.5,
}: ArrowRightIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

