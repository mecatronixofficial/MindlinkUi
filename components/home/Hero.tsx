"use client";

import Icon_Helper from "@/helper/icon_helper";
import { icons } from "@react-icons/all-files";
import { useState, useEffect } from "react";

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

export default function Hero({ onNavigate }: HeroProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "Transform Your Future Today";

  const Icon = Icon_Helper.hero.cap;

  const corePrograms = [
    {
      icon: Icon_Helper.hero.robot,
      title: "HR Training with AI",
      description: "Future-ready skills for modern workplace",
      color: "from-purple-500 to-pink-500",
      subIcon: Icon_Helper.hero.target,
    },
    {
      icon: Icon_Helper.hero.heart,
      title: "Life Coaching",
      description: "Holistic wellness for mind and body",
      color: "from-green-500 to-emerald-500",
      subIcon: Icon_Helper.hero.smile,
    },
    {
      icon: Icon_Helper.hero.shield,
      title: "POSH Act",
      description: "Know your rights, stay protected",
      color: "from-blue-500 to-cyan-500",
      subIcon: Icon_Helper.hero.lightning,
    },
    {
      icon: Icon_Helper.arrow.tradeup,
      title: "Business & Vision",
      description: "Growth mindset & entrepreneurial skills",
      color: "from-orange-500 to-red-500",
      subIcon: Icon_Helper.hero.goal,
    },
    {
      icon: Icon_Helper.hero.chatbox,
      title: "Feedback Counselling",
      description: "Master communication skills",
      color: "from-indigo-500 to-purple-500",
      subIcon: Icon_Helper.hero.stars,
    },
    {
      icon: Icon_Helper.hero.family,
      title: "Family Counselling",
      description: "Build stronger bonds at home",
      color: "from-rose-500 to-pink-500",
      subIcon: Icon_Helper.hero.heart,
    },
  ];

  const stats = [
    { value: "3,200+", label: "Graduates", icon: "👨‍🎓" },
    { value: "4.9★", label: "Avg Rating", icon: "⭐" },
    { value: "94%", label: "Completion", icon: "📊" },
    { value: "6", label: "Courses", icon: "📚" },
  ];

  const testimonials = [
    {
      text: "Life-changing experience! The coaching transformed my career.",
      author: "Priya Sharma",
      role: "HR Manager",
      Icon: Icon_Helper.testimonial.star,
    },
    {
      text: "Best decision I ever made. The safety course gave me confidence.",
      author: "Neha Gupta",
      role: "Entrepreneur",
      Icon: Icon_Helper.testimonial.star,
    },
    {
      text: "Exceptional faculty and practical learning approach.",
      author: "Rahul Verma",
      role: "Business Owner",
      Icon: Icon_Helper.testimonial.star,
    },
  ];

  const users = ["P", "B", "S", "D"];

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d42b2b] via-[#a81f1f] to-[#6b0f0f] flex items-center relative overflow-hidden pt-[68px]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-white/5 to-transparent rounded-full -top-[250px] -right-[250px] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-l from-white/5 to-transparent rounded-full -bottom-[150px] -left-[150px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs px-4 py-2 rounded-full tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              ✦ Empowering Lives Since 2020
            </div>

            {/* Main Heading */}
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
              Rise. Learn.
              <br />
              <span className="bg-gradient-to-r from-[#ffaaaa] via-white to-[#ffcccc] bg-clip-text text-transparent">
                Empower.
              </span>{" "}
              Protect.
            </h1>

            {/* Typing Effect */}
            <div className="text-white/90 text-lg sm:text-xl font-medium">
              <span className="border-r-2 border-white pr-2">{typedText}</span>
              <span className="animate-blink">|</span>
            </div>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
              MindLink is a premier institute offering transformative courses in
              HR & AI, Life Coaching, Poch Act , Business Growth, Feedback
              Counselling, and Family Counselling — because every person
              deserves to thrive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate("courses")}
                className="group relative px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d42b2b] to-[#ff6a6a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2 text-[#d42b2b] group-hover:text-white transition-colors duration-300">
                  Explore Courses
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
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

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {users.map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br from-red-500 to-orange-400 border-2 border-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="text-white/70 text-sm">
                <span className="font-bold text-white">
                  10,000+ happy learners
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="space-y-6 animate-fade-right">
            {/* Programs Grid */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/200 text-xs tracking-wider uppercase font-bold">
                    Our Programs
                  </p>
                  <h3 className="text-white text-xl font-bold">
                    6 Core Courses
                  </h3>
                </div>
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                  <Icon size={24} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {corePrograms.map((item, idx) => {
                  const Icon = item.icon;
                  const SubIcon = item.subIcon;

                  return (
                    <div
                      key={idx}
                      className="group relative bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-all duration-300">
                        <SubIcon className="text-white text-lg" />
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="text-white text-lg" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate">
                            {item.title}
                          </p>
                          <p className="text-white/50 text-xs truncate">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/20">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-white text-xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => {
                  const StarIcon = testimonials[currentTestimonial].Icon;

                  return (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-md bg-yellow-400/10 flex items-center justify-center"
                    >
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  );
                })}
              </div>

              <p className="text-white/90 text-sm italic mb-3">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-white/50 text-xs">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                <div className="flex gap-1">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentTestimonial === idx
                          ? "bg-white w-4"
                          : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}