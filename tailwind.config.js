/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./contexts/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hn: ["Helvetica Neue ME", "Helvetica", "Arial", "sans-serif"],
        serif: ["Helvetica Neue ME", "Helvetica", "Arial", "sans-serif"],
        display: ["Helvetica Neue ME", "Helvetica", "Arial", "sans-serif"],
        sans: ["Helvetica Neue ME", "Helvetica", "Arial", "sans-serif"],
        lao: ["var(--font-lao)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        cream: "#efeee9",
        ink: {
          950: "#050507",
          900: "#0a0a0d",
          800: "#101015",
          700: "#191921",
          600: "#26262f",
          500: "#3a3a45",
        },
        bone: {
          50: "#fafaf7",
          100: "#f3f3ee",
          200: "#e6e6df",
          300: "#c8c8bf",
        },
        gold: {
          400: "#d4b878",
          500: "#c4a45c",
          600: "#a4843e",
        },
        white: "#ffffff",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
