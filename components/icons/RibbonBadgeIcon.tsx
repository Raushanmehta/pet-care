import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function RibbonBadgeIcon({
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
      {/* Ribbons hanging down */}
      <path
        d="M8.5 14L6 22L12 19L14 20.3L10.5 14H8.5Z"
        fill={fill}
      />
      <path
        d="M15.5 14L18 22L12 19L15.5 14Z"
        fill={fill}
      />
      {/* Rosette scalloped */}
      <circle cx="12" cy="10" r="7.5" fill={fill} />
      {/* Star inside badge */}
      <path
        d="M12 6.5L13.2 9L15.8 9.3L13.9 11.1L14.4 13.7L12 12.4L9.6 13.7L10.1 11.1L8.2 9.3L10.8 9L12 6.5Z"
        fill="white"
      />
    </svg>
  );
}

