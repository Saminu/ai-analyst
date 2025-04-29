import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "#2563FF", // Accent
          dark: "#1E4FF5",    // Accent-Dark
          lite: "#F0F6FF",    // Accent-Lite
        },
        text: {
          main: "#0A0A0A",    // Text-Main
        },
        grid: "#E5E7EB",      // Grid/Stroke
        success: "#16A34A",   // Success
        warning: "#D97706",   // Warning
        error: "#DC2626",     // Error
      },
      spacing: {
        's1': '4px',
        's2': '8px',
        's3': '16px',
        's4': '24px',
        's5': '32px',
        's6': '48px',
        's7': '72px',
        's8': '96px',
      },
      maxWidth: {
        'content': '1140px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter Mono', 'monospace'],
      },
      fontSize: {
        'h1': 'clamp(2.6rem, 6vw + 1rem, 4.4rem)',
        'h2': '1.7rem',
        'body-m': '1.05rem', // 16.8px
        'body-s': '0.9rem',
      },
      letterSpacing: {
        'h1': '-0.02em', // -2%
        'h2': '-0.01em', // -1%
        'body-s': '0.002em', // 0.2%
      },
      lineHeight: {
        'heading': '1.1',
        'body': '1.5',
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '700',
        'extrabold': '800',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
export default config;
