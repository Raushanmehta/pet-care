"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaPaw,
  FaClock,
} from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineDocumentText,
  HiOutlineCalendar,
} from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { site, AppointmentData } from "@/data";

interface AppointmentSectionProps {
  data?: AppointmentData;
  className?: string;
}

export default function AppointmentSection({
  data = site.appointment,
  className = "",
}: AppointmentSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    petType: "",
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
        date: "",
        time: "",
        petType: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      aria-label="Book an Appointment"
      className={`relative w-full overflow-hidden bg-white text-[#111827] py-10 lg:py-16 select-none ${className}`}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ================= LEFT */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            {/* Background Organic */}
            <div className="absolute -inset-4 sm:-inset-8 bg-[#eef6ff] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] pointer-events-none -z-10" />

            {/* Doodles from */}
            <div className="absolute top-10 left-4 sm:left-6 text-[#225cc0] pointer-events-none">
              {/* Hand-drawn heart */}
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-12">
                <path d="M20 32 C12 24 4 18 4 11 C4 6 8 3 13 3 C16 3 19 5 20 8 C21 5 24 3 27 3 C32 3 36 6 36 11 C36 18 28 24 20 32 Z" />
              </svg>
            </div>

            {/* Top-Right 3 */}
            <div className="absolute top-6 right-16 sm:right-24 text-[#225cc0] pointer-events-none">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="18" x2="2" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="10" y1="12" x2="7" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="17" y1="10" x2="15" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Dashed trail */}
            <div className="absolute bottom-32 -left-6 text-[#225cc0]/70 pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                <path d="M 0 35 C 25 35, 35 15, 20 0" />
              </svg>
            </div>

            {/* Decorative Blue */}
            <div className="absolute top-28 right-4 pointer-events-none opacity-20">
              <FaPaw className="w-16 h-16 text-[#225cc0] rotate-12" />
            </div>

            {/* Right Dashed */}
            <div className="absolute bottom-20 right-0 text-[#225cc0]/80 pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 28 C14 22 8 17 8 12 C8 8 11 6 15 6 C17 6 19 8 20 10 C21 8 23 6 25 6 C29 6 32 8 32 12 C32 17 26 22 20 28 Z" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* Realistic Golden */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-[3.6/4.5] flex items-end justify-center">
              <Image
                src={data.image}
                alt="Golden Retriever Dog and Cute Cat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-contain object-bottom drop-shadow-md"
              />
            </div>

          </div>

          {/* ================= RIGHT */}
          <div className="lg:col-span-7 w-full bg-white rounded-[28px] sm:rounded-[34px] border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-9 md:p-11 flex flex-col justify-between">

            {/* Header: Circular */}
            <div className="flex items-start gap-4 mb-6">


              <div className="flex flex-col">
                <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                  {data.header.title.main}{" "}
                  <span className="text-[#225cc0] font-semibold">
                    {data.header.title.highlight}
                  </span>
                </h2>
                <p className="font-roboto text-xs sm:text-[13.5px] text-[#6b7280] leading-relaxed mt-1">
                  {data.header.subtitle}
                </p>
              </div>
            </div>

            {submitted && (
              <div className="mb-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-poppins text-xs sm:text-sm">
                {data.form.successMessage}
              </div>
            )}

            {/* Appointment Form Grid */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Row 1: */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <HiOutlineUser className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder={data.form.labels.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <HiOutlineMail className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder={data.form.labels.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <HiOutlinePhone className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder={data.form.labels.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Select Service Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <MdOutlinePets className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-11 pr-8 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">{data.form.labels.service}</option>
                      {data.form.services.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
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
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <HiOutlineCalendar className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    placeholder={data.form.labels.date}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 4: */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Time Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <FaClock className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-11 pr-8 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">{data.form.labels.time}</option>
                      {data.form.times.map((t, idx) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 pointer-events-none text-slate-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Pet Type Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                    Pet Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <FaPaw className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      required
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full pl-11 pr-8 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">{data.form.labels.petType}</option>
                      {data.form.petTypes.map((pt, idx) => (
                        <option key={idx} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 pointer-events-none text-slate-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-medium text-xs sm:text-sm text-[#374151]">
                  Additional Message (Optional)
                </label>
                <div className="relative flex items-start">
                  <HiOutlineDocumentText className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder={data.form.labels.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:border-[#225cc0] focus:ring-2 focus:ring-[#225cc0]/15 font-roboto text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-8 rounded-full bg-[#225cc0] hover:bg-[#1b4b9e] active:scale-[0.99] text-white font-poppins font-semibold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(34,92,192,0.28)] hover:shadow-[0_10px_28px_rgba(34,92,192,0.38)] transition-all duration-200"
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
    </section>
  );
}

