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

// ✅ Loading Spinner
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-12 h-12 border-4 border-[#d42b2b] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function PageContent() {
  const { activePage, navigateTo } = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [currentCourseDetail, setCurrentCourseDetail] =
    useState<CourseSlug | null>(null);

  // ✅ Navigation with loader
  const handleNavigateWithLoading = async (page: PageType) => {
    setIsLoading(true);
    setCurrentCourseDetail(null);

    navigateTo(page);

    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsLoading(false);
  };

  const handleCourseDetail = (slug: CourseSlug) => {
    setCurrentCourseDetail(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCourses = () => {
    setCurrentCourseDetail(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnroll = () => {
    setCurrentCourseDetail(null);
    navigateTo("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Fix active nav state
  const activeForNav = currentCourseDetail ? "courses" : activePage;

  // ✅ Reveal animation reset
  useEffect(() => {
    if (!currentCourseDetail) {
      const timeout = setTimeout(() => {
        const reveals =
          document.querySelectorAll<HTMLElement>(".reveal");

        reveals.forEach((el) => el.classList.remove("visible"));

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.08 }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [activePage, currentCourseDetail]);

  if (isLoading) return <LoadingSpinner />;

  // ✅ Course Detail Page
  if (currentCourseDetail) {
    return (
      <>
        <Nav
          activePage={activeForNav}
          onNavigate={handleNavigateWithLoading}  // ✅ FIXED
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

  // ✅ Normal Pages
  return (
    <>
      <Nav
        activePage={activePage}
        onNavigate={handleNavigateWithLoading}  // ✅ FIXED
        onCourseDetail={handleCourseDetail}
      />

      <main>
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

// ✅ Root Wrapper
export default function RootPage() {
  return (
    <NavigationProvider>
      <PageContent />
    </NavigationProvider>
  );
}