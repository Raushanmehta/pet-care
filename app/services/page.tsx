import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceSection from "@/sections/home/ServiceSection";
import TeamSection from "@/sections/home/TeamSection";
import { site } from "@/data";

export default function ServicesPage() {
    return (
        <main>
            <Breadcrumb pageKey="services" />
            <ServiceSection data={site.services} hideTopSlant={true} />
            <TeamSection data={site.team} />
        </main>
    );
}
