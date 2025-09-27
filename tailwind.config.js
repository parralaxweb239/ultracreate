/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0C0E',
          text: '#EAECEF',
          card: '#1A1D21',
          border: '#2D3239',
          primary: '#3B82F6',
        },
        light: {
          bg: '#F9FAFB',
          text: '#111827',
          card: '#FFFFFF',
          border: '#E5E7EB',
          primary: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    }
  },
  plugins: [],
}
