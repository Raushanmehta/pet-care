import React from "react";
import { site, TeamData } from "@/data";
import { FaPaw } from "react-icons/fa";
import TeamCard from "@/components/cards/TeamCard";
import { SparkleTrioDoodle } from "@/components/icons";

interface TeamSectionProps {
  data?: TeamData;
  className?: string;
}

export default function TeamSection({ data = site.team, className = "" }: TeamSectionProps) {
  const team = data;

  return (
    <section className={`relative w-full bg-white py-10 lg:py-16 overflow-hidden select-none ${className}`}>
      {/* Decorative Paw */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <FaPaw className="absolute top-8 right-8 sm:right-16 w-14 h-14 sm:w-16 sm:h-16 text-[#225cc0] -rotate-12" />
        <FaPaw className="absolute top-12 left-8 sm:left-16 w-12 h-12 text-[#225cc0] rotate-12" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-12 h-[2.5px] bg-[#225cc0]/60 rounded-full" />
            <span className="font-poppins font-semibold text-sm sm:text-base tracking-[0.16em] uppercase text-[#225cc0]">
              {team.tag}
            </span>
            <span className="w-12 h-[2.5px] bg-[#225cc0]/60 rounded-full" />
          </div>

          {/* Headline matching */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-[#111827] leading-[1.12] mb-3">
            {team.headline.main}{" "}
            <span className="relative inline-flex items-center text-[#225cc0] font-serif">
              <span>{team.headline.highlight}</span>
              <FaPaw className="w-6 h-6 sm:w-7 sm:h-7 text-[#225cc0] ml-2.5 inline-block -rotate-12" />
            </span>
          </h2>

          {/* Subheadline description */}
          <p className="font-roboto text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl">
            {team.subheadline}
          </p>
        </div>

        {/* Team Cards */}
        <div className="relative">
          {/* Top Left */}
          <div className="absolute -top-7 -left-3 sm:-left-6 pointer-events-none">
            <SparkleTrioDoodle className="w-16 h-16 text-[#225cc0]" />
          </div>

          {/* Top Right */}
          <div className="absolute -top-7 -right-3 sm:-right-6 pointer-events-none scale-x-[-1]">
            <SparkleTrioDoodle className="w-16 h-16 text-[#225cc0]" />
          </div>

          {/* 3 Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {team.members.map((member, idx) => (
              <TeamCard
                key={member.id}
                member={member}
                priority={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
