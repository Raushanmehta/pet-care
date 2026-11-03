import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export default function HomeShelterIcon({
  className = "w-5 h-5",
  size = 20,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Roof */}
      <path d="M3 10L12 3L21 10" />
      {/* House Body */}
      <path d="M5 9.5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.5" />
      {/* Inner Door */}
      <path d="M10 21V14H14V21" />
    </svg>
  );
}

