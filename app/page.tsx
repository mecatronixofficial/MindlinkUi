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
import CoursesGrid from "@/components/Course/Courses";

import { CourseSlug, PageType } from "@/helper/types";

// ==============================
// Loading Spinner
// ==============================
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-[#d42b2b] border-t-transparent rounded-full animate-spin" />

        <p className="text-[#d42b2b] text-sm font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

// ==============================
// Main Page Content
// ==============================
function PageContent() {
  const { activePage, navigateTo } = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const [currentCourseDetail, setCurrentCourseDetail] =
    useState<CourseSlug | null>(null);

  // ==============================
  // Navigation
  // ==============================
  const handleNavigateWithLoading = async (
    page: PageType
  ) => {
    // prevent reload
    if (
      activePage === page &&
      currentCourseDetail === null
    ) {
      return;
    }

    setIsLoading(true);

    // clear selected course
    setCurrentCourseDetail(null);

    await new Promise((resolve) =>
      setTimeout(resolve, 50)
    );

    navigateTo(page);

    await new Promise((resolve) =>
      setTimeout(resolve, 100)
    );

    setIsLoading(false);
  };

  // ==============================
  // Open Course Detail
  // ==============================
  const handleCourseDetail = (
    slug: CourseSlug
  ) => {
    setCurrentCourseDetail(slug);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==============================
  // Back To Courses
  // ==============================
  const handleBackToCourses = () => {
    setCurrentCourseDetail(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==============================
  // Enroll Action
  // ==============================
  const handleEnroll = () => {
    setCurrentCourseDetail(null);

    navigateTo("contact");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==============================
  // Active Nav Fix
  // ==============================
  const activeForNav: PageType =
    currentCourseDetail !== null
      ? "courses"
      : activePage;

  // ==============================
  // Reveal Animations
  // ==============================
  useEffect(() => {
    if (currentCourseDetail !== null) return;

    const timeout = setTimeout(() => {
      const reveals =
        document.querySelectorAll<HTMLElement>(
          ".reveal"
        );

      reveals.forEach((el) =>
        el.classList.remove("visible")
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "visible"
              );
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      reveals.forEach((el) =>
        observer.observe(el)
      );

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [activePage, currentCourseDetail]);

  // ==============================
  // Loading Screen
  // ==============================
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // ==============================
  // Course Detail View
  // ==============================
  if (currentCourseDetail !== null) {
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

  // ==============================
  // Main Pages
  // ==============================
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
            <Hero
              onNavigate={
                handleNavigateWithLoading
              }
            />

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

        {activePage === "approach" && (
          <ApproachPage />
        )}

        {activePage === "testimonials" && (
          <TestimonialsPage />
        )}

        {activePage === "gallery" && (
          <GalleryPage />
        )}

        {activePage === "contact" && (
          <Contact />
        )}
      </main>

      <Footer
        onNavigate={handleNavigateWithLoading}
        onCourseDetail={handleCourseDetail}
      />
    </>
  );
}

// ==============================
// Root Wrapper
// ==============================
export default function RootPage() {
  return (
    <NavigationProvider>
      <PageContent />
    </NavigationProvider>
  );
}