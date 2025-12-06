import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/AboutHero";
import AboutIntroSection from "@/components/AboutIntroSection";
import AboutMetricsSection from "@/components/AboutMetricsSection";
import AboutStickySection from "@/components/AboutStickySection";
import AboutTestimonialSection from "@/components/AboutTestimonialSection";
import AboutReversibleSection from "@/components/AboutReversibleSection";
import ReservationSection from "@/components/ReservationSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pizzata's quest for excellence. Discover our story, our commitment to bold and unique culinary craftsmanship, and our passion for creating unmatched Italian pizza experiences in Nitra.",
  openGraph: {
    title: "About Pizzata - Our Quest to Excellence",
    description: "Learn about Pizzata's quest for excellence. Discover our story, our commitment to bold and unique culinary craftsmanship, and our passion for creating unmatched Italian pizza experiences.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#0c0a10]">
      <div className="relative">
        <Navigation />
        <AboutHero />
      </div>
      <AboutIntroSection />
      <AboutMetricsSection />
      <AboutStickySection />
      <AboutTestimonialSection />
      <AboutReversibleSection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}

