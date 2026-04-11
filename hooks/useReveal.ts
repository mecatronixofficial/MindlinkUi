// hooks/useReveal.ts
"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");
      
      // Function to check if element is in viewport
      const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - 100;
      };

      // Function to add visible class to elements in viewport
      const checkReveal = () => {
        reveals.forEach((el) => {
          if (isInViewport(el) && !el.classList.contains("visible")) {
            el.classList.add("visible");
          }
        });
      };

      // Initial check
      checkReveal();

      // Create observer for better performance
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      // Observe all reveal elements
      reveals.forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });

      // Cleanup
      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
}