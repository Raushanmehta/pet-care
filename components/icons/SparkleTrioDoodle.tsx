import React from "react";

interface SparkleTrioDoodleProps {
  className?: string;
  strokeWidth?: number;
}

export default function SparkleTrioDoodle({
  className = "w-7 h-7 text-[#225cc0]",
  strokeWidth = 2.5,
}: SparkleTrioDoodleProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 26L2 23"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13 18L10 11"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M23 15L19 9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

