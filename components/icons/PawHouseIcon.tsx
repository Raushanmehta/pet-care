import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function PawHouseIcon({
  className = "w-7 h-7 text-[#225cc0]",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dog house contour */}
      <path
        d="M12 2.5L2.5 10H5V21H19V10H21.5L12 2.5Z"
        fill={fill}
      />
      {/* Knocked out */}
      {/* Main pad */}
      <ellipse cx="12" cy="15.8" rx="2.5" ry="2" fill="white" />
      {/* Top pads */}
      <circle cx="9.2" cy="12.2" r="1.1" fill="white" />
      <circle cx="11.2" cy="11.4" r="1.1" fill="white" />
      <circle cx="12.8" cy="11.4" r="1.1" fill="white" />
      <circle cx="14.8" cy="12.2" r="1.1" fill="white" />
    </svg>
  );
}

