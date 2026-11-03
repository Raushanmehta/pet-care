import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export default function ToothDentalIcon({
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
      <path d="M7 4C4.5 4 3 6.5 3 9.5C3 12.5 4.5 15 5.5 17.5C6.5 20 7.5 22 9 22C10.5 22 10.5 19 12 19C13.5 19 13.5 22 15 22C16.5 22 17.5 20 18.5 17.5C19.5 15 21 12.5 21 9.5C21 6.5 19.5 4 17 4C14.5 4 13.5 6 12 6C10.5 6 9.5 4 7 4Z" />
    </svg>
  );
}

