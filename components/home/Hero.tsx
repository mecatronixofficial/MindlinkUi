"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import ImgHelper from "@/helper/img_helper";
import Icon_Helper from "@/helper/icon_helper";

type PageType =
  | "home"
  | "courses"
  | "approach"
  | "testimonials"
  | "gallery"
  | "contact";

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

const courseCards = [
  {
    image: ImgHelper.courses.hr,
    title: "HR Training with AI",
    description: "Future-ready skills for modern workplace",
    duration: "3 Months",
    price: "₹18,500",
    badge: "New Batch",
    color: "from-purple-600/80 to-pink-600/80",
    dotClass: "bg-purple-400",
    badgeClass: "bg-purple-500",
    btnClass: "bg-purple-500 hover:bg-purple-400",
  },
  {
    image: ImgHelper.courses.life,
    title: "Life Coaching",
    description: "A holistic journey to wellness — mind, body, and soul.",
    duration: "45 Days",
    price: "₹14,500",
    badge: "Top Rated",
    color: "from-emerald-600/80 to-teal-600/80",
    dotClass: "bg-emerald-400",
    badgeClass: "bg-emerald-500",
    btnClass: "bg-emerald-500 hover:bg-emerald-400",
  },
  {
    image: ImgHelper.courses.Posh,
    title: "POSH Act Training",
    description: "Know your rights. Build safe workplaces.",
    duration: "1 Month",
    price: "₹9,500",
    badge: "Must Do",
    color: "from-blue-600/80 to-cyan-600/80",
    dotClass: "bg-blue-400",
    badgeClass: "bg-blue-500",
    btnClass: "bg-blue-500 hover:bg-blue-400",
  },
  {
    image: ImgHelper.courses.Business,
    title: "Business & Vision",
    description: "Growth mindset & entrepreneurial skills",
    duration: "2 Months",
    price: "₹16,000",
    badge: "Bestseller",
    color: "from-orange-600/80 to-red-600/80",
    dotClass: "bg-orange-400",
    badgeClass: "bg-orange-500",
    btnClass: "bg-orange-500 hover:bg-orange-400",
  },
  {
    image: ImgHelper.courses.feedback,
    title: "Feedback Counselling",
    description: "Master the art of communication",
    duration: "1 Month",
    price: "₹11,000",
    badge: "Popular",
    color: "from-indigo-600/80 to-purple-600/80",
    dotClass: "bg-indigo-400",
    badgeClass: "bg-indigo-500",
    btnClass: "bg-indigo-500 hover:bg-indigo-400",
  },
  {
    image: ImgHelper.courses.Family,
    title: "Family Counselling",
    description: "Build stronger bonds at home",
    duration: "6 Weeks",
    price: "₹12,500",
    badge: "In Demand",
    color: "from-rose-600/80 to-pink-600/80",
    dotClass: "bg-rose-400",
    badgeClass: "bg-rose-500",
    btnClass: "bg-rose-500 hover:bg-rose-400",
  },
  {
    image: ImgHelper.courses.attraction,
    title: "Law of Attraction",
    description: "Transform thoughts into powerful outcomes",
    duration: "3 Weeks",
    price: "₹8,500",
    badge: "Trending",
    color: "from-violet-600/80 to-fuchsia-600/80",
    dotClass: "bg-violet-400",
    badgeClass: "bg-violet-500",
    btnClass: "bg-violet-500 hover:bg-violet-400",
  },
  {
    image: ImgHelper.courses.development,
    title: "Personality Development",
    description: "Enhance confidence & communication",
    duration: "2 Months",
    price: "₹13,000",
    badge: "Hot",
    color: "from-amber-600/80 to-orange-600/80",
    dotClass: "bg-amber-400",
    badgeClass: "bg-amber-500",
    btnClass: "bg-amber-500 hover:bg-amber-400",
  },
  {
    image: ImgHelper.courses.problemsolving,
    title: "Problem Solving",
    description: "Develop critical thinking & solution skills",
    duration: "6 Weeks",
    price: "₹10,500",
    badge: "New",
    color: "from-cyan-600/80 to-blue-600/80",
    dotClass: "bg-cyan-400",
    badgeClass: "bg-cyan-500",
    btnClass: "bg-cyan-500 hover:bg-cyan-400",
  },
  {
    image: ImgHelper.courses.search,
    title: "Search Intelligence",
    description: "Master smart research & information discovery",
    duration: "1 Month",
    price: "₹9,000",
    badge: "Featured",
    color: "from-lime-600/80 to-green-600/80",
    dotClass: "bg-lime-400",
    badgeClass: "bg-lime-500",
    btnClass: "bg-lime-500 hover:bg-lime-400",
  },
];

