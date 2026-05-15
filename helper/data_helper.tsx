import Icon_Helper from "./icon_helper";
import ImgHelper from "./img_helper";
import { Course, CourseSlug, PageType } from "./types";

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
    description:
      "A holistic journey to wellness — mind, body, and soul.",
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
    title: "POSH Act ",
    duration: "2 Months",
    price: 7500,
    discount: 15,
    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },
    badge: "Empowering",
    emoji: <Icon_Helper.hero.shield />,
    description:
      "Every woman deserves to feel safe and empowered.",
    longDesc:
      "This is more than a training program — it's a movement...",
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
    description:
      "Turn your vision into a scalable business reality.",
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
    title: "Feedback Counselling Cource",
    duration: " 2 Months",
    price: 9500,
    discount: 15,
    get earlyPrice() {
      return Math.round(this.price * 0.85);
    },
    badge: "Trending",
    emoji: <Icon_Helper.hero.chatbox />,
    description:
      "Transform how you communicate and give feedback.",
    longDesc:
      "This program helps you become a master communicator...",
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
    description:
      "Build stronger, healthier family relationships.",
    longDesc:
      "Understand family systems and create positive change...",
    image: <ImgHelper.courses.Family />,
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
};

export const courseList = Object.values(courses);
export const courseSlugs = Object.keys(courses) as CourseSlug[];

export const navLinks: { label: string; page: PageType }[] = [
  { label: "Home", page: "home" },
  { label: "Courses", page: "courses" },
  { label: "Approach", page: "approach" },
  { label: "Stories", page: "testimonials" },
  { label: "Gallery", page: "gallery" },
];