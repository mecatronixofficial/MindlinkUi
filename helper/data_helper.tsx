import Icon_Helper from "./icon_helper";
import ImgHelper from "./img_helper";
import { Course, CourseSlug, PageType } from "./types";
import { ReactNode } from "react";

export const courses: Record<CourseSlug, Course> = {
  "hr-ai": {
    id: "hr-ai",
    title: "HR Training with AI",
    duration: "3 Months",
    price: 18500,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * (1 - this.discount / 100));
    },

    badge: "New Batch",

    emoji: <Icon_Helper.hero.robot />,

    description:
      "The future of HR is intelligent, data-driven, and automated. This course puts you ahead of the curve.",

    longDesc:
      "The HR landscape is being rapidly reshaped by Artificial Intelligence...",

    image: ImgHelper.courses.hr,

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

    featured: true,

    level: "Intermediate",
  },

  health: {
    id: "health",
    title: "Life Coaching",
    duration: "45 Days",
    price: 14500,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },

    badge: "Top Rated",

    emoji: <Icon_Helper.hero.heart />,

    description: "A holistic journey to wellness — mind, body, and soul.",

    longDesc:
      "This course is more than a certification — it's a complete life reset...",

    image: ImgHelper.courses.life,

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

    level: "Beginner",
  },

  safety: {
    id: "safety",
    title: "POSH Act",
    duration: "2 Months",
    price: 7500,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },

    badge: "Empowering",

    emoji: <Icon_Helper.hero.shield />,

    description: "Every woman deserves to feel safe and empowered.",

    longDesc: "This is more than a training program — it's a movement...",

    image: ImgHelper.courses.Posh,

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
      "Protect yourself online",
      "Build lasting emotional resilience",
    ],

    level: "Beginner",
  },

  business: {
    id: "business",
    title: "Business & Vision Challenge",
    duration: "2 Months",
    price: 21000,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },

    badge: "New",

    emoji: <Icon_Helper.hero.target />,

    description: "Turn your vision into a scalable business reality.",

    longDesc:
      "Most businesses fail not from lack of effort, but lack of vision...",

    image: ImgHelper.courses.Business,

    modules: [
      "Vision Architecture",
      "Business Growth Frameworks",
      "Sales, Marketing & Brand",
      "Finance for Entrepreneurs",
      "Leadership & Executive Presence",
      "The Vision Challenge Pitch",
    ],

    outcomes: [
      "A clear business growth plan",
      "Leadership mindset",
      "Network with entrepreneurs",
      "Pitch-ready strategy",
    ],

    level: "Advanced",
  },

  feedback: {
    id: "feedback",
    title: "Feedback Counselling Course",
    duration: "2 Months",
    price: 9500,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },

    badge: "Trending",

    emoji: <Icon_Helper.hero.chatbox />,

    description: "Transform how you communicate and give feedback.",

    longDesc: "This program helps you become a master communicator...",

    image: ImgHelper.courses.feedback,

    modules: [
      "Psychology of Feedback",
      "Frameworks (SBI, COIN, GROW)",
      "Active Listening",
      "Difficult Conversations",
      "Feedback Culture",
    ],

    outcomes: [
      "Deliver impactful feedback",
      "Handle tough conversations",
      "Build strong teams",
      "Become certified",
    ],

    level: "Intermediate",
  },

  family: {
    id: "family",
    title: "Family Counselling",
    duration: "Still Problem Solving",
    price: 13500,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },

    badge: "Popular",

    emoji: <Icon_Helper.hero.family />,

    description: "Build stronger, healthier family relationships.",

    longDesc: "Understand family systems and create positive change...",

    image: ImgHelper.courses.Family,

    modules: [
      "Family Systems Theory",
      "Attachment Styles",
      "Communication",
      "Parenting",
      "Counselling Ethics",
    ],

    outcomes: [
      "Break unhealthy patterns",
      "Improve communication",
      "Become a counsellor",
      "Create positive change",
    ],

    level: "Beginner",
  },

  lawOfAttraction: {
    id: "lawOfAttraction",
    title: "Law of Attraction Mastery",
    duration: "30 Days",
    price: 12500,
    discount: 20,

    get earlyPrice() {
      return Math.round(this.price * 0.8);
    },

    badge: "Most Popular",

    emoji: <Icon_Helper.hero.flex />,

    description:
      "Unlock the power of positive thinking, manifestation, and purposeful living.",

    longDesc:
      "This course helps you reprogram your mindset, align your energy with your goals, and build powerful manifestation habits for success, relationships, health, and abundance.",

    image: ImgHelper.courses.attraction,

    modules: [
      "Introduction to the Law of Attraction",
      "Mindset Rewiring & Positive Thinking",
      "Visualization & Manifestation Techniques",
      "Energy Alignment & Gratitude Practice",
      "Daily Habits for Abundance & Success",
    ],

    outcomes: [
      "Develop a success-oriented mindset",
      "Practice powerful manifestation techniques",
      "Improve emotional balance and confidence",
      "Create a life aligned with your goals",
    ],

    level: "Beginner",
  },

  searchIntelligence: {
    id: "searchIntelligence",
    title: "Search & Intelligence Course",
    duration: "40 Days",
    price: 16500,
    discount: 18,

    get earlyPrice() {
      return Math.round(this.price * 0.82);
    },

    badge: "Trending",

    emoji: <Icon_Helper.hero.cup />,

    description:
      "Master smart research, analytical thinking, and modern intelligence strategies.",

    longDesc:
      "Learn how to search effectively, gather valuable information, analyze patterns, and make intelligent decisions using critical thinking and research frameworks.",

    image: ImgHelper.courses.search,

    modules: [
      "Advanced Search Techniques",
      "Research & Information Analysis",
      "Critical Thinking Skills",
      "Digital Intelligence & Investigation",
      "Decision-Making Frameworks",
    ],

    outcomes: [
      "Improve analytical and research abilities",
      "Think critically and solve complex problems",
      "Make data-driven decisions confidently",
      "Develop modern intelligence skills",
    ],

    level: "Intermediate",
  },

  personalityDevelopment: {
    id: "personalityDevelopment",
    title: "Personality Development Course",
    duration: "35 Days",
    price: 13500,
    discount: 15,

    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },

    badge: "Best Seller",

    emoji: <Icon_Helper.hero.Instructors />,

    description:
      "Transform your confidence, communication, and personal presence.",

    longDesc:
      "This course focuses on building self-confidence, communication mastery, leadership qualities, emotional intelligence, and a charismatic personality for personal and professional success.",

    image: ImgHelper.courses.development,

    modules: [
      "Self-Confidence Building",
      "Communication & Public Speaking",
      "Body Language & Personal Presence",
      "Leadership & Emotional Intelligence",
      "Professional & Social Etiquette",
    ],

    outcomes: [
      "Improve confidence and self-esteem",
      "Communicate effectively in all situations",
      "Build leadership and interpersonal skills",
      "Develop a powerful and positive personality",
    ],

    level: "Beginner",
  },

  problemSolving: {
    id: "problemSolving",
    title: "Problem Solving Masterclass",
    duration: "28 Days",
    price: 11500,
    discount: 12,

    get earlyPrice() {
      return Math.round(this.price * 0.88);
    },

    badge: "Skill Booster",

    emoji: <Icon_Helper.hero.shield />,

    description:
      "Develop logical thinking and practical strategies to solve real-world challenges.",

    longDesc:
      "Learn structured problem-solving frameworks, creative thinking methods, and decision-making techniques to handle personal, academic, and professional challenges effectively.",

    image: ImgHelper.courses.problemsolving,

    modules: [
      "Introduction to Problem Solving",
      "Logical & Critical Thinking",
      "Creative Thinking Techniques",
      "Decision-Making Strategies",
      "Real-World Problem Solving Practice",
    ],

    outcomes: [
      "Think clearly under pressure",
      "Solve problems with structured methods",
      "Improve decision-making confidence",
      "Develop innovative and analytical thinking",
    ],

    level: "Beginner",
  },
};

export const courseList = Object.values(courses);

export const courseSlugs = Object.keys(courses) as CourseSlug[];

export const navLinks: {
  label: string;
  page: PageType;
}[] = [
  { label: "Home", page: "home" },
  { label: "Courses", page: "courses" },
  { label: "Approach", page: "approach" },
  { label: "Stories", page: "testimonials" },
  { label: "Gallery", page: "gallery" },
];
