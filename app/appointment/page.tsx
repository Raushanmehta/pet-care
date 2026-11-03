import Breadcrumb from "@/components/common/Breadcrumb";
import AppointmentSection from "@/sections/AppointmentSection";
import { site } from "@/data";

export default function AppointmentPage() {
  return (
    <main>
      <Breadcrumb pageKey="appointment" />
      <AppointmentSection data={site.appointment} />
    </main>
  );
}
