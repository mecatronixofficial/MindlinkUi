"use client";

import Icon_Helper from "@/helper/icon_helper";
import ImgHelper from "@/helper/img_helper";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const staggerDelays = [
    "delay-[0ms]",
    "delay-[90ms]",
    "delay-[180ms]",
    "delay-[270ms]",
    "delay-[360ms]",
    "delay-[450ms]",
  ];

  const features = [
    {
      icon: Icon_Helper.hero.certificate,
      title: "Certified Excellence",
      desc: "All programs are nationally and internationally accredited, ensuring your credential carries weight in any industry.",
      color: "from-yellow-500 to-orange-500",
      iconBg: "from-yellow-400 to-orange-500",
      stats: "98% Recognition Rate",
      num: "01",
    },
    {
      icon: Icon_Helper.hero.Instructors,
      title: "Expert Instructors",
      desc: "Learn from practitioners with 10–25 years of real-world experience — not just academics with theory.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-400 to-cyan-500",
      stats: "25+ Years Avg Experience",
      num: "02",
    },
    {
      icon: Icon_Helper.hero.camera,
      title: "Flexible Learning",
      desc: "Live online, offline, and hybrid options so you can learn at your own pace without disrupting your life.",
      color: "from-green-500 to-emerald-500",
      iconBg: "from-green-400 to-emerald-500",
      stats: "24/7 Access Available",
      num: "03",
    },
    {
      icon: Icon_Helper.hero.handshake,
      title: "Community First",
      desc: "Join a thriving alumni network of 3,200+ professionals who actively support, collaborate, and refer one another.",
      color: "from-purple-500 to-pink-500",
      iconBg: "from-purple-400 to-pink-500",
      stats: "3,200+ Active Members",
      num: "04",
    },
    {
      icon: Icon_Helper.hero.chatbox,
      title: "Measurable Outcomes",
      desc: "Every course is built around measurable goals. You'll track your growth from day one to graduation.",
      color: "from-red-500 to-rose-500",
      iconBg: "from-red-400 to-rose-500",
      stats: "100% Goal Tracking",
      num: "05",
    },
    {
      icon: Icon_Helper.hero.infinity,
      title: "Lifetime Access",
      desc: "Get lifelong access to course materials, updated content, and our resource library — even after you graduate.",
      color: "from-indigo-500 to-violet-500",
      iconBg: "from-indigo-400 to-violet-500",
      stats: "Never Expires",
      num: "06",
    },
  ];

  const statsData = [
    { value: "98%", label: "Satisfaction Rate", icon: Icon_Helper.hero.smile, trend: "+12% this year" },
    { value: "15+", label: "Industry Partners", icon: Icon_Helper.hero.handshake, trend: "+5 new partners" },
    { value: "50+", label: "Expert Faculty", icon: Icon_Helper.hero.family, trend: "Growing team" },
    { value: "4.9★", label: "Google Rating", icon: Icon_Helper.hero.stars, trend: "Excellent" },
  ];

  const testimonials = [
    {
      text: "Life-changing experience! The coaching transformed my career completely. I never thought I could grow so fast.",
      author: "Priya Sharma",
      role: "HR Manager",
      initials: "PS",
      color: "from-orange-400 to-red-500",
      Icon: Icon_Helper.testimonial.star,
    },
    {
      text: "Best decision I ever made. The safety course gave me confidence and clarity in my professional journey.",
      author: "Neha Gupta",
      role: "Entrepreneur",
      initials: "NG",
      color: "from-purple-400 to-pink-500",
      Icon: Icon_Helper.testimonial.star,
    },
    {
      text: "Exceptional faculty and practical learning approach. MindLink truly delivers on its promises.",
      author: "Rahul Verma",
      role: "Business Owner",
      initials: "RV",
      color: "from-blue-400 to-cyan-500",
      Icon: Icon_Helper.testimonial.star,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const StarSVG = () => (
    <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d42b2b] to-transparent opacity-40" />
        <div className="wc-dot-pattern absolute inset-0 opacity-[0.022]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-red-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ─── HEADER ────────────────────────────────────── */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 bg-[#fdf0f0] border border-[#d42b2b]/25 text-[#d42b2b] text-[11px] px-5 py-2 rounded-full font-bold tracking-[0.15em] uppercase mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d42b2b] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d42b2b]" />
            </span>
            Why Choose Us
          </div>

          <h2 className="font-black text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-5 leading-[1.05] tracking-tight">
            Built for{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#d42b2b] to-[#ff6a6a] bg-clip-text text-transparent">
                Real
              </span>
            </span>{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ff6a6a] to-[#d42b2b] bg-clip-text text-transparent">
                Transformation
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="#d42b2b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mt-6">
            Every decision we make is designed to create lasting change —{" "}
            <span className="font-semibold text-gray-800">not just certificates.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-7">
            {[
              { label: "✓ Nationally Accredited", bg: "bg-green-50 border-green-200 text-green-700" },
              { label: "✓ Empowering Since 2020", bg: "bg-blue-50 border-blue-200 text-blue-700" },
              { label: "✓ 3,200+ Graduates", bg: "bg-purple-50 border-purple-200 text-purple-700" },
            ].map((tag) => (
              <span key={tag.label} className={`border text-xs px-4 py-1.5 rounded-full font-semibold ${tag.bg}`}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* ─── FEATURES GRID ─────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const active = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`transition-all duration-700 ${staggerDelays[idx]} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`relative h-full bg-white rounded-2xl p-7 border-2 overflow-hidden transition-all duration-300 ${
                    active
                      ? "border-[#d42b2b]/25 shadow-2xl shadow-red-100 -translate-y-2"
                      : "border-gray-100 shadow-md"
                  }`}
                >
                  {/* Large faint number */}
                  <div className="absolute top-4 right-5 text-[56px] font-black text-gray-100 leading-none select-none">
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg transition-all duration-300 ${
                      active ? "scale-110 -rotate-6 shadow-xl" : ""
                    }`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                    {active && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.iconBg} rounded-xl blur-lg opacity-40 -z-10`} />
                    )}
                  </div>

                  <h3 className={`font-bold text-lg mb-2.5 transition-colors duration-300 ${active ? "text-[#d42b2b]" : "text-gray-900"}`}>
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{item.stats}</span>
                  </div>

                  {/* Animated bottom bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color} origin-left transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── TESTIMONIALS + AUTHOR CARDS ───────────────── */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">

          {/* Testimonial carousel */}
          <div className="lg:col-span-2">
            <div className="relative h-full bg-gradient-to-br from-[#13111c] via-[#1e1020] to-[#2a0a0a] rounded-3xl p-8 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[360px]">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#d42b2b]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-indigo-600/10 rounded-full blur-2xl" />
              <div className="wc-testimonial-dots absolute inset-0 opacity-5" />

              <div className="relative">
                <p className="text-[#ff8080] text-[10px] font-black tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="w-5 h-px bg-[#ff8080]" />
                  Student Stories
                </p>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => {
                    const StarIcon = testimonials[currentTestimonial].Icon;
                    return <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
                  })}
                </div>

                <div className="text-8xl leading-none font-serif text-[#d42b2b]/25 select-none -mb-3">
                  &ldquo;
                </div>

                <p
                  key={currentTestimonial}
                  className="text-white/85 text-sm italic leading-relaxed animate-fadeInUp"
                >
                  {testimonials[currentTestimonial].text}
                </p>
              </div>

              <div className="relative mt-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center text-white text-sm font-black shadow-lg`}
                  >
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                    <p className="text-white/45 text-xs">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      title={`Go to testimonial ${idx + 1}`}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-1.5 rounded-full transition-all duration-400 ${
                        currentTestimonial === idx ? "w-7 bg-[#d42b2b]" : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Author testimonial cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Card 1 — light */}
            <div className="group relative flex overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-1 min-h-[240px]">
              <div className="absolute left-0 inset-y-0 w-1.5 bg-gradient-to-b from-[#d42b2b] to-[#ff6a6a] rounded-l-2xl" />
              <div className="w-[42%] flex-shrink-0 relative overflow-hidden">
                <Image
                  src={ImgHelper.logo.author1}
                  alt="Priya Sharma"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white" />
              </div>
              <div className="flex-1 bg-white flex flex-col justify-between p-8 pl-5">
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <StarSVG key={i} />)}
                  </div>
                  <div className="text-4xl leading-none font-serif text-[#d42b2b]/20 select-none mb-2">&ldquo;</div>
                  <p className="text-gray-600 text-base italic leading-relaxed">
                    The coaching at Mindlink didn&apos;t just teach me skills — it rewired the way I think about leadership. Within 3 months I was promoted to regional head.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900 text-base">Priya Sharma</p>
                  <p className="text-[#d42b2b] text-sm font-semibold mt-0.5">Regional HR Manager</p>
                  <p className="text-gray-400 text-xs mt-0.5">Certified in Leadership & Coaching</p>
                </div>
              </div>
            </div>

            {/* Card 2 — dark */}
            <div className="group relative flex overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-1 min-h-[240px]">
              <div className="absolute right-0 inset-y-0 w-1.5 bg-gradient-to-b from-[#d42b2b] to-[#ff6a6a] rounded-r-2xl" />
              <div className="flex-1 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex flex-col justify-between p-8 relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#d42b2b]/15 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <StarSVG key={i} />)}
                  </div>
                  <div className="text-4xl leading-none font-serif text-white/15 select-none mb-2">&ldquo;</div>
                  <p className="text-white/80 text-base italic leading-relaxed">
                    I was skeptical at first, but the safety training course at Mindlink completely changed my perspective on workplace well-being. Absolutely worth every moment.
                  </p>
                </div>
                <div className="relative mt-5 pt-4 border-t border-white/10">
                  <p className="font-bold text-white text-base">Neha Gupta</p>
                  <p className="text-[#ff8080] text-sm font-semibold mt-0.5">Founder & Entrepreneur</p>
                  <p className="text-white/35 text-xs mt-0.5">Certified in Safety & Wellness</p>
                </div>
              </div>
              <div className="w-[42%] flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-l from-transparent to-[#16213e] z-10" />
                <Image
                  src={ImgHelper.logo.author2}
                  alt="Neha Gupta"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── STATS BANNER ──────────────────────────────── */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-gradient-to-br from-[#d42b2b] via-[#b81a1a] to-[#7a0d0d] rounded-3xl overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
              <div className="wc-stats-dots absolute inset-0 opacity-[0.08]" />
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-[200px] font-black text-white tracking-tight">98%</span>
              </div>
            </div>

            {/* Stats grid with dividers */}
            <div className="relative grid grid-cols-2 md:grid-cols-4">
              {statsData.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`group flex flex-col items-center justify-center text-center p-10 md:p-12 hover:bg-white/5 transition-colors duration-300 ${
                      idx < 3 ? "border-r border-white/10" : ""
                    } ${idx < 2 ? "border-b border-white/10 md:border-b-0" : ""}`}
                  >
                    <div className="w-13 h-13 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
                      <StatIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-1.5 leading-none tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-white/55 text-[11px] uppercase tracking-[0.15em] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[#ffcccc] text-xs font-semibold">{stat.trend}</div>
                    <div className="w-0 h-px bg-white/40 mt-3 group-hover:w-10 transition-all duration-400" />
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA strip */}
            <div className="relative border-t border-white/15 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <p className="text-white font-bold text-lg mb-0.5">
                  Join thousands of successful graduates
                </p>
                <p className="text-white/55 text-sm">
                  who transformed their careers with MindLink
                </p>
              </div>
              <button type="button" className="flex-shrink-0 group relative bg-white text-[#d42b2b] px-8 py-3 rounded-full text-sm font-black tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[#d42b2b] to-[#ff6a6a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  Start Your Journey →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
