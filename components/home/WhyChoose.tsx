// components/WhyChoose.tsx
"use client";

import Icon_Helper from "@/helper/icon_helper";
import { useState, useEffect, useRef } from "react";

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Icon_Helper.hero.certificate,
      title: "Certified Excellence",
      desc: "All programs are nationally and internationally accredited, ensuring your credential carries weight in any industry.",
      color: "from-yellow-500 to-orange-500",
      stats: "98% Recognition Rate",
      gradient: "from-[#FEF08A] to-[#FED7AA]",
    },
    {
      icon: Icon_Helper.hero.Instructors,
      title: "Expert Instructors",
      desc: "Learn from practitioners with 10–25 years of real-world experience — not just academics with theory.",
      color: "from-blue-500 to-cyan-500",
      stats: "25+ Years Avg Experience",
      gradient: "from-[#BFDBFE] to-[#CFFAFE]",
    },
    {
      icon: Icon_Helper.hero.camera,
      title: "Flexible Learning",
      desc: "Live online, offline, and hybrid options so you can learn at your own pace without disrupting your life.",
      color: "from-green-500 to-emerald-500",
      stats: "24/7 Access Available",
      gradient: "from-[#D1FAE5] to-[#A7F3D0]",
    },
    {
      icon: Icon_Helper.hero.handshake,
      title: "Community First",
      desc: "Join a thriving alumni network of 3,200+ professionals who actively support, collaborate, and refer one another.",
      color: "from-purple-500 to-pink-500",
      stats: "3,200+ Active Members",
      gradient: "from-[#E9D5FF] to-[#FBCFE8]",
    },
    {
      icon: Icon_Helper.hero.chatbox,
      title: "Measurable Outcomes",
      desc: "Every course is built around measurable goals. You'll track your growth from day one to graduation.",
      color: "from-red-500 to-rose-500",
      stats: "100% Goal Tracking",
      gradient: "from-[#FEE2E2] to-[#FECDD3]",
    },
    {
      icon: Icon_Helper.hero.infinity,
      title: "Lifetime Access",
      desc: "Get lifelong access to course materials, updated content, and our resource library — even after you graduate.",
      color: "from-indigo-500 to-violet-500",
      stats: "Never Expires",
      gradient: "from-[#E0E7FF] to-[#EDE9FE]",
    },
  ];

  const statsData = [
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: Icon_Helper.hero.smile,
      trend: "+12%",
    },
    {
      value: "15+",
      label: "Industry Partners",
      icon: Icon_Helper.hero.handshake,
      trend: "+5",
    },
    {
      value: "50+",
      label: "Expert Faculty",
      icon: Icon_Helper.hero.family,
      trend: "+8",
    },
    {
      value: "4.9★",
      label: "Google Rating",
      icon: Icon_Helper.hero.stars,
      trend: "Excellent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[#d42b2b] text-xs tracking-wider uppercase font-bold mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-[#d42b2b] to-transparent"></span>
            Why Choose Us
            <span className="w-8 h-0.5 bg-gradient-to-l from-[#d42b2b] to-transparent"></span>
          </div>

          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#d42b2b] to-[#ff6a6a] bg-clip-text text-transparent">
              Real Transformation
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#d42b2b] to-[#ff6a6a] mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Everything we do is designed to create lasting change — not just
            certificates.
          </p>
        </div>

        {/* Features Grid with Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`group relative transition-all duration-500 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="relative bg-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon Section */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-md`}
                    >
                      <Icon className="w-8 h-8 text-[#d42b2b]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl mb-3 group-hover:text-[#d42b2b] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Stat Badge */}
                  <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#d42b2b]/10 group-hover:to-[#ff6a6a]/10 transition-all duration-300">
                    <span className="text-green-500">✓</span>
                    {item.stats}
                  </div>

                  {/* Animated Bottom Bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform origin-left transition-transform duration-500 ${
                      activeIndex === idx ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative bg-gradient-to-br from-[#d42b2b] via-[#b81a1a] to-[#8b1010] rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-12">
              {statsData.map((stat, idx) => {
                const StatIcon = stat.icon;

                return (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="flex justify-center mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <StatIcon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#ffcccc] text-xs uppercase tracking-wider mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[#ffaaaa] text-xs font-semibold">
                      {stat.trend}
                    </div>

                    {/* Hover Line */}
                    <div className="w-0 h-0.5 bg-white/50 mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="relative border-t border-white/20 px-8 py-6 text-center">
              <p className="text-white/80 text-lg mb-3">
                Join thousands of successful graduates who transformed their
                careers
              </p>
              <button className="bg-white text-[#d42b2b] px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Start Your Journey →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;