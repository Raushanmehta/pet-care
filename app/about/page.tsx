import Breadcrumb from "@/components/common/Breadcrumb";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import { site } from "@/data";

export default function AboutPage() {
    return (
        <main>
            <Breadcrumb pageKey="about" />
            <AboutSection data={site.about} />
            <WhyChooseUsSection data={site.whyChooseUs} />
            <TestimonialSection data={site.testimonials} />
        </main>
    );
}
