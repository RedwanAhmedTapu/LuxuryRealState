/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'dna-spin': 'dna-spin 1.2s linear infinite',
      },
      keyframes: {
        'dna-spin': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-50px) rotate(180deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
