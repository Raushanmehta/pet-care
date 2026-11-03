import React from "react";
import Image from "next/image";

export interface GalleryItem {
  id: string | number;
  image: string;
  alt: string;
}

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
  onClick?: () => void;
}

export default function GalleryCard({
  item,
  className = "",
  onClick,
}: GalleryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative w-full aspect-[2/1.05] sm:aspect-[2/1.02] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 cursor-pointer ${className}`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
      />

      {/* Subtle hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

