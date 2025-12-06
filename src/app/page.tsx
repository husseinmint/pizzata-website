import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import LocationSection from "@/components/LocationSection";

// Lazy load heavy components for better performance
const ImageGallery = dynamic(() => import("@/components/ImageGallery"), {
  loading: () => <div className="h-[400px] bg-[#0c0a10]" />,
  ssr: true,
});

const ExquisiteFlavorsSection = dynamic(() => import("@/components/ExquisiteFlavorsSection"), {
  loading: () => <div className="h-[600px] bg-[#0c0a10]" />,
  ssr: true,
});

const ReservationSection = dynamic(() => import("@/components/ReservationSection"), {
  loading: () => <div className="h-[800px] bg-[#0c0a10]" />,
  ssr: true,
});

const FooterSection = dynamic(() => import("@/components/FooterSection"), {
  loading: () => <div className="h-[400px] bg-[#0c0a10]" />,
  ssr: true,
});

export const metadata: Metadata = {
  title: {
    absolute: "Pizzata - Authentic Neapolitan Pizza | Born in Napoli, Baked in Nitra",
  },
  description: "Welcome to Pizzata - Authentic Italian pizza born in Napoli, baked in Nitra. Experience exceptional flavors with our traditional wood-fired pizzas, fresh ingredients, and warm Italian hospitality.",
  openGraph: {
    title: "Pizzata - Authentic Italian Pizza | Born in Napoli, Baked in Nitra",
    description: "Experience authentic Italian pizza at Pizzata. Born in Napoli, baked in Nitra. Discover our exceptional menu featuring traditional pizzas, fresh salads, and premium beverages.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0a10]">
      <div className="relative">
        <Navigation />
        <Hero />
      </div>
      <ExperienceSection />
      <ImageGallery />
      <LocationSection />
      <ExquisiteFlavorsSection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}

