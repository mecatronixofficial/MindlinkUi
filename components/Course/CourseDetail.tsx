// components/Course/CourseDetailPage.tsx
"use client";

import { courses } from "@/helper/data_helper";
import Icon_Helper from "@/helper/icon_helper";
import Image from "next/image";

type CourseSlug =
 | "hr-ai"
  | "health"
  | "safety"
  | "business"
  | "feedback"
  | "family"
  | "lawOfAttraction"
  | "searchIntelligence"
  | "personalityDevelopment"
  | "problemSolving";
  


interface CourseDetailPageProps {
  slug: CourseSlug | null;
  onBack: () => void;
  onEnroll: () => void;
}

// Corrected component declaration (removed 'const' before export default)
export default function CourseDetailPage({
  slug,
  onBack,
  onEnroll,
}: CourseDetailPageProps) {
  if (!slug) return null;
  const course = courses[slug];
  if (!course) return null;






  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative min-h-[55vh] flex items-end pb-12 pt-28 px-6">
        <Image
          src={course.image}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 hover:bg-white/30 transition-all"
          >
            <Icon_Helper.arrow.right size={20}/>
            Back to Courses
          </button>
          <div className="inline-block bg-[#d42b2b] text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase mb-4">
            {course.duration} Program
          </div>
          <h1 className="font-['Playfair_Display'] text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {course.title}
          </h1>
          <p className="text-white/80 max-w-xl">{course.description}</p>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Icon_Helper.cource.clock size={20} className="text-red-500" /> {course.duration}
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Icon_Helper.cource.globe size={20} className="text-red-500" /> Online & Offline
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Icon_Helper.cource.award size={20} className="text-red-500" /> Certified
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                About This Course
              </h2>
              <p className="text-gray-600 leading-relaxed">{course.longDesc}</p>
            </div>

            <div className="mb-8">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                Course Modules
              </h2>
              <div className="space-y-3">
                {course.modules.map((module: string, idx: number) => (
                  <div
                    key={idx}
                    className="border border-[#f0d0d0] rounded-xl p-4 flex gap-4 hover:border-[#d42b2b] hover:translate-x-1 transition-all"
                  >
                    <div className="w-8 h-8 bg-[#d42b2b] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{module}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                What You'll Achieve
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.outcomes.map((outcome: string, idx: number) => (
                  <div
                    key={idx}
                    className="bg-[#fdf0f0] rounded-xl p-3 flex gap-3"
                  >
                    <span className="text-[#d42b2b] font-bold">
                      <Icon_Helper.approch.check size={26}/></span>
                    <p className="text-sm text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-6 border border-[#f0d0d0] shadow-lg sticky top-24">
              <div className="font-['Playfair_Display'] text-4xl font-bold text-[#d42b2b]">
                {course.price}
              </div>
              <div className="text-gray-400 text-xs mb-4">
                Early enrollment: {course.earlyPrice} (save 15%)
              </div>
              <button
            onClick={onEnroll}
            className="flex items-center gap-2 bg-red border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 hover:bg-black transition-all"
              >
                Enroll Now <Icon_Helper.arrow.right size={20}/>
              </button>
              <div className="space-y-3">
                <div className="flex justify-between text-sm py-2 border-b border-[#f5e0e0]">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-bold">{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-[#f5e0e0]">
                  <span className="text-gray-500">Mode</span>
                  <span className="font-bold">Hybrid</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-[#f5e0e0]">
                  <span className="text-gray-500">Next Batch</span>
                  <span className="font-bold">May 15, 2026</span>
                </div>
                <div className="flex justify-between text-sm py-2">
                  <span className="text-gray-500">Certificate</span>
                  <span className="font-bold">Yes, Certified</span>
                </div>
              </div>
              <div className="mt-6 bg-[#fdf0f0] rounded-xl p-4">
                <p className="text-sm text-gray-600 italic mb-3">
                  "
                  {slug === "hr-ai"
                    ? "The AI tools I learned here saved my company 40 hours per month in recruitment alone."
                    : slug === "health"
                      ? "I lost 12kg and found a morning routine I never thought possible."
                      : slug === "safety"
                        ? "Every woman needs this knowledge. EMPZON's approach is so accessible."
                        : slug === "business"
                          ? "After the Vision Challenge, I finally had clarity. My business grew 3x."
                          : slug === "feedback"
                            ? "My team's performance reviews went from dreaded to celebrated."
                            : "Our family communication completely changed within weeks."}
                  "
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-9 h-9 rounded-full bg-[#d42b2b] flex items-center justify-center text-white font-bold text-xs">
                    PR
                  </div>
                  <div>
                    <div className="font-bold text-sm">Priya Ramesh</div>
                    <div className="text-[#d42b2b] text-[10px] uppercase">
                      Graduate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