const stats = [
  { value: "3,200+", label: "Graduates", icon: "👨‍🎓" },
  { value: "4.9★", label: "Avg Rating", icon: "⭐" },
  { value: "94%", label: "Completion", icon: "📊" },
  { value: "10", label: "Courses", icon: "📚" },
];

const users = ["P", "B", "S", "D"];

export default function Hero({ onNavigate }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transform Your Future Today";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 55);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d42b2b] via-[#a81f1f] to-[#6b0f0f] flex items-center relative overflow-hidden pt-[68px]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full -top-72 -right-72 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full -bottom-40 -left-40 animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              top: `${(i * 37 + 5) % 100}%`,
              left: `${(i * 53 + 10) % 100}%`,
              animationDelay: `${(i * 0.4) % 5}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-6 animate-fade-up">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs px-4 py-2 rounded-full tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              ✦ Empowering Lives Since 2020
            </div>

            {/* Heading */}
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
              Rise. Learn.
              <br />
              <span className="bg-gradient-to-r from-[#ffaaaa] via-white to-[#ffcccc] bg-clip-text text-transparent">
                Empower.
              </span>{" "}
              Protect.
            </h1>

            {/* Typing */}
            <div className="text-white/90 text-lg sm:text-xl font-medium h-8">
              <span className="border-r-2 border-white pr-1">{typedText}</span>
            </div>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
              MindLink is a premier institute offering transformative courses in
              HR & AI, Life Coaching, POSH Act, Business Growth, Feedback
              Counselling, and Family Counselling — because every person
              deserves to thrive.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate("courses")}
                className="group relative px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#d42b2b] to-[#ff6a6a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 text-[#d42b2b] group-hover:text-white transition-colors duration-300">
                  Explore Courses
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="px-8 py-3 rounded-xl font-semibold uppercase tracking-wider text-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {users.map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br from-red-500 to-orange-400 border-2 border-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm">
                <span className="font-bold text-white">10,000+</span> happy learners
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/20">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-white text-lg font-bold">{stat.value}</div>
                  <div className="text-white/50 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — SWIPER CARDS ── */}
          <div className="flex flex-col items-center gap-6 animate-fade-right">
            {/* Label */}
            <div className="flex items-center gap-3 self-start">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon_Helper.hero.cap size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">Our Programs</p>
                <h3 className="text-white font-bold text-lg leading-tight">10 Core Courses</h3>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto h-[550px]">
              <Swiper
                effect="cards"
                grabCursor
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                className="w-full h-full rounded-2xl"
              >
                {courseCards.map((card, idx) => (
                  <SwiperSlide key={idx} className="rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-full">
                      {/* Background image */}
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 360px"
                        priority={idx < 2}
                      />

                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.color} mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Badge */}
                      <div
                        className={`absolute top-4 right-4 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${card.badgeClass}`}
                      >
                        {card.badge}
                      </div>

                      {/* Card number */}
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${card.dotClass}`} />
                          <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                            {card.duration}
                          </span>
                        </div>

                        <h4 className="text-white text-xl font-bold leading-tight mb-1">
                          {card.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-snug mb-4">
                          {card.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white/50 text-xs">Starting from</p>
                            <p className="text-white font-bold text-lg">{card.price}</p>
                          </div>
                          <button
                            type="button"
                            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 ${card.btnClass}`}
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Hint text */}
            <p className="text-white/40 text-xs flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Swipe or auto-plays every 2.8s
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
