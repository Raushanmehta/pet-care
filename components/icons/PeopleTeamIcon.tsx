import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function PeopleTeamIcon({
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
      {/* Center Person */}
      <circle cx="12" cy="7" r="3.2" fill={fill} />
      <path
        d="M6 19.5C6 16.5 8.7 14 12 14C15.3 14 18 16.5 18 19.5V20H6V19.5Z"
        fill={fill}
      />
      {/* Left Person */}
      <circle cx="5.5" cy="8.5" r="2.2" fill={fill} />
      <path
        d="M1 19.5C1 17.5 2.8 15.8 5 15.3C4.4 16.3 4 17.6 4 19V20H1V19.5Z"
        fill={fill}
      />
      {/* Right Person */}
      <circle cx="18.5" cy="8.5" r="2.2" fill={fill} />
      <path
        d="M23 19.5C23 17.5 21.2 15.8 19 15.3C19.6 16.3 20 17.6 20 19V20H23V19.5Z"
        fill={fill}
      />
    </svg>
  );
}

