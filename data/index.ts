import siteData from "@/data/site.json";

// ── Root
export type RawSiteData = typeof siteData;
export type PetcareSchema = typeof siteData.Petcare;
export type PetcareSections = PetcareSchema["sections"];
export type PetcareTemplateComponents = PetcareSchema["templateComponents"];

// Aliases matching
export type ServicesSchema = PetcareSchema;
export type ServicesSections = PetcareSections;
export type ServicesTemplateComponents = PetcareTemplateComponents;

// ── Universal
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly
export type PetcareNavbarData = PetcareSections["navbar"]["variants"]["PetcareNavbar1"];
export type PetcareHeroData = PetcareSections["hero"]["variants"]["PetcareHero1"];
export type PetcareAboutData = PetcareSections["about"]["variants"]["PetcareAbout1"];
export type PetcareServicesData = PetcareSections["services"]["variants"]["PetcareServices1"];
export type PetcareTestimonialsData = PetcareSections["testimonials"]["variants"]["PetcareTestimonials1"];
export type PetcareStatsData = PetcareSections["stats"]["variants"]["PetcareStats1"];
export type PetcareTeamData = PetcareSections["team"]["variants"]["PetcareTeam1"];
export type PetcareFooterData = PetcareSections["footer"]["variants"]["PetcareFooter1"];
export type PetcareWhyChooseUsData = PetcareSections["whyChooseUs"]["variants"]["PetcareWhyChooseUs1"];
export type PetcareGalleryData = PetcareSections["gallery"]["variants"]["PetcareGallery1"];
export type PetcareFaqsData = PetcareSections["faqs"]["variants"]["PetcareFaqs1"];
export type PetcarePricingData = PetcareSections["pricing"]["variants"]["PetcarePricing1"];
export type PetcareContactData = PetcareSections["contact"]["variants"]["PetcareContact1"];
export type PetcareAppointmentData = PetcareSections["appointment"]["variants"]["PetcareAppointment1"];
export type PetcareBreadcrumbData = PetcareSections["breadcrumb"]["variants"]["PetcareBreadcrumb1"];

// ── Inferred
export type NavLinkItem = PetcareNavbarData["navLinks"][0];
export type NavLinkChild = NonNullable<NavLinkItem["children"]>[0];
export type NavbarBrand = PetcareNavbarData["brand"];
export type NavbarCta = PetcareNavbarData["cta"];

export type HeroStatItem = PetcareHeroData["stats"][0];

export type AboutFeatureItem = PetcareAboutData["features"][0];

export type ServiceItem = PetcareServicesData["items"][0];
export type ServiceDetailData = ServiceItem;
export type ServiceSidebarData = PetcareServicesData["sidebar"];
export type ServiceDetailSidebarService = ServiceSidebarData["services"][0];
export type NeedHelpCardData = PetcareServicesData["helpCard"];
export type ServiceDetailHelpCard = NeedHelpCardData;

export type TestimonialItem = PetcareTestimonialsData["items"][0];

export type StatItem = PetcareStatsData["items"][0];

export type TeamMember = PetcareTeamData["members"][0];

export type FooterSocialLink = PetcareFooterData["socialLinks"][0];
export type FooterQuickLink = PetcareFooterData["quickLinks"]["links"][0];

export type WhyChooseUsMissionVision = PetcareWhyChooseUsData["mission"];

export type GalleryItemData = PetcareGalleryData["items"][0];

export type FaqItem = PetcareFaqsData["items"][0];

export type PricingPlanItem = PetcarePricingData["plans"][0];

export type ContactDetailPhone = PetcareContactData["infoCard"]["details"]["phone"];
export type ContactDetailEmail = PetcareContactData["infoCard"]["details"]["email"];

export type BreadcrumbPageItem = PetcareBreadcrumbData["pages"][keyof PetcareBreadcrumbData["pages"]];

// ── Standard
export type NavbarData = PetcareNavbarData;
export type HeroData = PetcareHeroData;
export type AboutData = PetcareAboutData;
export type ServicesData = PetcareServicesData;
export type TestimonialsData = PetcareTestimonialsData;
export type StatsData = PetcareStatsData;
export type TeamData = PetcareTeamData;
export type FooterData = PetcareFooterData;
export type WhyChooseUsData = PetcareWhyChooseUsData;
export type GalleryData = PetcareGalleryData;
export type FaqsData = PetcareFaqsData;
export type PricingData = PetcarePricingData;
export type ContactData = PetcareContactData;
export type AppointmentData = PetcareAppointmentData;
export type BreadcrumbData = PetcareBreadcrumbData;

// ── Default
const sec = siteData.Petcare.sections;

export const site = {
  navbar: sec.navbar.variants.PetcareNavbar1,
  hero: sec.hero.variants.PetcareHero1,
  about: sec.about.variants.PetcareAbout1,
  services: sec.services.variants.PetcareServices1,
  testimonials: sec.testimonials.variants.PetcareTestimonials1,
  stats: sec.stats.variants.PetcareStats1,
  team: sec.team.variants.PetcareTeam1,
  footer: sec.footer.variants.PetcareFooter1,
  whyChooseUs: sec.whyChooseUs.variants.PetcareWhyChooseUs1,
  gallery: sec.gallery.variants.PetcareGallery1,
  faqs: sec.faqs.variants.PetcareFaqs1,
  pricing: sec.pricing.variants.PetcarePricing1,
  contact: sec.contact.variants.PetcareContact1,
  appointment: sec.appointment.variants.PetcareAppointment1,
  breadcrumb: sec.breadcrumb.variants.PetcareBreadcrumb1,

  // Root references
  Petcare: siteData.Petcare,
  templateComponents: siteData.Petcare.templateComponents,
};

export type SiteData = typeof site;
export default siteData;
