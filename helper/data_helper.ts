// data.ts
import { Course, CourseSlug, PageType } from "./types";

export const courses: Record<string, Course> = {
  "hr-ai": {
    id: "hr-ai",
    title: "HR Training with AI",
    duration: "3 Months",
    price: 18500,
    earlyPrice: 15725,
    badge: "New Batch",
    emoji: "🤖",
    description:
      "The future of HR is intelligent, data-driven, and automated. This course puts you ahead of the curve.",
    longDesc:
      "The HR landscape is being rapidly reshaped by Artificial Intelligence. This comprehensive 3-month program equips HR professionals and aspiring practitioners with the tools, knowledge, and confidence to leverage AI in every aspect of human resource management — from talent acquisition to performance analytics, compliance automation to organizational strategy.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    modules: [
      "Foundations of Modern HR",
      "AI-Powered Talent Acquisition",
      "Employee Data Analytics",
      "Compliance & Labour Law",
      "AI Performance Management",
      "Future of Work & Capstone Project",
    ],
    outcomes: [
      "Confidently implement AI tools in your HR workflow",
      "Build a data-driven HR strategy from scratch",
      "Earn an industry-recognized AI-HR certificate",
      "Cut hiring time by up to 60% with automation",
      "Lead your company's digital HR transformation",
      "Join a network of 800+ certified HR professionals",
    ],
  },

  health: {
    id: "health",
    title: "Life & Health Coaching",
    duration: "2 Months",
    price: 14500,
    earlyPrice: 12325,
    badge: "Top Rated",
    emoji: "💚",
    description:
      "A holistic journey to wellness — mind, body, and soul. Transform your habits, transform your life.",
    longDesc:
      "This course is more than a certification — it's a complete life reset. Grounded in the latest research in positive psychology, behavioral nutrition, and mind-body medicine, our Life & Health Coaching program helps you build sustainable wellness habits that last a lifetime.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    modules: [
      "Foundations of Wellness Coaching",
      "Nutrition & Lifestyle Science",
      "Mental Health & Mindfulness",
      "Habit Architecture",
      "Certified Coaching Practice",
    ],
    outcomes: [
      "Build a sustainable personal wellness routine",
      "Become a certified life & health coach",
      "Help clients achieve transformative results",
      "Develop deep emotional resilience",
    ],
  },

  safety: {
    id: "safety",
    title: "Women's Safety Training",
    duration: "6 Weeks",
    price: 7500,
    earlyPrice: 6375,
    badge: "Empowering",
    emoji: "🛡️",
    description:
      "Because every woman deserves to feel safe, empowered, and equipped with the knowledge to protect herself.",
    longDesc:
      "This is more than a training program — it's a movement. In an increasingly complex world, women deserve the knowledge, skills, and confidence to navigate it safely. Our Women's Safety Training covers everything from physical self-defense to digital privacy, from understanding legal rights to building emotional resilience after trauma.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    modules: [
      "Awareness & Risk Assessment",
      "Physical Self-Defense Basics",
      "Legal Rights & Reporting",
      "Digital Safety & Online Protection",
      "Emotional Resilience & Recovery",
    ],
    outcomes: [
      "Recognize and respond to threats confidently",
      "Know your full legal rights in India",
      "Protect yourself and your loved ones online",
      "Build lasting emotional resilience",
    ],
  },

  business: {
    id: "business",
    title: "Business & Vision Challenge",
    duration: "2 Months",
    price: 21000,
    earlyPrice: 17850,
    badge: "New",
    emoji: "📈",
    description:
      "Turn your vision into a scalable business reality. Built for entrepreneurs, executives, and ambitious professionals.",
    longDesc:
      "Most businesses fail not from lack of effort, but lack of vision. The Business & Vision Challenge is a high-intensity, results-driven program that helps you clarify your purpose, build a compelling business strategy, and develop the leadership mindset to execute it.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    modules: [
      "Vision Architecture",
      "Business Growth Frameworks",
      "Sales, Marketing & Brand",
      "Finance for Entrepreneurs",
      "Leadership & Executive Presence",
      "The Vision Challenge Pitch",
    ],
    outcomes: [
      "A clear, compelling business growth plan",
      "The mindset and tools of a top business leader",
      "A network of like-minded business owners",
      "Pitch-ready business strategy with mentor feedback",
    ],
  },

  feedback: {
    id: "feedback",
    title: "Feedback Counselling Tool",
    duration: "6 Weeks",
    price: 9500,
    earlyPrice: 8075,
    badge: "Trending",
    emoji: "💬",
    description:
      "Transform how you communicate. Give better feedback, receive it gracefully, and build a culture of growth.",
    longDesc:
      "In the workplace and in life, the ability to give and receive feedback is one of the most underrated skills. This program uses the latest frameworks in organizational psychology and communication science to help you become a masterful communicator.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    modules: [
      "The Psychology of Feedback",
      "Feedback Frameworks (SBI, COIN, GROW)",
      "Active Listening Mastery",
      "Difficult Conversations",
      "Building a Feedback Culture",
    ],
    outcomes: [
      "Deliver feedback that actually drives change",
      "Navigate difficult conversations with confidence",
      "Build teams that thrive on open communication",
      "Become a certified feedback counsellor",
    ],
  },

  family: {
    id: "family",
    title: "Family Counselling",
    duration: "2 Months",
    price: 13500,
    earlyPrice: 11475,
    badge: "Popular",
    emoji: "🏡",
    description:
      "Because the strongest foundation you can build is a healthy family. Heal old wounds, create new patterns.",
    longDesc:
      "Family is our most fundamental unit — and yet it's where most of our deepest wounds form. This compassionate, evidence-based program helps individuals and practitioners understand family systems, resolve generational patterns, improve communication, and create environments where every family member can thrive.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    modules: [
      "Family Systems Theory",
      "Attachment & Relationship Styles",
      "Communication & Conflict Resolution",
      "Parenting in the Modern World",
      "Counselling Skills & Ethics",
    ],
    outcomes: [
      "Understand and break unhealthy family patterns",
      "Communicate with empathy and clarity",
      "Become a certified family counsellor",
      "Create lasting positive change in your family",
    ],
  },
};

export const courseList = Object.values(courses);

// Navigation links
export const navLinks: { label: string; page: PageType }[] = [
  { label: "Home", page: "home" },
  { label: "Courses", page: "courses" },
  { label: "Approach", page: "approach" },
  { label: "Stories", page: "testimonials" },
  { label: "Gallery", page: "gallery" },
];

export const courseSlugs: CourseSlug[] = [
  "hr-ai",
  "health",
  "safety",
  "business",
  "feedback",
  "family",
];
