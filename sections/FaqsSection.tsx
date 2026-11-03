"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBone, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { site, FaqsData } from "@/data";

interface FaqsSectionProps {
    data?: FaqsData;
    className?: string;
}

export default function FaqsSection({
    data = site.faqs,
    className = "",
}: FaqsSectionProps) {
    // Default open
    const [openId, setOpenId] = useState<string | null>(
        data.items[0]?.id || null
    );

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            aria-label="Frequently Asked Questions"
            className={`relative w-full bg-white text-[#111827] py-10 lg:py-16  select-none ${className}`}
        >
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* ================= LEFT */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28 self-start">

                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#225cc0]/35 bg-[#f0f6fe] text-[#225cc0] mb-5 sm:mb-6 shadow-sm">
                            <FaBone className="w-3.5 h-3.5 rotate-[-25deg] text-[#225cc0]" />
                            <span className="font-poppins font-medium text-xs sm:text-[13px] tracking-wide text-[#225cc0]">
                                {data.badge.text}
                            </span>
                        </div>

                        {/* Large Bold Headline */}
                        <h2 className="font-poppins font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#111827] tracking-tight leading-[1.14] mb-8 sm:mb-10">
                            <span className="block">{data.headline.line1}</span>
                            <span className="block">{data.headline.line2}</span>
                            {data.headline.line3 && (
                                <span className="block">{data.headline.line3}</span>
                            )}
                        </h2>

                        {/* Pill CTA */}
                        <Link
                            href={data.cta.href}
                            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#225cc0] hover:bg-[#1b4b9e] active:scale-[0.98] text-white font-poppins text-sm sm:text-[17px] shadow-[0_6px_20px_rgba(34,92,192,0.28)] hover:shadow-[0_8px_26px_rgba(34,92,192,0.38)] transition-all duration-200"
                        >
                            {data.cta.label}
                        </Link>
                    </div>

                    {/* ================= RIGHT */}
                    <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200">
                        {data.items.map((item) => {
                            const isOpen = openId === item.id;

                            return (
                                <div key={item.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(item.id)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none"
                                    >
                                        <span
                                            className={`font-poppins text-base sm:text-lg md:text-[19px] transition-colors duration-200 leading-snug ${isOpen
                                                ? "text-[#225cc0] font-medium"
                                                : "text-[#111827] font-medium group-hover:text-[#225cc0]"
                                                }`}
                                        >
                                            {item.question}
                                        </span>

                                        <span
                                            className={`shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "text-[#225cc0]" : "text-[#225cc0]/80 group-hover:text-[#225cc0]"
                                                }`}
                                        >
                                            {isOpen ? (
                                                <FaArrowUp className="w-4 h-4 text-[#225cc0]" />
                                            ) : (
                                                <FaArrowDown className="w-4 h-4 text-[#225cc0]" />
                                            )}
                                        </span>
                                    </button>

                                    {/* Accordion Answer Content */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                                            : "grid-rows-[0fr] opacity-0 mt-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="font-roboto text-xs sm:text-[16px] text-[#6b7280] leading-relaxed max-w-2xl pr-4">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}

