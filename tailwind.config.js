/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Raleway','Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
