"use client";

import { FaCheckCircle, FaPaw } from "react-icons/fa";
import { FaScissors, FaGraduationCap } from "react-icons/fa6";
import { MdOutlinePets, MdHealthAndSafety } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { PricingPlanItem } from "@/data";

interface PricingCardProps {
    plan: PricingPlanItem;
    className?: string;
}

export default function PricingCard({ plan, className = "" }: PricingCardProps) {
    const { title, subtitle, icon, startingFromText, price, theme, features } = plan;

    const renderIcon = () => {
        switch (icon) {
            case "grooming":
                // Stylized scissor
                return (
                    <div className="relative flex items-center justify-center">
                        <FaScissors className={`w-8 h-8 ${theme.iconColor} rotate-90`} />
                    </div>
                );
            case "veterinary":
                // Paw with
                return (
                    <div className="relative flex items-center justify-center">
                        <MdHealthAndSafety className={`w-8 h-8 ${theme.iconColor}`} />
                    </div>
                );
            case "training":
                // Graduation cap icon
                return (
                    <div className="relative flex items-center justify-center">
                        <FaGraduationCap className={`w-8 h-8 ${theme.iconColor}`} />
                    </div>
                );
            case "sitting":
                // House with
                return (
                    <div className="relative flex items-center justify-center">
                        <HiHome className={`w-8 h-8 ${theme.iconColor}`} />
                    </div>
                );
            default:
                return <MdOutlinePets className={`w-8 h-8 ${theme.iconColor}`} />;
        }
    };

    return (
        <div
            className={`relative w-full rounded-[26px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-gradient-to-b ${theme.bgGradient} border ${theme.border} shadow-[0_6px_24px_rgba(0,0,0,0.03)] ${className}`}
        >
            {/* Top Decorative */}
            <div
                className={`absolute -top-12 -left-10 w-48 h-48 rounded-[48%_52%_60%_40%/45%_55%_45%_55%] ${theme.blobBg} opacity-80 pointer-events-none blur-[1px]`}
            />
            <div
                className={`absolute -top-6 -right-6 w-20 h-20 rounded-full ${theme.blobBg} opacity-60 pointer-events-none`}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Circular Centered */}
                <div
                    className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-white/80 flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105`}
                >
                    {renderIcon()}
                </div>

                {/* Plan Title */}
                <h3 className="font-poppins font-bold text-xl sm:text-[22px] text-[#111827] tracking-tight leading-snug mb-1.5">
                    {title}
                </h3>

                {/* Plan Subtitle */}
                <p className="font-roboto text-xs sm:text-[15px] text-[#6b7280] leading-relaxed max-w-[230px] min-h-[38px] mb-6">
                    {subtitle}
                </p>

                {/* Checklist of */}
                <div className="w-full flex flex-col gap-3 text-left pt-2 border-t border-black/[0.05]">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                            <FaCheckCircle className={`w-6 h-6 shrink-0 ${theme.checkColor}`} />
                            <span className="font-roboto text-xs sm:text-[15.5px]  text-[#374151]">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Pricing */}
            <div className="relative z-10 pt-6 mt-6 border-t border-black/[0.05] flex items-end justify-between">
                <div className="flex flex-col text-left">
                    <span className="font-roboto text-[13px] sm:text-sm font-semibold text-[#6b7280] uppercase tracking-wider mb-0.5">
                        {startingFromText}
                    </span>
                    <span
                        className={`font-poppins font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight ${theme.priceColor}`}
                    >
                        {price}
                    </span>
                </div>

                {/* Decorative Bottom-Right */}
                <div className="relative pointer-events-none">
                    <FaPaw className={`w-11 h-11 sm:w-12 sm:h-12 ${theme.pawColor} rotate-12`} />
                </div>
            </div>
        </div>
    );
}

