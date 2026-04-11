"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const initReveal = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      reveals.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = initReveal();
    return () => observer.disconnect();
  }, []);
}
