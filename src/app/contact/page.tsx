import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";
import { ReservationForm } from "@/components/ReservationForm";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pizzata. Reserve your table, make inquiries, or contact us for special events. We're at your service to provide an exceptional Italian dining experience.",
  openGraph: {
    title: "Contact Pizzata - We're At Your Service",
    description: "Get in touch with Pizzata. Reserve your table, make inquiries, or contact us for special events. We're at your service to provide an exceptional Italian dining experience.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0c0a10]">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <ReservationForm />
      <FooterSection />
    </main>
  );
}

