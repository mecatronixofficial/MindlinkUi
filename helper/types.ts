// types.ts (optional but recommended)

export type PageType =
  | "home"
  | "courses"
  | "approach"
  | "testimonials"
  | "gallery"
  | "contact";

export type CourseSlug =
  | "hr-ai"
  | "health"
  | "safety"
  | "business"
  | "feedback"
  | "family";

export type Course = {
  id: string;
  title: string;
  duration: string;
  price: number;
  earlyPrice: number;
  badge: string;
  emoji: string;
  description: string;
  longDesc: string;
  image: string;
  modules: string[];
  outcomes: string[];
};
