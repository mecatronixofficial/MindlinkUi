"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [showButton, setShowButton] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-40
        hidden md:flex
        items-center justify-center
        w-12 h-12 rounded-full
        bg-white text-[#d42b2b]
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:scale-110
        border border-black/5
        group

        ${
          showButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}