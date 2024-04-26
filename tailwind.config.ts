/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
export default <Config>{
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
