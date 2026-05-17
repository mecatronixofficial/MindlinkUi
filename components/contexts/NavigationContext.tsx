"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { PageType } from "@/helper/types";

type NavigationContextType = {
  activePage: PageType;
  navigateTo: (page: PageType) => void;
};

const NavigationContext =
  createContext<NavigationContextType | undefined>(
    undefined
  );

export function NavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activePage, setActivePage] =
    useState<PageType>("home");

  const navigateTo = (page: PageType) => {
    setActivePage(page);
  };

  return (
    <NavigationContext.Provider
      value={{
        activePage,
        navigateTo,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(
    NavigationContext
  );

  if (!context) {
    throw new Error(
      "useNavigation must be used within NavigationProvider"
    );
  }

  return context;
}