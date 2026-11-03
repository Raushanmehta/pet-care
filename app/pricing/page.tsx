import Breadcrumb from "@/components/common/Breadcrumb";
import PricingSection from "@/sections/PricingSection";
import { site } from "@/data";

export default function PricingPage() {
    return (
        <main>
            <Breadcrumb pageKey="pricing" />
            <PricingSection data={site.pricing} />
        </main>
    );
}
