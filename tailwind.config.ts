import type { Config } from 'tailwindcss'

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        // montserrat: ['Montserrat', 'sans-serif'],
        // prata: ['Prata', 'serif'],
        // albert: ['Albert Sans', 'sans-serif'],
        montserrat: ["var(--font-montserrat)"],
        prata: ["var(--font-prata)"],
        albertSans: ["var(--font-albert-sans)"],
        meow: ["var(--font-meow)"],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  // Default padding for all sizes
          sm: '2rem',       // Increased padding starting at small breakpoint
          lg: '4rem',       // Even more padding starting at large breakpoint
          xl: '6rem',       // Generous padding at extra large breakpoint
        },
        screens: {
          sm: '100%',      // Use 100% width on small screens
          md: '100%',      // Use 100% width on medium screens
          lg: '1024px',    // Set max width to 1024px on large screens
          xl: '1280px',    // Set max width to 1280px on extra large screens
          // '2xl': '1536px', // Set max width to 1536px on 2xl screens
        },
      },
      // extend: {
      //   maxWidth: {
      //     '3xl': '1920px', // Adds a new maxWidth utility if needed elsewhere
      //   },
      // },
    },
  },
  plugins: [],
}
export default config
