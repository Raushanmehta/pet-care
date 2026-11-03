"use client";

import React from "react";
import { FaPaw } from "react-icons/fa";
import { site, PricingData } from "@/data";
import PricingCard from "@/components/cards/PricingCard";

interface PricingSectionProps {
    data?: PricingData;
    className?: string;
}

export default function PricingSection({
    data = site.pricing,
    className = "",
}: PricingSectionProps) {
    return (
        <section
            aria-label="Pricing and Packages"
            className={`relative w-full overflow-hidden bg-white text-[#111827] py-10 lg:py-16 select-none ${className}`}
        >
            {/* Decorative Subtle */}
            <div className="absolute top-8 left-8 sm:left-20 pointer-events-none opacity-10">
                <FaPaw className="w-16 h-16 sm:w-20 sm:h-20 text-[#059669] rotate-12" />
            </div>
            <div className="absolute top-10 right-8 sm:right-24 pointer-events-none opacity-10">
                <FaPaw className="w-16 h-16 sm:w-20 sm:h-20 text-[#059669] -rotate-12" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-8">

                    {/* Centered Tagline */}
                    <div className="inline-flex items-center gap-3 mb-2.5">
                        <span className="w-10 sm:w-12 h-[2.5px] bg-[#059669] rounded-full" />
                        <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.18em] uppercase text-[#059669]">
                            {data.tag}
                        </span>
                        <span className="w-10 sm:w-12 h-[2.5px] bg-[#059669] rounded-full" />
                    </div>

                    {/* Main Headline */}
                    <div className="relative inline-flex items-center justify-center">
                        {/* Left 3-dash */}
                        <div className="absolute -left-9 sm:-left-12 -top-1 sm:-top-2 text-[#059669] pointer-events-none">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                                <line x1="5" y1="16" x2="2" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="9" y1="11" x2="7" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="16" y1="9" x2="14" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#111827] tracking-tight leading-[1.14]">
                            {data.headline.main}{" "}
                            <span className="text-[#059669] font-bold">{data.headline.highlight}</span>
                        </h2>

                        {/* Right Loop */}
                        <div className="hidden sm:block absolute -right-20 -top-4 text-[#059669] pointer-events-none opacity-80">
                            <svg width="60" height="40" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3">
                                <path d="M 5 45 C 20 40, 25 15, 45 20 C 55 22, 60 10, 50 5 C 40 0, 35 15, 55 35" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* Subtitle description */}
                    <p className="font-roboto text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl mt-3">
                        {data.description}
                    </p>
                </div>

                {/* 4 Plans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
                    {data.plans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}

