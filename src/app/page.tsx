import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { AboutSection } from "@/components/site/about-section";
import { SpecialsSection } from "@/components/site/specials-section";
import { MenuSection } from "@/components/site/menu-section";
import { ReservationSection } from "@/components/site/reservation-section";
import { TeamSection } from "@/components/site/team-section";
import { GallerySection } from "@/components/site/gallery-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SpecialsSection />
        <MenuSection />
        <ReservationSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
