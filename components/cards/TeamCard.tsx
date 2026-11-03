import React from "react";
import Image from "next/image";

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
}

interface TeamCardProps {
    member: TeamMember;
    className?: string;
    priority?: boolean;
}

export default function TeamCard({
    member,
    className = "",
    priority = false,
}: TeamCardProps) {
    return (
        <div
            className={`group relative rounded-[26px] overflow-hidden bg-slate-100 shadow-md hover:shadow-xl transition-all duration-300 aspect-[1/1.12] ${className}`}
        >
            {/* Photo */}
            <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority={priority}
            />

            {/* Dark Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Member Info */}
            <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col items-start text-white">
                <h3 className="text-xl sm:text-[28px] font-semibold font-poppins leading-tight tracking-wide drop-shadow-md">
                    {member.name}
                </h3>
                <p className="text-[12px] sm:text-sm font-semibold tracking-[0.16em] uppercase text-white/90 font-poppins mt-1">
                    {member.role}
                </p>
            </div>
        </div>
    );
}

