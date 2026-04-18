// components/Course/Courses.tsx
"use client";

import Image from "next/image";
import { courseList } from "@/helper/data_helper";
import Icon_Helper from "@/helper/icon_helper";
import { CourseSlug, PageType } from "@/helper/types";
import { useState } from "react";


type Props = {
  onNavigate: (page: PageType) => void;  // Add this prop
  onCourseDetail: (slug: CourseSlug) => void;
};

const CoursesGrid = ({ onNavigate, onCourseDetail }: Props) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

 

  return (
    <div className="max-w-7xl mx-auto pb-20 pt-28 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-wider">
            OUR PROGRAMS
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Explore Our{" "}
          <span className="text-red-600">Premium Courses</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our industry-leading programs designed for your success
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseList.map((course) => (
          <div
            key={course.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(course.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Red Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
            
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-red-50 to-white">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {course.badge}
              </div>

              {/* Emoji */}
              <div className="absolute bottom-4 left-4 text-4xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {course.emoji}
              </div>

              {/* Price Tag (Optional - you can add price to course data) */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold px-2 py-2 rounded-lg flex items-center gap-1">
                 <Icon_Helper.hero.lightning/>Hot
                 
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Course Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Icon_Helper.cource.clock size={18}  className=" text-red-500  "  />
                  <span>{course.duration}</span>
                </div>
                 <div className="flex items-center gap-1">
                        <Icon_Helper.hero.camera size={18} className="w-4 h-4 text-red-500 " />
                      <span>Live Classes</span>
                    </div>

                    <div className="flex items-center gap-1 ">
                      <Icon_Helper.hero.certificate size={18} className="w-4 h-4 text-red-500 "  />
                      <span>Certificate</span>
                    </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => onCourseDetail(course.id as CourseSlug)}
                  className="flex-1 border-2 border-red-600 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-md"
                >
                  View Details
                </button>

                <button 
                  onClick={() => onNavigate("contact")}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>

              {/* Hover Effect Extra Info */}
              <div className={`mt-3 overflow-hidden transition-all duration-300 ${hoveredCard === course.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-2 text-xs text-red-600 font-semibold flex items-center gap-2">
                <Icon_Helper.hero.stars className="w-5 h-5 text-yellow-500" />
              Limited seats available
              <Icon_Helper.hero.stars className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-100 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <button 
          onClick={() => onNavigate("contact")}
          className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-red-600 text-red-600 font-bold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-lg"
        >
          <span>Talk to Advisor</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CoursesGrid;