// components/GalleryPage.tsx
"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import Icon_Helper from "@/helper/icon_helper";
import ImgHelper from "@/helper/img_helper";

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sectionRef = useRef<HTMLElement>(null);

  // Reveal animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      image: ImgHelper.Gallery.Workshop,
      caption: "AI & HR Workshop",
      span: false,
      icon: Icon_Helper.hero.robot,
      category: "Workshop",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.Work,
      caption: "EMPZON Main Campus",
      span: true,
      icon: Icon_Helper.testimonial.office,
      category: "Campus",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.SafetySession,
      caption: "Women's Safety Session",
      span: false,
      icon: Icon_Helper.hero.shield,
      category: "Safety",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.VisionChallenge,
      caption: "Business Vision Challenge",
      span: true,
      icon: Icon_Helper.hero.chatbox,
      category: "Workshop",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.CounsellingSession,
      caption: "Feedback Counselling Session",
      span: false,
      icon: Icon_Helper.hero.certificate,
      category: "Counselling",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.FamilyCounselling,
      caption: "Family Counselling Program",
      span: true,
      icon: Icon_Helper.hero.family,
      category: "Counselling",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.HealthCoaching,
      caption: "Health Coaching Retreat",
      span: false,
      icon: Icon_Helper.hero.heart,
      category: "Retreat",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.GraduationCeremony,
      caption: "Graduation Ceremony 2025",
      span: true,
      icon: Icon_Helper.hero.cap,
      category: "Ceremony",
      date: "2025",
    },
    {
      image: ImgHelper.Gallery.HealthCoaching,
      caption: "Health Coaching Retreat",
      span: false,
      icon: Icon_Helper.hero.heart,
      category: "Retreat",
      date: "2025",
    },
  ];

  const categories = [
    "All",
    "Campus",
    "Workshop",
    "Counselling",
    "Safety",
    "Retreat",
    "Ceremony",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <section ref={sectionRef} className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4">
              <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                OUR GALLERY
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Life at <span className="text-red-600">MindLink</span>
            </h1>

            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A glimpse into our classrooms, workshops, and the powerful moments
              of growth that happen every day.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-gray-100">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Icon_Helper.hero.camera className="text-red-600" />
              </div>
              <div className="text-2xl font-black text-gray-900">50+</div>
              <div className="text-xs text-gray-500">Moments Captured</div>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-gray-100">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Icon_Helper.hero.family className="text-red-600" />
              </div>
              <div className="text-2xl font-black text-gray-900">1,000+</div>
              <div className="text-xs text-gray-500">Happy Faces</div>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-gray-100">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Icon_Helper.hero.cup className="text-red-600" />
              </div>
              <div className="text-2xl font-black text-gray-900">24+</div>
              <div className="text-xs text-gray-500">Events Yearly</div>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-gray-100">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Icon_Helper.hero.target className="text-red-600" />
              </div>
              <div className="text-2xl font-black text-gray-900">100%</div>
              <div className="text-xs text-gray-500">Engagement</div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${300 + idx * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      item.span ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md transform -translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold px-2 py-1 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {item.date}
                    </div>

                    {/* Caption & CTA */}
                    <div className="absolute inset-0 flex items-end p-5 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-full">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            <item.icon className="w-7 h-7 text-white" />
                          </span>
                          <span className="text-white font-bold text-lg line-clamp-1">
                            {item.caption}
                          </span>
                        </div>

                        <button className="bg-white text-red-600 px-4 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 hover:bg-red-600 hover:text-white">
                          View Story →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-gray-600">Want to be part of these moments?</p>

              <div className="flex gap-4 flex-wrap justify-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 hover:shadow-lg">
                  Join Our Community →
                </button>

                <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300">
                  Request Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
