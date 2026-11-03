"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {

  PhoneCallIcon,
  MailEnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  ChevronUpIcon,
  SlantedTransition,
  PawTrailDoodle,
} from "@/components/icons";
import { site, FooterData } from "@/data";
import { FaLocationDot } from "react-icons/fa6";
import { FaPaw } from "react-icons/fa";

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data = site.footer }: FooterProps) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FacebookIcon className="w-5 h-5" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5" />;
      case "youtube":
        return <YoutubeIcon className="w-5 h-5" />;
      case "linkedin":
        return <LinkedinIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-transparent select-none">
      {/* Top angled */}
      <div className="w-full overflow-hidden leading-none -mb-[1px]">
        <SlantedTransition type="footer-top" fill="#1e64cb" className="w-full h-8 sm:h-12 md:h-14 lg:h-16 block" />
      </div>

      {/* Main Footer */}
      <div className="relative w-full bg-gradient-to-r from-[#175ec8] via-[#1b62cc] to-[#1e6cd8] text-white pt-2 sm:pt-4 pb-6">
        {/* Decorative low-opacity */}
        <div className="absolute top-4 left-3 sm:left-6 pointer-events-none opacity-10">
          <FaPaw className="w-[110px] h-[110px] text-white -rotate-12" />
        </div>

        <div className="absolute top-6 right-8 sm:right-16 pointer-events-none opacity-10">
          <FaPaw className="w-[85px] h-[85px] text-white rotate-12" />
        </div>

        <div className="absolute bottom-16 right-6 sm:right-12 pointer-events-none opacity-10">
          <FaPaw className="w-[80px] h-[80px] text-white -rotate-45" />
        </div>

        {/* Decorative dashed */}
        <div className="absolute bottom-10 left-4 sm:left-8 pointer-events-none opacity-20">
          <PawTrailDoodle />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Main 3-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-start pb-10 sm:pb-12 gap-8 lg:gap-10">

            {/* COLUMN 1: */}
            <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
              <Link href={data.brand.href || "/"} className="group inline-block mb-4">
                <Image
                  src={data.brand.logo || "/logo/logo-white.webp"}
                  alt={data.brand.alt || data.brand.name || "PetCare"}
                  width={200}
                  height={52}
                  priority
                  className="h-10 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="font-roboto text-[15px] sm:text-[15px] text-white/90 leading-relaxed max-w-[360px] mb-6">
                {data.description}
              </p>

              {/* Social Media */}
              <div className="flex items-center gap-2.5">
                {data.socialLinks.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1b62cc] active:bg-[#fbc52e] active:text-[#0f1418] flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95 shadow-sm"
                  >
                    {renderSocialIcon(social.platform)}
                  </Link>
                ))}
              </div>
            </div>

            {/* COLUMN 2: */}
            <div className="lg:col-span-3 flex flex-col items-start">
              <h3 className="font-poppins font-semibold text-[20px] text-white tracking-tight mb-4 flex items-center gap-2 ">
                <span>{data.quickLinks?.title || "Quick Links"}</span>
              </h3>
              <ul className="flex flex-col gap-2.5 font-roboto text-[14px] sm:text-[15px] text-white/85">
                {data.quickLinks?.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors leading-snug inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6">
              <h3 className="font-poppins font-semibold text-[20px] text-white tracking-tight mb-1">
                {data.getInTouch?.title || "Get In Touch"}
              </h3>

              {/* 1. Location Block */}
              <div className="flex items-start gap-3.5 max-w-[300px]">
                <div className="w-11 h-11 rounded-full bg-white text-[#1b5cc0] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <FaLocationDot className="w-5 h-5 text-[#1b5cc0]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-poppins font-medium text-[16px] text-white leading-snug">
                    {data.location.title}
                  </h4>
                  <p className="font-roboto text-[15px] sm:text-[14px] text-white/85 leading-relaxed mt-0.5 space-y-0.5">
                    {data.location.addressLines}
                  </p>
                </div>
              </div>

              {/* 2. Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white text-[#1b5cc0] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <PhoneCallIcon className="w-5 h-5 text-[#1b5cc0]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-poppins font-medium text-[16px] text-white leading-snug">
                    {data.contact.phone.title}
                  </h4>
                  <div className="flex flex-col font-roboto text-[15px] sm:text-[14px] text-white/85 mt-0.5 space-y-0.5">
                    {data.contact.phone.numbers.map((item) => (
                      <a
                        key={item.display}
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors leading-snug"
                      >
                        {item.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white text-[#1b5cc0] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MailEnvelopeIcon className="w-5 h-5 text-[#1b5cc0]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-poppins font-medium text-[16px] text-white leading-snug">
                    {data.contact.email.title}
                  </h4>
                  <div className="flex flex-col font-roboto text-[15px] sm:text-[14px] text-white/85 mt-0.5 space-y-0.5">
                    {data.contact.email.addresses.map((item) => (
                      <a
                        key={item.display}
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors leading-snug"
                      >
                        {item.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Full-width Bottom */}
          <div className="w-full h-[1px] bg-white/20 mb-4" />

          {/* Bottom Row: */}
          <div className="relative flex items-center justify-center pt-2">
            <p className="font-roboto text-[12px] sm:text-[15px] text-white/80 tracking-wide text-center">
              {data.copyright}
            </p>

            {/* Scroll To */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="absolute right-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-slate-100 active:bg-blue-100 text-[#1b5cc0] flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
            >
              <ChevronUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1b5cc0]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
