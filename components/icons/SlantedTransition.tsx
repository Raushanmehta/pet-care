import React from "react";

interface WaveTransitionProps {
  className?: string;
  fill?: string;
  type?: "hero-bottom" | "service-top" | "service-bottom" | "footer-top";
}

export default function SlantedTransition({
  className = "w-full h-12 sm:h-16 md:h-20 lg:h-24 block",
  fill = "#ffffff",
  type = "hero-bottom",
}: WaveTransitionProps) {
  if (type === "footer-top") {
    return (
      <svg
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="none"
      >
        <path d="M0,62 L1440,6 L1440,68 L0,68 Z" fill={fill} />
      </svg>
    );
  }

  if (type === "service-top") {
    return (
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="none"
      >
        <path d="M0,100 L1440,0 L1440,100 L0,100 Z" fill={fill} />
      </svg>
    );
  }

  if (type === "service-bottom") {
    return (
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1440,0 L1440,100 Z" fill={fill} />
      </svg>
    );
  }

  // default: hero-bottom
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path d="M0,45 L1440,120 L0,120 Z" fill={fill} />
    </svg>
  );
}

