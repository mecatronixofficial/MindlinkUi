// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#d42b2b",
          dark: "#a81f1f",
          light: "#fdf0f0",
          medium: "#f5e0e0",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin-slow 30s linear infinite",
        "spin-slower-reverse": "spin-slower-reverse 20s linear infinite",
        marquee: "marquee 25s linear infinite",
        "fade-up": "fade-up 0.8s ease both",
        "fade-right": "fade-right 0.9s ease 0.2s both",
        "pulse-slow": "pulse 1.5s ease infinite",
        "fade-down": "fadeInDown 0.8s ease forwards",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slower-reverse": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
