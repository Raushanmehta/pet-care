import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/sections/ContactSection";
import { site } from "@/data";

export default function ContactPage() {
  return (
    <main>
      <Breadcrumb pageKey="contact" />
      <ContactSection data={site.contact} />
    </main>
  );
}
