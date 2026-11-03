"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    FaPaw,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaExternalLinkAlt,
} from "react-icons/fa";
import {
    HiOutlineUser,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineDocumentText,
} from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { site, ContactData } from "@/data";

interface ContactSectionProps {
    data?: ContactData;
    className?: string;
}

export default function ContactSection({
    data = site.contact,
    className = "",
}: ContactSectionProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        }, 4000);
    };

    const renderSocialIcon = (id: string) => {
        switch (id) {
            case "facebook":
                return <FaFacebookF className="w-4 h-4" />;
            case "instagram":
                return <FaInstagram className="w-4 h-4" />;
            case "youtube":
                return <FaYoutube className="w-4 h-4" />;
            case "linkedin":
                return <FaLinkedinIn className="w-4 h-4" />;
            default:
                return <FaPaw className="w-4 h-4" />;
        }
    };

    const labels = data.form.labels || {
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email Address",
        emailPlaceholder: "Your email address",
        phone: "Phone Number",
        phonePlaceholder: "Your phone number",
        service: "Interested Service",
        serviceDefaultOption: "Select a service",
        message: "Your Message",
        messagePlaceholder: "Write your message",
    };

    return (
        <section
            aria-label="Contact Us Section"
            className={`relative w-full bg-white text-[#111827] py-10 lg:py-16 select-none ${className}`}
        >
            {/* Decorative Top-Corner */}
            <div className="absolute top-10 left-8 sm:left-24 pointer-events-none opacity-10">
                <FaPaw className="w-16 h-16 sm:w-20 sm:h-20 text-[#225cc0] rotate-12" />
            </div>
            <div className="absolute top-10 right-8 sm:right-28 pointer-events-none opacity-10">
                <FaPaw className="w-16 h-16 sm:w-20 sm:h-20 text-[#225cc0] -rotate-12" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

                {/* ================= SECTION */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-8">
                    {/* Centered Tagline */}
                    <div className="inline-flex items-center gap-3 mb-2.5">
                        <span className="w-10 sm:w-12 h-[2.5px] bg-[#225cc0]/70 rounded-full" />
                        <span className="font-poppins font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase text-[#225cc0]">
                            {data.tag}
                        </span>
                        <span className="w-10 sm:w-12 h-[2.5px] bg-[#225cc0]/70 rounded-full" />
                    </div>

                    {/* Main Headline */}
                    <div className="relative inline-flex items-center justify-center">
                        {/* Left 3-dash */}
                        <div className="absolute -left-9 sm:-left-12 -top-1 sm:-top-2 text-[#225cc0] pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <line x1="5" y1="16" x2="2" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="9" y1="11" x2="7" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="16" y1="9" x2="14" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#111827] tracking-tight leading-[1.14]">
                            {data.headline.main}{" "}
                            <span className="text-[#225cc0] font-bold">{data.headline.highlight}</span>
                        </h2>

                        {/* Right 3-dash */}
                        <div className="absolute -right-9 sm:-right-12 -top-1 sm:-top-2 text-[#225cc0] pointer-events-none scale-x-[-1]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <line x1="5" y1="16" x2="2" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="9" y1="11" x2="7" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="16" y1="9" x2="14" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Subtitle description */}
                    <p className="font-roboto text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl mt-3">
                        {data.description}
                    </p>
                </div>

                {/* ================= CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6 sm:mb-8">

                    {/* LEFT: Contact */}
                    <div className="lg:col-span-6 relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#225cc0] text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-[0_12px_36px_rgba(34,92,192,0.22)]">
                        {/* Background Decorative */}
                        <div className="absolute top-6 right-10 pointer-events-none opacity-15">
                            <FaPaw className="w-24 h-24 text-white rotate-12" />
                        </div>

                        <div className="relative z-10 flex flex-col">
                            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2.5">
                                {data.infoCard.title}
                            </h3>
                            <p className="font-roboto text-xs sm:text-[13.5px] text-white/85 leading-relaxed max-w-md mb-8">
                                {data.infoCard.description}
                            </p>

                            {/* Contact Details List */}
                            <div className="flex flex-col gap-5 sm:gap-6">

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white text-[#225cc0] flex items-center justify-center shrink-0 shadow-sm">
                                        <FaMapMarkerAlt className="w-6 h-6 text-[#225cc0]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-poppins font-semibold text-sm sm:text-[18px] text-white leading-snug">
                                            {data.infoCard.details.location.title}
                                        </h4>
                                        <p className="font-roboto text-xs sm:text-[15px] text-white/80 leading-relaxed mt-0.5">
                                            {data.infoCard.details.location.address}
                                        </p>
                                    </div>
                                </div>

                                {/* Call Us */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white text-[#225cc0] flex items-center justify-center shrink-0 shadow-sm">
                                        <FaPhoneAlt className="w-6 h-6 text-[#225cc0]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-poppins font-semibold text-sm sm:text-[18px] text-white leading-snug">
                                            {data.infoCard.details.phone.title}
                                        </h4>
                                        <a
                                            href={`tel:${data.infoCard.details.phone.number}`}
                                            className="font-roboto text-xs sm:text-[15px] text-white/80 hover:text-white transition-colors mt-0.5"
                                        >
                                            {data.infoCard.details.phone.number}
                                        </a>
                                    </div>
                                </div>

                                {/* Email Us */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white text-[#225cc0] flex items-center justify-center shrink-0 shadow-sm">
                                        <FaEnvelope className="w-6 h-6 text-[#225cc0]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-poppins font-semibold text-sm sm:text-[18px] text-white leading-snug">
                                            {data.infoCard.details.email.title}
                                        </h4>
                                        <a
                                            href={`mailto:${data.infoCard.details.email.address}`}
                                            className="font-roboto text-xs sm:text-[15px] text-white/80 hover:text-white transition-colors mt-0.5"
                                        >
                                            {data.infoCard.details.email.address}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Bottom Row: */}
                        <div className="relative z-10 pt-8 mt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">

                            {/* Follow Us */}
                            <div className="flex flex-col gap-2.5">
                                <span className="font-poppins font-medium text-xs sm:text-[15px] text-white">
                                    {data.infoCard.followUsText || "Follow Us"}
                                </span>
                                <div className="flex items-center gap-2">
                                    {data.infoCard.socials.map((social) => (
                                        <a
                                            key={social.id}
                                            href={social.href}
                                            aria-label={social.name}
                                            className="w-10 h-10 rounded-full bg-white text-[#225cc0] hover:bg-white/90 active:scale-95 flex items-center justify-center transition-all duration-200 shadow-sm"
                                        >
                                            {renderSocialIcon(social.id)}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Realistic Dog */}
                            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-52 sm:h-60 md:h-68 shrink-0 pointer-events-none self-end -mr-2 sm:-mr-4 -mb-2 -mt-28 sm:-mt-36 md:-mt-48 z-20">
                                <Image
                                    src={data.infoCard.image}
                                    alt="Pet Dog and Cat"
                                    fill
                                    className="object-contain object-bottom-right"
                                />
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: Send */}
                    <div className="lg:col-span-6 relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                        <div>
                            {/* Form Headline */}
                            <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-[#111827] tracking-tight mb-2">
                                {data.form.title.main}{" "}
                                <span className="text-[#225cc0]">{data.form.title.highlight}</span>
                            </h3>
                            <p className="font-roboto text-xs sm:text-[15.5px] text-[#6b7280] leading-relaxed mb-6">
                                {data.form.subtitle}
                            </p>

                            {submitted && (
                                <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-poppins text-xs sm:text-sm">
                                    {data.form.successMessage || "Thank you! Your message has been sent successfully. We will get back to you shortly."}
                                </div>
                            )}

                            {/* Form Input Fields */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                {/* Row 1: */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Name Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                                            {labels.name} <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <HiOutlineUser className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                                            <input
                                                type="text"
                                                required
                                                placeholder={labels.namePlaceholder}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                                            {labels.email} <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <HiOutlineMail className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                                            <input
                                                type="email"
                                                required
                                                placeholder={labels.emailPlaceholder}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Phone Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                                            {labels.phone}
                                        </label>
                                        <div className="relative flex items-center">
                                            <HiOutlinePhone className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                                            <input
                                                type="tel"
                                                placeholder={labels.phonePlaceholder}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Dropdown */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                                            {labels.service}
                                        </label>
                                        <div className="relative flex items-center">
                                            <MdOutlinePets className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full pl-11 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] transition-all duration-200 appearance-none cursor-pointer"
                                            >
                                                <option value="">{labels.serviceDefaultOption}</option>
                                                {data.form.services.map((service, idx) => (
                                                    <option key={idx} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                            {/* Select Dropdown Caret */}
                                            <div className="absolute right-3.5 pointer-events-none text-slate-400">
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                                        {labels.message} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-start">
                                        <HiOutlineDocumentText className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder={labels.messagePlaceholder}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200 resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#225cc0] hover:bg-[#1b4b9e] active:scale-[0.98] text-white font-poppins font-semibold text-sm sm:text-[15px] shadow-[0_6px_20px_rgba(34,92,192,0.28)] hover:shadow-[0_8px_26px_rgba(34,92,192,0.38)] transition-all duration-200"
                                    >
                                        <span>{data.form.submitText}</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="translate-x-0.5">
                                            <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

                {/* ================= FULL-WIDTH */}
                <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-slate-100">

                    {/* Floating Location */}
                    <div className="absolute top-5 left-5 z-20 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-slate-100 shadow-[0_6px_24px_rgba(0,0,0,0.1)] flex flex-col">
                        <h4 className="font-poppins font-bold text-sm sm:text-[15px] text-[#111827]">
                            {data.map.locationName}
                        </h4>
                        <span className="font-roboto text-xs text-[#6b7280] mt-0.5">
                            {data.map.address}
                        </span>
                        <a
                            href={data.map.openInMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-poppins font-semibold text-xs text-[#225cc0] hover:text-[#1b4b9e] mt-2 transition-colors"
                        >
                            <FaExternalLinkAlt className="w-2.5 h-2.5" />
                            <span>{data.map.openInMapsText || "Open in Maps"}</span>
                        </a>
                    </div>

                    {/* Google Maps Iframe */}
                    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px]">
                        <iframe
                            src={data.map.embedUrl}
                            title="PetCare Google Map Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale-[15%] contrast-[1.05]"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
