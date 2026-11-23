"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CookiePreferences {
  necessary: true; // Siempre activas (técnicas necesarias LSSI-CE)
  analytics: boolean; // Google Analytics / medición
  externalMedia: boolean; // Google Maps interactivo / YouTube embeds
  updatedAt: string;
}

interface CookieConsentContextValue {
  preferences: CookiePreferences | null;
  hasResponded: boolean;
  isBannerOpen: boolean;
  isPreferencesModalOpen: boolean;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
  saveCustomPreferences: (custom: { analytics: boolean; externalMedia: boolean }) => void;
  enableExternalMediaOnly: () => void;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
}

const STORAGE_KEY = "fisiodietetic_aepd_cookie_consent_v1";

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasResponded, setHasResponded] = useState<boolean>(true); // Evita flash SSR inicial
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CookiePreferences;
        if (parsed && typeof parsed.analytics === "boolean" && typeof parsed.externalMedia === "boolean") {
          setPreferences({
            necessary: true,
            analytics: parsed.analytics,
            externalMedia: parsed.externalMedia,
            updatedAt: parsed.updatedAt || new Date().toISOString(),
          });
          setHasResponded(true);
          setIsBannerOpen(false);
          return;
        }
      }
    } catch {
      // Ignorar errores de localStorage bloqueado
    }
    setPreferences(null);
    setHasResponded(false);
    setIsBannerOpen(true);
  }, []);

  const persistPreferences = useCallback((newPrefs: CookiePreferences) => {
    setPreferences(newPrefs);
    setHasResponded(true);
    setIsBannerOpen(false);
    setIsPreferencesModalOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch {
      // Fallback en memoria si el navegador bloquea storage
    }
  }, []);

  const acceptAllCookies = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: true,
      externalMedia: true,
      updatedAt: new Date().toISOString(),
    });
  }, [persistPreferences]);

  const rejectAllCookies = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: false,
      externalMedia: false,
      updatedAt: new Date().toISOString(),
    });
  }, [persistPreferences]);

  const saveCustomPreferences = useCallback(
    (custom: { analytics: boolean; externalMedia: boolean }) => {
      persistPreferences({
        necessary: true,
        analytics: custom.analytics,
        externalMedia: custom.externalMedia,
        updatedAt: new Date().toISOString(),
      });
    },
    [persistPreferences]
  );

  const enableExternalMediaOnly = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: preferences?.analytics ?? false,
      externalMedia: true,
      updatedAt: new Date().toISOString(),
    });
  }, [persistPreferences, preferences]);

  const openPreferencesModal = useCallback(() => {
    setIsPreferencesModalOpen(true);
  }, []);

  const closePreferencesModal = useCallback(() => {
    setIsPreferencesModalOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasResponded,
        isBannerOpen,
        isPreferencesModalOpen,
        acceptAllCookies,
        rejectAllCookies,
        saveCustomPreferences,
        enableExternalMediaOnly,
        openPreferencesModal,
        closePreferencesModal,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent debe utilizarse dentro de CookieConsentProvider");
  }
  return ctx;
}
