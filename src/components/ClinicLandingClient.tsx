"use client";

import React, { useState, useCallback } from "react";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SymptomSelector } from "@/components/SymptomSelector";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { LaserPricingSection } from "@/components/LaserPricingSection";
import { YoutubeVideosSection } from "@/components/YoutubeVideosSection";
import { ReviewsCarouselSection } from "@/components/ReviewsCarouselSection";
import {
  BookingAndLocationsSection,
  type BookingPreset,
} from "@/components/BookingAndLocationsSection";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieBanner } from "@/components/CookieBanner";
import { LegalModal, type LegalDocType } from "@/components/LegalModal";
import type { SpecialtyItem, LaserTariffItem } from "@/data/clinic-data";

export function ClinicLandingClient() {
  const [activeModalSpecialty, setActiveModalSpecialty] = useState<SpecialtyItem | null>(null);
  const [bookingPreset, setBookingPreset] = useState<BookingPreset | null>({
    clinic: "jesus",
  });
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  const scrollToBookingForm = useCallback((preset?: BookingPreset) => {
    if (preset) {
      setBookingPreset({
        clinic: preset.clinic ?? "jesus",
        treatment: preset.treatment,
        laserZone: preset.laserZone,
      });
    }
    const el = document.getElementById("reservar-cita");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleBookSpecialty = useCallback(
    (spec: SpecialtyItem) => {
      scrollToBookingForm({
        clinic: "jesus",
        treatment: spec.title,
        laserZone: "",
      });
    },
    [scrollToBookingForm]
  );

  const handleBookLaserZone = useCallback(
    (zone: LaserTariffItem) => {
      scrollToBookingForm({
        clinic: "jesus",
        treatment: "Depilación Láser Diodo (Sesiones Sueltas)",
        laserZone: `${zone.zone} (${zone.price}€/sesión)`,
      });
    },
    [scrollToBookingForm]
  );

  return (
    <CookieConsentProvider>
      <div className="min-h-screen flex flex-col bg-background text-ink selection:bg-primary selection:text-white">
        <Header onSelectBooking={(preset) => scrollToBookingForm(preset)} />

        <main id="main-content" className="flex-1">
          <HeroSection onSelectBooking={(preset) => scrollToBookingForm(preset)} />

          <SymptomSelector
            onOpenSpecialtyModal={(spec) => setActiveModalSpecialty(spec)}
            onSelectBooking={(preset) => scrollToBookingForm(preset)}
          />

          <WhyChooseUsSection />

          <SpecialtiesSection
            activeModalSpecialty={activeModalSpecialty}
            onOpenModal={(spec) => setActiveModalSpecialty(spec)}
            onCloseModal={() => setActiveModalSpecialty(null)}
            onBookSpecialty={handleBookSpecialty}
          />

          <LaserPricingSection onBookLaserZone={handleBookLaserZone} />

          <YoutubeVideosSection />

          <ReviewsCarouselSection />

          <BookingAndLocationsSection
            bookingPreset={bookingPreset}
            onOpenPrivacyPolicy={() => setActiveLegalDoc("privacidad")}
          />
        </main>

        <Footer onOpenLegalDoc={(doc) => setActiveLegalDoc(doc)} />

        <MobileStickyBar onOpenBooking={() => scrollToBookingForm({ clinic: "jesus" })} />

        <CookieBanner onOpenLegalDoc={(doc) => setActiveLegalDoc(doc)} />

        <LegalModal activeDoc={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />
      </div>
    </CookieConsentProvider>
  );
}
