import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import { site } from "@/data";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static
export async function generateStaticParams() {
  return site.services.items.map((item) => ({
    slug: item.slug || item.id,
  }));
}

// Dynamic SEO
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = site.services.items.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!service) {
    return {
      title: "Service Not Found - PetCare",
    };
  }

  return {
    title: `${service.title} - PetCare Services`,
    description: service.description,
  };
}

async function ServiceDetailContent({ params }: ServiceDetailPageProps) {
  const { slug } = await params;

  // Find service
  const service = site.services.items.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Breadcrumb title={service.title} subTitle="Services" />
      <ServiceDetailSection
        service={service}
        sidebar={site.services.sidebar}
        helpCard={site.services.helpCard}
      />
    </main>
  );
}

export default function ServiceDetailsPage(props: ServiceDetailPageProps) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white">
          <Breadcrumb title="Loading Service..." subTitle="Services" />
          <div className="max-w-[1400px] mx-auto px-4 py-16 text-center text-slate-400">
            Loading service details...
          </div>
        </main>
      }
    >
      <ServiceDetailContent {...props} />
    </Suspense>
  );
}
