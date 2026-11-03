"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  CalendarAppointmentIcon,
  ChevronDownIcon,
  MenuToggleIcon,
} from "@/components/icons";
import { site, NavbarData } from "@/data";

interface NavbarProps {
  data?: NavbarData;
}

function NavbarContent({ data = site.navbar }: NavbarProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Monitor scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-3  xl:px-10 pt-4 sm:pt-5 pointer-events-none transition-all duration-300">
      {/* Outer Pill */}
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto mx-auto w-full max-w-[1320px] bg-white transition-all duration-300 ${mobileMenuOpen ? "rounded-[28px]" : "rounded-full"
          } ${isScrolled
            ? "shadow-[0_16px_40px_rgba(34,92,192,0.18)] border border-slate-100/90 py-2 sm:py-2.5 px-4 "
            : "shadow-[0_8px_32px_rgba(20,50,110,0.12)] border border-white/60 py-2 sm:py-2.5 px-4 "
          }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* LEFT: Brand Logo */}
          <Link
            href={data.brand.href || "/"}
            className="flex items-center group select-none shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#225cc0] rounded-full"
          >
            <Image
              src={data.brand.logo || "/logo/logo.webp"}
              alt={data.brand.alt || data.brand.name || "PetCare"}
              width={200}
              height={52}
              priority
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* CENTER: Desktop */}
          <div className="hidden lg:flex items-center gap-4 ">
            {data.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(`${link.href}/`);

              const hasChildren = link.children && link.children.length > 0;

              return (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => hasChildren && setServicesOpen(true)}
                  onMouseLeave={() => hasChildren && setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-poppins text-[15px] xl:text-[15.5px] transition-all duration-150 select-none whitespace-nowrap active:bg-blue-100 active:scale-95 ${isActive
                      ? "text-[#1b62cc] font-semibold"
                      : "text-[#374151] hover:text-[#1b62cc] hover:bg-slate-50 font-medium"
                      }`}
                  >
                    <span>{link.label}</span>

                    {/* Chevron for */}
                    {hasChildren && (
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#1b62cc]" : "text-slate-400 group-hover:text-[#1b62cc]"
                          }`}
                      />
                    )}

                    {/* Active blue */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-2 right-2 h-[3px] bg-[#1b62cc] rounded-full transition-all duration-300" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56 transition-all duration-200 ${servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                    >
                      <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.14)] border border-slate-100 p-2 overflow-hidden flex flex-col gap-1">
                        {link.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setServicesOpen(false);
                            }}
                            className="px-3.5 py-2 rounded-xl text-sm font-poppins font-medium text-slate-700 hover:text-[#1b62cc] hover:bg-blue-50/70 active:bg-blue-200 active:text-[#154696] active:scale-[0.98] transition-all duration-150"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* CTA Button: */}
            <Link
              href={data.cta.href}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-7 py-2 sm:py-2.5 lg:py-3 rounded-full bg-[#fbc52e] hover:bg-[#f5b81a] active:bg-[#e0a609] active:scale-[0.96] text-[#0f1418] font-poppins font-medium text-xs sm:text-[13.5px] lg:text-[14.5px] shadow-[0_4px_16px_rgba(251,197,46,0.45)] hover:shadow-[0_6px_22px_rgba(251,197,46,0.6)] active:shadow-inner transition-all duration-150 select-none cursor-pointer shrink-0"
            >
              <CalendarAppointmentIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f1418] stroke-[2.2] shrink-0" />
              <span className="whitespace-nowrap">{data.cta.label}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:text-[#1b62cc] hover:bg-slate-100 active:bg-blue-100 active:scale-95 transition-all duration-150 focus:outline-none cursor-pointer"
            >
              <MenuToggleIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU ACCORDION */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-2 border-t border-slate-100 mt-2.5 flex flex-col gap-1 max-h-[calc(100vh-120px)] overflow-y-auto">
            {data.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(`${link.href}/`);

              const hasChildren = link.children && link.children.length > 0;

              return (
                <div key={link.id} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (!hasChildren) setMobileMenuOpen(false);
                      }}
                      className={`py-2 px-3 rounded-xl font-poppins text-sm font-semibold transition-all duration-150 flex-1 active:scale-[0.98] ${isActive
                        ? "bg-blue-50 text-[#1b62cc] active:bg-blue-100"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#1b62cc] active:bg-blue-100 active:text-[#1b62cc]"
                        }`}
                    >
                      {link.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className="p-2 text-slate-500 hover:text-[#1b62cc] active:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {hasChildren && servicesOpen && (
                    <div className="pl-4 pr-2 py-1.5 flex flex-col gap-1 border-l-2 border-blue-200 ml-4 my-1">
                      {link.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                          className="py-1.5 px-2.5 rounded-lg text-xs font-poppins font-medium text-slate-600 hover:text-[#1b62cc] hover:bg-blue-50/50 active:bg-blue-200 active:text-[#1b62cc] transition-all duration-150"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile menu */}
            <div className="pt-2 sm:hidden border-t border-slate-100/80 mt-1">
              <Link
                href={data.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#fbc52e] hover:bg-[#f5b81a] active:bg-[#e0a609] active:scale-[0.98] text-[#0f1418] font-poppins font-medium text-sm shadow-sm transition-all duration-150"
              >
                <CalendarAppointmentIcon className="w-4 h-4 text-[#0f1418] stroke-[2.2]" />
                <span>{data.cta.label}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default function Navbar(props: NavbarProps) {
  return (
    <Suspense fallback={null}>
      <NavbarContent {...props} />
    </Suspense>
  );
}
