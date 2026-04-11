"use client";

import { useEffect, useState } from "react";
import {
  NavigationProvider,
  useNavigation,
} from "@/components/contexts/NavigationContext";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import WhyChoose from "@/components/home/WhyChoose";
import ApproachPage from "@/components/ApproachPage";
import TestimonialsPage from "@/components/TestimonialsPage";
import GalleryPage from "@/components/GalleryPage";
import Contact from "@/components/Contact";
import CourseDetailPage from "@/components/Course/CourseDetail";
import { CourseSlug, PageType } from "@/helper/types";
import CoursesGrid from "@/components/Course/Courses";

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-[#d42b2b] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#d42b2b] text-sm font-semibold animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

function PageContent() {
  const { activePage, navigateTo } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [currentCourseDetail, setCurrentCourseDetail] = useState<CourseSlug | null>(null);

  // Navigation with loader
  const handleNavigateWithLoading = async (page: PageType) => {
    if (activePage === page && !currentCourseDetail) return; // Prevent unnecessary navigation
    
    setIsLoading(true);
    setCurrentCourseDetail(null);
    
    // Small delay for smooth transition
    await new Promise((resolve) => setTimeout(resolve, 50));
    navigateTo(page);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsLoading(false);
  };

  // Handle course detail view
  const handleCourseDetail = (slug: CourseSlug) => {
    setCurrentCourseDetail(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle back to courses list
  const handleBackToCourses = () => {
    setCurrentCourseDetail(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle enroll from course detail
  const handleEnroll = () => {
    setCurrentCourseDetail(null);
    navigateTo("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active state for navigation
  const activeForNav = currentCourseDetail ? "courses" : activePage;

  // Reveal animation effect
  useEffect(() => {
    if (!currentCourseDetail) {
      const timeout = setTimeout(() => {
        const reveals = document.querySelectorAll<HTMLElement>(".reveal");
        
        // Remove existing visible class
        reveals.forEach((el) => el.classList.remove("visible"));
        
        // Create new observer
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
        );
        
        reveals.forEach((el) => observer.observe(el));
        
        return () => observer.disconnect();
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [activePage, currentCourseDetail]);

  // Show loading spinner
  if (isLoading) return <LoadingSpinner />;

  // Course Detail Page View
  if (currentCourseDetail) {
    return (
      <>
        <Nav
          activePage={activeForNav}
          onNavigate={handleNavigateWithLoading}
          onCourseDetail={handleCourseDetail}
        />
        <CourseDetailPage
          slug={currentCourseDetail}
          onBack={handleBackToCourses}
          onEnroll={handleEnroll}
        />
        <Footer
          onNavigate={handleNavigateWithLoading}
          onCourseDetail={handleCourseDetail}
        />
      </>
    );
  }

  // Normal Pages View
  return (
    <>
      <Nav
        activePage={activePage}
        onNavigate={handleNavigateWithLoading}
        onCourseDetail={handleCourseDetail}
      />

      <main className="min-h-screen">
        {activePage === "home" && (
          <>
            <Hero onNavigate={handleNavigateWithLoading} />
            <Marquee />
            <WhyChoose />
          </>
        )}

        {activePage === "courses" && (
          <CoursesGrid
            onNavigate={handleNavigateWithLoading}
            onCourseDetail={handleCourseDetail}
          />
        )}

        {activePage === "approach" && <ApproachPage />}
        {activePage === "testimonials" && <TestimonialsPage />}
        {activePage === "gallery" && <GalleryPage />}
        {activePage === "contact" && <Contact />}
      </main>

      <Footer
        onNavigate={handleNavigateWithLoading}
        onCourseDetail={handleCourseDetail}
      />
    </>
  );
}

// Root Wrapper with Navigation Provider
export default function RootPage() {
  return (
    <NavigationProvider>
      <PageContent />
    </NavigationProvider>
  );
}