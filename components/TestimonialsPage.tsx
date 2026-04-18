// components/TestimonialsPage.tsx
"use client";

import Icon_Helper from "@/helper/icon_helper";
import { useReveal } from "@/hooks/useReveal";
import { useState, useEffect, useRef } from "react";

export default function TestimonialsPage() {
  useReveal();
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

  const testimonials = [
    {
      initials: "PR",
      name: "Priya Ramesh",
      role: "HR Manager, TechCorp India",
      quote: "The HR & AI course completely changed how I approach talent management. I implemented AI tools in my company within a week. My CEO was amazed by the results.",
      rating: 5,
      achievement: "Promoted within 3 months",
      
    },
    {
      initials: "SK",
      name: "Sana Khan",
      role: "Women's Safety Program",
      quote: "The Women's Safety course gave me something no one else ever had — real confidence. I finally understand my rights and feel equipped to protect myself and others.",
      rating: 5,
      achievement: "Certified Safety Trainer",
      
    },
    {
      initials: "AM",
      name: "Anjali Menon",
      role: "Health Coaching Graduate",
      quote: "Life coaching at EMPZON isn't just theory — it's a journey. I lost 12kg, built a morning routine, and found a purpose I didn't know I was missing.",
      rating: 5,
      achievement: "Started own coaching practice",
     
    },
    {
      initials: "RK",
      name: "Rohan Kumar",
      role: "Entrepreneur",
      quote: "The Business & Vision Challenge pushed me beyond every limit. My startup pitch was funded within 3 months of completing the course.",
      rating: 5,
      achievement: "$500K Seed Funding",
     
    },
    {
      initials: "NP",
      name: "Neha Pillai",
      role: "Operations Manager",
      quote: "The Feedback Counselling course transformed my leadership style. My team's productivity increased by 35% in just 2 months.",
      rating: 5,
      achievement: "Best Manager Award",
      
    },
    {
      initials: "SM",
      name: "Sunita Menon",
      role: "Family Counselling Graduate",
      quote: "Family Counselling at EMPZON helped me reconnect with my teenage son. The tools they gave us broke years of miscommunication.",
      rating: 5,
      achievement: "Family Harmony Restored",
      
    },
  ];

  const featuredStats = [
  {
    value: "3,200+",
    label: "Graduates",
    icon: Icon_Helper.hero.cap,
    color: "from-red-500 to-orange-500",
  },
  {
    value: "4.9★",
    label: "Average Rating",
    icon: Icon_Helper.hero.lightning,
    color: "from-yellow-500 to-orange-500",
  },
  {
    value: "98%",
    label: "Recommend",
    icon: Icon_Helper.hero.heart,
    color: "from-green-500 to-emerald-500",
  },
  {
    value: "150+",
    label: "5-Star Reviews",
    icon: Icon_Helper.testimonial.star,
    color: "from-blue-500 to-cyan-500",
  },
];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <section ref={sectionRef} className="px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Bold Header Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                REAL STORIES
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Voices of{" "}
              <span className="text-red-600">Transformation</span>
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our students are our greatest achievement. These are their stories — told in their own words.
            </p>
          </div>

          {/* Featured Stats Bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {featuredStats.map((item, idx) => {
  const Icon = item.icon;

  return (
    <div
      key={item.label}
      className="text-center group"
    >
      <div
        className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      <div className="text-xl font-bold text-gray-900">
        {item.value}
      </div>

      <div className="text-xs text-gray-500">
        {item.label}
      </div>
    </div>
  );
})}
          </div>

          {/* Testimonials Grid - Modern Card Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Card with Gradient Border */}
               
                <div className="relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Red Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-6xl font-serif text-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    "
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-red-600 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10 line-clamp-4 min-h-[80px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Achievement Badge */}
                  <div className={`mb-4 overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                     <Icon_Helper.hero.cup/>
                      {t.achievement}
                    </div>
                  </div>

                  {/* Author Section */}
                  <div className="flex items-center gap-3 relative z-10 pt-3 border-t border-gray-100">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-base shadow-md transition-all duration-300 group-hover:scale-110">
                        {t.initials}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-red-600 text-xs font-medium">{t.role}</p>
                    </div>
                    {/* Verified Badge */}
                    <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-red-100 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial Section */}
          <div className={`mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-4xl mb-4"><Icon_Helper.hero.camera/></div>
                <h3 className="text-2xl font-bold mb-2">Watch Success Stories</h3>
                <p className="text-red-100 mb-4">
                  See how our graduates transformed their lives and careers through our programs
                </p>
                <button className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <span>Watch Now</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-black">50+</div>
                  <div className="text-xs text-red-200">Video Stories</div>
                </div>
                <div>
                  <div className="text-3xl font-black">100K+</div>
                  <div className="text-xs text-red-200">Views</div>
                </div>
                <div>
                  <div className="text-3xl font-black flex items-center gap-1">4.9<Icon_Helper.testimonial.star/></div>
                  <div className="text-xs text-red-200 flex items-center gap-1">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-600 mb-3">Ready to write your own success story?</p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-1">
                Join Our Next Batch<Icon_Helper.arrow.right/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}