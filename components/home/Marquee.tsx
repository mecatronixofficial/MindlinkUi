// components/Marquee.tsx
"use client";

import { useState, useEffect } from "react";

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const items = [
    { icon: '🏆', text: 'ICF Accredited Programs', color: 'from-yellow-400 to-orange-500' },
    { icon: '🌍', text: 'Global Curriculum', color: 'from-blue-400 to-cyan-500' },
    { icon: '📜', text: 'Industry-Recognized Certificates', color: 'from-green-400 to-emerald-500' },
    { icon: '👩‍🏫', text: 'Expert-Led Live Sessions', color: 'from-purple-400 to-pink-500' },
    { icon: '🤝', text: 'Lifetime Alumni Network', color: 'from-indigo-400 to-blue-500' },
    { icon: '💻', text: 'Online & Offline Modes', color: 'from-red-400 to-orange-500' },
    { icon: '🎓', text: '3,200+ Graduates', color: 'from-pink-400 to-rose-500' },
    { icon: '✨', text: 'Next Batch May 15, 2026', color: 'from-yellow-400 to-amber-500' },
    { icon: '⚡', text: 'Limited Seats Available', color: 'from-orange-400 to-red-500' },
    { icon: '🎯', text: '100% Placement Assistance', color: 'from-teal-400 to-green-500' },
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
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with Gradient Background */}
              <div className={`relative w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-12`}>
                <span className="text-base filter drop-shadow">{item.icon}</span>
              </div>
              
              {/* Text */}
              <span className="relative text-white text-xs md:text-sm tracking-wide font-semibold uppercase">
                {item.text}
              </span>
              
              {/* Separator with Pulse Effect */}
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full mx-2 group-last:hidden animate-pulse"></span>
            </div>
          ))}
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