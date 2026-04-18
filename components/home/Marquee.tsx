// components/Marquee.tsx
"use client";

import Icon_Helper from "@/helper/icon_helper";
import { useState, useEffect } from "react";

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const items = [
  { icon: Icon_Helper.hero.robot, text: 'AI-Driven HR Training Programs', color: 'from-purple-400 to-pink-500' },
  { icon: Icon_Helper.hero.heart, text: 'Certified Life Coaching Modules', color: 'from-green-400 to-emerald-500' },
  { icon: Icon_Helper.hero.shield, text: 'POSH Act Compliance Training', color: 'from-blue-400 to-cyan-500' },
  { icon: Icon_Helper.arrow.tradeup, text: 'Business Strategy & Leadership Skills', color: 'from-orange-400 to-red-500' },
  { icon: Icon_Helper.hero.chatbox, text: 'Advanced Communication & Counselling', color: 'from-indigo-400 to-purple-500' },
  { icon: Icon_Helper.hero.family, text: 'Family & Relationship Coaching', color: 'from-rose-400 to-pink-500' },
  { icon: Icon_Helper.hero.cap, text: '3,000+ Certified Professionals', color: 'from-yellow-400 to-orange-500' },
  { icon: Icon_Helper.cource.globe, text: 'Globally Relevant Curriculum', color: 'from-blue-400 to-cyan-500' },
  { icon: Icon_Helper.hero.certificate, text: 'Industry-Recognized Certification', color: 'from-green-400 to-emerald-500' },
  { icon: Icon_Helper.hero.lightning, text: 'Limited Seats – Enroll Now', color: 'from-orange-400 to-red-500' },
];

  // Duplicate items for seamless loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-gradient-to-r from-[#d42b2b] via-[#c41e1e] to-[#d42b2b] py-5 overflow-hidden shadow-lg">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-3 animate-shimmer"></div>
      </div>
      
      {/* Top Border Animation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide"></div>
      
      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide-reverse"></div>

      <div 
        className="relative flex overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Marquee - Right to Left */}
        <div 
          className={`flex gap-10 whitespace-nowrap ${
            isPaused ? "animation-play-state-paused" : ""
          }`}
          style={{
            animation: "marquee 30s linear infinite",
            animationPlayState: isPaused ? "paused" : "running"
          }}
        >
          {marqueeItems.map((item, idx) => {
  const Icon = item.icon;

  return (
    <div
      key={idx}
      className="group relative flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon Box */}
      <div
        className={`relative w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
      >
        <Icon className="text-white text-sm drop-shadow size-19" />
      </div>

      {/* Text */}
      <span className="relative text-white text-xs md:text-sm tracking-wide font-semibold uppercase">
        {item.text}
      </span>

      {/* Dot */}
      <span className="w-1.5 h-1.5 bg-white/60 rounded-full mx-2 group-last:hidden animate-pulse"></span>
    </div>
  );
})}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Edge Fade Effects */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#d42b2b] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#d42b2b] to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewY(3deg);
          }
          100% {
            transform: translateX(100%) skewY(3deg);
          }
        }
        
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes slide-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) translateX(5px);
            opacity: 0.5;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        
        .animate-slide {
          animation: slide 2s linear infinite;
        }
        
        .animate-slide-reverse {
          animation: slide-reverse 2s linear infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animation-play-state-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default Marquee;