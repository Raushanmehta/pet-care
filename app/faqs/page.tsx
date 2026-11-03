import Breadcrumb from "@/components/common/Breadcrumb";
import FaqsSection from "@/sections/FaqsSection";
import { site } from "@/data";

export default function FAQsPage() {
  return (
    <main>
      <Breadcrumb pageKey="faqs" />
      <FaqsSection data={site.faqs} />
    </main>
  );
}
