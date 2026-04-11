"use client";

import Icon_Helper from "@/helper/icon_helper";
import { useState, useEffect } from "react";
import { courseSlugs, navLinks } from "@/helper/data_helper";
import { CourseSlug, PageType } from "@/helper/types";

interface NavProps {
  activePage: PageType | CourseSlug | null;
  onNavigate: (page: PageType) => void;
  onCourseDetail: (slug: CourseSlug) => void;
}

const Nav = ({ activePage, onNavigate }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (page: PageType) => {
    if (activePage === page) return true;
    if (
      page === "courses" &&
      activePage &&
      courseSlugs.includes(activePage as CourseSlug)
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 transition-all duration-300 ${
          isScrolled ? "md:top-4 md:left-4 md:right-4" : ""
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-transparent backdrop-blur-xl shadow-2xl border border-white/10"
              : "bg-transparent backdrop-blur-md border border-white/20"
          }`}
        >
          <div className="px-5 py-3 md:px-6 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => onNavigate("home")}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF3366] to-[#FF6B3D] rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#FF3366] to-[#FF6B3D] rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm md:text-base">
                      M
                    </span>
                  </div>
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                    Mindlink
                  </span>
                </div>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map(({ label, page }) => (
                  <button
                    key={page}
                    onClick={() => onNavigate(page)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive(page)
                        ? "text-black bg-white/15"
                        : "text-gray-400 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {label}
                    {isActive(page) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#FF3366] to-[#FF6B3D] rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3">
                {/* Desktop CTA */}
                <button
                  onClick={() => onNavigate("contact")}
                  className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#FF3366] to-[#FF6B3D] hover:shadow-lg hover:shadow-[#FF3366]/25 transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
                >
                  <div className="relative w-5 h-5">
                    {/* Line 1 */}
                    <span
                      className={`absolute left-1/2 h-0.5 w-5 bg-white rounded-full transition-all duration-300 
      -translate-x-1/2 ${
        isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[20%]"
      }`}
                    />

                    {/* Middle Line */}
                    <span
                      className={`absolute left-1/2 h-0.5 w-5 bg-white rounded-full transition-all duration-300 
  -translate-x-1/2 top-1/2 -translate-y-1/2 ${
    isMobileMenuOpen ? "opacity-0" : "opacity-100"
  }`}
                    />

                    {/* Line 2 */}
                    <span
                      className={`absolute left-1/2 h-0.5 w-5 bg-white rounded-full transition-all duration-300 
      -translate-x-1/2 ${
        isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[70%]"
      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-90 bg-[#0A0A0A] shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="p-6 border-b border-white/10 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#FF6B3D] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Mindlink</div>
                <div className="text-gray-500 text-xs">
                  Learn without limits
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
            >
              <div className="relative w-5 h-5">
                {/* Line 1 */}
                <span
                  className={`absolute left-1/2 h-0.5 w-5 bg-white rounded-full transition-all duration-300 
      -translate-x-1/2 ${
        isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[20%]"
      }`}
                />

                {/* Middle Line */}
                <span
                  className={`absolute left-1/2 h-0.5 w-5 bg-white rounded-full transition-all duration-300 
  -translate-x-1/2 top-1/2 -translate-y-1/2 ${
    isMobileMenuOpen ? "opacity-0" : "opacity-100"
  }`}
                />

                {/* Line 2 */}
                <span
                  className={`absolute left-1/2 h-0.5 w-5 bg-white rounded-full transition-all duration-300 
      -translate-x-1/2 ${
        isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[70%]"
      }`}
                />
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 space-y-2">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(page)
                    ? "text-white bg-gradient-to-r from-[#FF3366]/20 to-[#FF6B3D]/20 border-l-2 border-[#FF3366]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* CTA Section */}
          <div className="p-6">
            <button
              onClick={() => {
                onNavigate("contact");
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF3366] to-[#FF6B3D] hover:shadow-lg hover:shadow-[#FF3366]/25 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get Started Free</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            {/* Additional Info */}
            <p className="text-center text-gray-500 text-xs mt-4">
              Join 10,000+ learners today
            </p>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      {!isScrolled && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
