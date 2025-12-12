import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 亲自然色盘
        moss: {
          50: '#f6f9f4',
          100: '#e8f0e4',
          200: '#d1e2c9',
          300: '#aecba0',
          400: '#85ad72',
          500: '#638f50',
          600: '#4d733d',
          700: '#3d5b32',
          800: '#344a2b',
          900: '#2c3e25',
        },
        leaf: {
          50: '#f4f9f4',
          100: '#e6f2e6',
          200: '#cee5ce',
          300: '#a6d0a6',
          400: '#76b376',
          500: '#529452',
          600: '#3f773f',
          700: '#355f35',
          800: '#2e4d2e',
          900: '#274027',
        },
        earth: {
          50: '#faf8f5',
          100: '#f2ede5',
          200: '#e4d9c9',
          300: '#d2bfa6',
          400: '#bda07f',
          500: '#ad8965',
          600: '#9f7656',
          700: '#856149',
          800: '#6d5040',
          900: '#5a4336',
        },
        sky: {
          50: '#f5f9fc',
          100: '#e8f2f8',
          200: '#cce3f0',
          300: '#a0cce3',
          400: '#6db0d2',
          500: '#4a95be',
          600: '#3879a0',
          700: '#2f6282',
          800: '#2b536c',
          900: '#28465a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fcf9f3',
          200: '#f8f2e6',
          300: '#f2e8d5',
          400: '#e9d9bc',
          500: '#ddc9a3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(99, 143, 80, 0.1), 0 4px 6px -4px rgba(99, 143, 80, 0.1)',
        'soft-lg': '0 10px 40px -10px rgba(99, 143, 80, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(99, 143, 80, 0.06)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
