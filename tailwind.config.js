/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter is a neo-grotesk — the closest free match to kore.ai's display face.
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
        // Back-compat aliases for legacy `font-roboto` / `font-Roboto` usages.
        roboto: ["Inter", "sans-serif"],
        Roboto: ["Inter", "sans-serif"],
      },
      colors: {
        // Near-black ink (kore.ai-style) — headings, buttons, dark sections
        ink: {
          DEFAULT: "#121317",
          900: "#0B0C0E",
          800: "#121317",
          700: "#23262D",
          soft: "#5A6470",
          muted: "#949CA8",
        },
        // Electric blue accent (AXON brand) — aligns with kore.ai blue/teal
        accent: {
          DEFAULT: "#026FE3",
          bright: "#3B8DFF",
          soft: "#6FB0FF",
          ink: "#0258B8",
        },
        teal: {
          DEFAULT: "#10B8B0",
          bright: "#22D3CC",
        },
        violet: "#7C6CFF",
        // Light canvas tints
        canvas: "#FFFFFF",
        mist: "#F4F8FC",
        cloud: "#EEF4FB",
        line: "#E4ECF5",
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(10, 26, 47, 0.06), 0 8px 24px -8px rgba(10, 26, 47, 0.08)",
        card: "0 4px 12px -4px rgba(10, 26, 47, 0.08), 0 18px 40px -16px rgba(10, 26, 47, 0.14)",
        lift: "0 12px 28px -10px rgba(2, 111, 227, 0.22), 0 30px 60px -24px rgba(10, 26, 47, 0.22)",
        glow: "0 0 0 1px rgba(2,111,227,0.12), 0 18px 50px -12px rgba(2,111,227,0.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "scroll-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(120%)" },
        },
        flow: {
          "0%": { transform: "translateX(-120%)", opacity: "0" },
          "12%": { opacity: "1" },
          "88%": { opacity: "1" },
          "100%": { transform: "translateX(520%)", opacity: "0" },
        },
        "flow-y": {
          "0%": { transform: "translateY(-120%)", opacity: "0" },
          "12%": { opacity: "1" },
          "88%": { opacity: "1" },
          "100%": { transform: "translateY(520%)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 38s) linear infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "scroll-line": "scroll-line 1.8s ease-in-out infinite",
        flow: "flow 3.6s linear infinite",
        "flow-y": "flow-y 3.6s linear infinite",
      },
    },
  },
};
