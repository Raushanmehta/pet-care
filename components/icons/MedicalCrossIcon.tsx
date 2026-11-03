import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export default function MedicalCrossIcon({
  className = "w-5 h-5",
  size = 20,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M9 3H15V9H21V15H15V21H9V15H3V9H9V3Z" />
    </svg>
  );
}

