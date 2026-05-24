// helper/types.ts

import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type CourseSlug =
  | "hr-ai"
  | "health"
  | "safety"
  | "business"
  | "feedback"
  | "family"
  | "lawOfAttraction"
  | "searchIntelligence"
  | "personalityDevelopment"
  | "problemSolving";

export type PageType =
  | "home"
  | "courses"
  | "approach"
  | "testimonials"
  | "gallery"
  | "contact"
  | "about";

export type Course = {
  id: CourseSlug;

  title: string;
  duration: string;

  price: number;
  discount: number;
  earlyPrice: number;

  badge: string;

  emoji: ReactNode;

  description: string;
  longDesc: string;

  // FIX HERE
  image: StaticImageData | string;

  modules: string[];
  outcomes: string[];

  featured?: boolean;

  level: string;
};
