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

export interface Course {
  id: CourseSlug;
  title: string;
  duration: string;
  price: number;
  discount: number;

  readonly earlyPrice: number;

  badge: string;
  emoji: React.ReactNode;

  description: string;
  longDesc: string;
  image: string;

  modules: string[];
  outcomes: string[];

  // future-ready
  featured?: boolean;
  category?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}
