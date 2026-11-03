"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaPaw,
    FaCut,
    FaStethoscope,
    FaDog,
    FaHome,
    FaSyringe,
    FaChevronRight,
    FaCheckCircle,
} from "react-icons/fa";
import NeedHelpCard from "@/components/cards/NeedHelpCard";
import {
    site,
    ServiceItem,
    ServiceDetailSidebarService,
    ServiceDetailHelpCard,
} from "@/data";

interface ServiceDetailSectionProps {
    service?: ServiceItem;
    sidebar?: {
        title: string;
        services: ServiceDetailSidebarService[];
    };
    helpCard?: ServiceDetailHelpCard;
    className?: string;
}

export default function ServiceDetailSection({
    service,
    sidebar = site.services.sidebar,
    helpCard = site.services.helpCard,
    className = "",
}: ServiceDetailSectionProps) {
    const currentService: ServiceItem =
        service ||
        site.services.items.find((item) => item.id === "pet-grooming") ||
        site.services.items[0];

    const getServiceIcon = (iconName: string) => {
        switch (iconName) {
            case "scissors":
                return <FaCut className="w-4 h-4" />;
            case "stethoscope":
                return <FaStethoscope className="w-4 h-4" />;
            case "dog":
                return <FaDog className="w-4 h-4" />;
            case "home":
                return <FaHome className="w-4 h-4" />;
            case "vaccine":
                return <FaSyringe className="w-4 h-4" />;
            default:
                return <FaPaw className="w-4 h-4" />;
        }
    };

    return (
        <section
            aria-label="Service Details"
            className={`relative w-full bg-white text-[#111827] py-10 lg:py-16 select-none ${className}`}
        >
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* ================= LEFT */}
                    <aside className="lg:col-span-4 order-2 lg:order-1 w-full flex flex-col gap-6 lg:sticky lg:top-28 z-20 self-start">

                        {/* 1. Services */}
                        {sidebar && (
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                                {/* Header Tab */}
                                <div className="bg-[#225cc0] text-white px-6 py-4 flex items-center gap-3">
                                    <FaPaw className="w-5 h-5 text-white/90" />
                                    <h3 className="font-poppins font-semibold text-lg sm:text-2xl tracking-tight">
                                        {sidebar.title}
                                    </h3>
                                </div>

                                {/* Service Links List */}
                                <div className="p-3 flex flex-col gap-1.5">
                                    {sidebar.services.map((item) => {
                                        const isActive =
                                            currentService.slug === item.slug ||
                                            currentService.id === item.id;

                                        return (
                                            <Link
                                                key={item.id}
                                                href={`/services/${item.slug}`}
                                                className={`group flex items-center justify-between px-4 py-3 rounded-xl font-poppins text-sm sm:text-[15px] font-semibold transition-all duration-200 ${isActive
                                                    ? "bg-[#eaf1fc] text-[#225cc0] shadow-sm font-bold border-l-4 border-[#225cc0]"
                                                    : "text-[#4b5563] hover:bg-slate-50 hover:text-[#225cc0]"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className={`transition-colors ${isActive
                                                            ? "text-[#225cc0]"
                                                            : "text-[#6b7280] group-hover:text-[#225cc0]"
                                                            }`}
                                                    >
                                                        {getServiceIcon(item.icon)}
                                                    </span>
                                                    <span>{item.name}</span>
                                                </div>
                                                <FaChevronRight
                                                    className={`w-3 h-3 transition-transform duration-200 ${isActive
                                                        ? "text-[#225cc0] translate-x-0.5"
                                                        : "text-slate-300 group-hover:text-[#225cc0] group-hover:translate-x-0.5"
                                                        }`}
                                                />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* 2. Need */}
                        {helpCard && (
                            <NeedHelpCard data={helpCard} />
                        )}

                    </aside>

                    {/* ================= RIGHT */}
                    <main className="lg:col-span-8 order-1 lg:order-2 w-full flex flex-col gap-5">

                        {/* 1. Hero */}
                        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-slate-100">
                            <Image
                                src={currentService.image}
                                alt={currentService.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 880px"
                                className="object-cover object-center"
                            />
                        </div>

                        {/* 2. Main */}
                        <div className="flex flex-col items-start pt-1">
                            <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#111827] tracking-tight">
                                {currentService.title}
                            </h1>
                            {/* Short decorative */}
                            <div className="flex items-center gap-1.5 mt-2.5">
                                <span className="w-10 h-1 bg-[#225cc0] rounded-full" />
                                <span className="w-3 h-1 bg-[#225cc0]/60 rounded-full" />
                            </div>
                        </div>

                        {/* 3. Description Paragraphs */}
                        {currentService.paragraphs && currentService.paragraphs.length > 0 ? (
                            <div className="flex flex-col gap-3 font-roboto text-sm sm:text-[17px] text-[#4b5563] leading-relaxed">
                                {currentService.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                            </div>
                        ) : (
                            <p className="font-roboto text-sm sm:text-[15px] text-[#4b5563] leading-relaxed">
                                {currentService.description}
                            </p>
                        )}

                        {/* 4. What's */}
                        {currentService.whatsIncluded && (
                            <div className="pt-2">
                                <h2 className="font-poppins font-bold text-xl sm:text-2xl text-[#111827] tracking-tight mb-4">
                                    {currentService.whatsIncluded.title}
                                </h2>

                                {/* 2-Column Checklist */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                    {currentService.whatsIncluded.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5">
                                            <FaCheckCircle className="w-6 h-6 text-[#225cc0] shrink-0" />
                                            <span className="font-roboto text-sm sm:text-[16.5px] font-roboto text-[#374151]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 5. Sub */}
                        {currentService.subImages && currentService.subImages.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-3">
                                {currentService.subImages.map((subImg, idx) => (
                                    <div
                                        key={idx}
                                        className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[220px] rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] bg-slate-100 group"
                                    >
                                        <Image
                                            src={subImg.src}
                                            alt={subImg.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 440px"
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 6. Why */}
                        {currentService.whyChoose && (
                            <div className="pt-3">
                                <h2 className="font-poppins font-bold text-xl sm:text-2xl text-[#111827] tracking-tight mb-2">
                                    {currentService.whyChoose.title}
                                </h2>
                                <p className="font-roboto text-sm sm:text-[17px] text-[#4b5563] leading-relaxed mb-4">
                                    {currentService.whyChoose.description}
                                </p>

                                {/* Checklist Reasons */}
                                <div className="flex flex-col gap-2.5">
                                    {currentService.whyChoose.reasons.map((reason, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5">
                                            <FaCheckCircle className="w-6 h-6 text-[#225cc0] shrink-0" />
                                            <span className="font-roboto text-sm sm:text-[16.5px] text-[#374151]">
                                                {reason}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </main>
                </div>
            </div>
        </section>
    );
}
