import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/**/*.{js,ts,jsx,tsx,mdx}',
    'src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'src/libraries/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      gridTemplateRows: {
        layout: 'min-content 1fr',
      },
      colors: {
        border: {
          DEFAULT: 'rgb(var(--border))',
          opaque: 'rgb(var(--border) / .6)',
        },
        inverse: 'rgb(var(--inverse))',
        input: 'rgb(var(--input))',
        ring: 'rgb(var(--ring))',
        foreground: 'rgb(var(--foreground-rgb))',
        background: {
          primary: 'rgb(var(--background-end-rgb))',
          DEFAULT: 'rgb(var(--background))',
          opaque: 'rgb(var(--background) / .6)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          background: {
            100: 'var(--surface-background-100)',
            200: 'var(--surface-background-200)',
            300: 'var(--surface-background-300)',
          },
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
          opaque: 'rgb(var(--primary) / 0.5)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive))',
          foreground: 'rgb(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'rgb(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
      },
      boxShadow: {
        lift: '0 10px 8px -10px rgb(var(--black))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'bg-loader': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'bg-loader': 'bg-loader 2s ease infinite',
      },
      fontFamily: {
        sans: ['var(--montserrat)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
