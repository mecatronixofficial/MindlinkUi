// components/Footer.tsx
"use client";

import { courseList } from "@/helper/data_helper";
import Icon_Helper from "@/helper/icon_helper";
import { CourseSlug, PageType } from "@/helper/types";
import { useState } from "react";

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onCourseDetail: (slug: CourseSlug) => void;
}

export default function Footer({ onNavigate, onCourseDetail }: FooterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const socialLinks = [
    { name: "Instagram", icon: Icon_Helper.contact.insta, color: "hover:bg-white/20" },
    { name: "LinkedIn", icon: Icon_Helper.contact.linked, color: "hover:bg-white/20" },
    { name: "YouTube", icon: Icon_Helper.contact.youtub, color: "hover:bg-white/20" },
    { name: "Twitter", icon: Icon_Helper.contact.twiter, color: "hover:bg-white/20" },
  ];

 const users = ["P", "B", "S", "D"];



  return (
    <footer className="relative bg-gradient-to-br from-[#d42b2b] to-[#8b1a1a] pt-16 pb-8 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - 4 columns */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                <span className="text-white font-black text-xl">M</span>
              </div>
              <div className="text-2xl font-black tracking-tight">
                <span className="text-white">Mind</span>
                <span className="text-[#ffcccc]">Link</span>
              </div>
            </div>

            <p className="text-[#ffdddd] text-sm leading-relaxed">
              Empowering individuals through education, coaching, safety, and growth.
              Join the MindLink movement and transform your life today.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = (social.icon as React.ElementType);

                return (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#ffdddd] ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                
                      <Icon className="w-5 h-5" />
                
                   
                  </a>
                );
              })}
            </div>
          </div>

          {/* Courses Section - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {courseList.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onCourseDetail(course.id as CourseSlug)}
                    className="text-[#ffdddd] text-sm hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute Section - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-4">
              Institute
            </h3>
            <ul className="space-y-3">
              {[
                { label: "All Courses", page: "courses" as PageType },
                { label: "Our Approach", page: "approach" as PageType },
                { label: "Student Stories", page: "testimonials" as PageType },
                { label: "Gallery", page: "gallery" as PageType },
                { label: "Careers", page: "contact" as PageType },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-[#ffdddd] text-sm hover:text-white transition-all duration-200 hover:translate-x-1 inline-block capitalize"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-4">
              Stay Updated
            </h3>
            <p className="text-[#ffdddd] text-sm mb-4">
              Get the latest updates on new courses, events, and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-[#ffdddd]/60 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-white text-[#d42b2b] rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 mt-4 pt-2">
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
              <span className="text-[#ffdddd] text-xs">Join 10,000+ happy learners</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#ffdddd] text-xs">
              © 2026 MindLink Institute. All rights reserved. |
              <button className="hover:text-white ml-1 transition-colors">Privacy Policy</button> |
              <button className="hover:text-white ml-1 transition-colors">Terms of Service</button>
            </p>

            {/* Payment Methods */}
            <div className="flex gap-3">
              {["Visa", "Mastercard", "PayPal", "Stripe"].map((method) => (
                <span key={method} className="text-[#ffcccc]/70 text-xs font-mono">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white text-[#d42b2b] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group md:flex hidden"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}