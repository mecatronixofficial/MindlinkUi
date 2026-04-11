// contexts/NavigationContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Page = "home" | "courses" | "approach" | "testimonials" | "gallery" | "contact";

interface NavigationContextType {
  activePage: Page;
  navigateTo: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<Page>("home");

  const navigateTo = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider value={{ activePage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}