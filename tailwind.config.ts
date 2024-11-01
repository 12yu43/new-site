import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      container: {
        center: true,
        padding: {
          padding: "2rem",
          lg: "60px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
