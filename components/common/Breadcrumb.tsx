"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";

export interface BreadcrumbProps {
  pageKey?: string;
  title?: string;
  subTitle?: string;
  parentPath?: string;
  parentLabel?: string;
  bgImage?: string;
}

export default function Breadcrumb({
  pageKey,
  title,
  subTitle,
  parentPath,
  parentLabel,
  bgImage,
}: BreadcrumbProps) {
  // Breadcrumb config
  const breadcrumbConfig = site.breadcrumb;
  const pages = breadcrumbConfig?.pages as Record<string, { title: string; subTitle?: string; parentLabel?: string; parentPath?: string; bgImage?: string }> | undefined;
  const pageConfig = pageKey && pages ? pages[pageKey] : undefined;

  // Resolve values
  const resolvedTitle = title || pageConfig?.title || "About Us";
  const resolvedSubTitle = subTitle || pageConfig?.subTitle || resolvedTitle;
  const resolvedParentPath = parentPath || pageConfig?.parentPath || breadcrumbConfig?.parentPath || "/";
  const resolvedParentLabel = parentLabel || pageConfig?.parentLabel || breadcrumbConfig?.parentLabel || "Home";
  const resolvedBgImage = bgImage || pageConfig?.bgImage || breadcrumbConfig?.defaultBgImage || "/images/breadcrumb-bg.webp";

  return (
    <section
      aria-label="Page Header and Breadcrumb"
      className="relative w-full overflow-hidden bg-[#0c182b] text-white pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-16 md:pb-20 select-none"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-0">
        <Image
          src={resolvedBgImage}
          alt={resolvedTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1526]/75 via-[#0b1b33]/65 to-[#091424]/85 pointer-events-none" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col items-center justify-center text-center">
        {/* Main Title */}
        <h1 className="font-poppins font-semiBold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-tight mb-4 sm:mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
          {resolvedTitle}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="inline-flex items-center gap-2">
          {/* Home Pill */}
          <Link
            href={resolvedParentPath}
            className="inline-flex items-center justify-center px-4 sm:px-4.5 py-1 sm:py-1.5 rounded-full border border-white/60 bg-white/10 hover:bg-white/25 active:bg-white/40 active:scale-95 text-white/95 font-poppins text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-150 shadow-sm"
          >
            {resolvedParentLabel}
          </Link>

          {/* Current Page Pill */}
          <span
            aria-current="page"
            className="inline-flex items-center justify-center px-4 sm:px-4.5 py-1 sm:py-1.5 rounded-full bg-white text-[#111827] font-poppins text-xs sm:text-[13px] font-medium shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          >
            {resolvedSubTitle}
          </span>
        </nav>
      </div>
    </section>
  );
}
