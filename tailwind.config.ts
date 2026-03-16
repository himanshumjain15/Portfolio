import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "surface-0": "var(--surface-0)",
        "surface-1": "var(--surface-1)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "border-subtle": "var(--border-subtle)",
        "border-default": "var(--border-default)",
        "accent-hero": "var(--accent-hero)",
        "accent-about": "var(--accent-about)",
        "accent-experience": "var(--accent-experience)",
        "accent-research": "var(--accent-research)",
        "accent-projects": "var(--accent-projects)",
        "accent-skills": "var(--accent-skills)",
        "accent-writing": "var(--accent-writing)",
        "accent-contact": "var(--accent-contact)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1080px",
        layout: "1200px",
        prose: "640px",
      },
      spacing: {
        "timeline": "var(--timeline-width)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "70%": { transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
        "pop-in": "pop-in 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
