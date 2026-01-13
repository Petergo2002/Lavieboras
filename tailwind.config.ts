import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#D4AF37",
          600: "#aa8c2c",
        },
        dark: {
          900: "#0f0f0f",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-pinyon-script)', 'cursive'],
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
