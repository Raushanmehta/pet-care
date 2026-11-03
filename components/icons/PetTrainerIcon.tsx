import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function PetTrainerIcon({
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
      {/* Human kneeling/training */}
      <circle cx="17" cy="5" r="2" fill={fill} />
      {/* Body torso */}
      <path
        d="M17 8C15.8 8 14.5 8.8 14 10L13.2 12C12.8 13 12 13.5 11 13.5H9.5C9 13.5 8.5 13 8.5 12.5C8.5 12 9 11.5 9.5 11.5H11L12.5 8.2C13.3 6.4 15 5.2 17 5.2C18.2 5.2 19.3 5.8 20 6.8L21 8.2L19.5 9.2L18.7 8.2C18.2 7.7 17.6 7.5 17 8Z"
        fill={fill}
      />
      <path
        d="M14.5 12.5L16.2 16L13.8 19.5H11.5L14 15.5L13 13.2L14.5 12.5Z"
        fill={fill}
      />
      <path
        d="M16 16.5L18.5 18.2L18.5 20H15.8L14.5 17.8L16 16.5Z"
        fill={fill}
      />
      {/* Dog sitting/standing */}
      {/* Dog head */}
      <circle cx="6" cy="11.5" r="1.3" fill={fill} />
      <path
        d="M4.5 10.5C4.2 9.8 4 9 4.8 9.2C5.5 9.4 5.3 10.5 5 11L4.5 10.5Z"
        fill={fill}
      />
      {/* Dog body */}
      <path
        d="M5.8 12.5C6.2 13 6.8 13.6 7 14.2L8.5 14L8.5 14.8L7.2 15C7.2 16.5 6.8 18.5 6.5 19.5H5C5.3 18.2 5.5 16.5 5 15.2L4 16L3.5 15.2L5 13.5L5.8 12.5Z"
        fill={fill}
      />
      {/* Dog tail */}
      <path
        d="M3.8 15.5C3 15 2.5 14 2.8 13.5C3.1 13 3.5 14.2 4.2 14.8L3.8 15.5Z"
        fill={fill}
      />
    </svg>
  );
}

