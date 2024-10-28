/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      keyframes: {
        runner: {
          '0%': { transform: 'translateX(100vw) scaleX(1)' }, // Start off-screen right
          '45%': { transform: 'translateX(-100vw) scaleX(1)' }, // Off-screen left, no flip yet
          '50%': { transform: 'translateX(-100vw) scaleX(-1)' },
          '55%': { transform: 'translateX(-100vw) scaleX(-1)' }, // Instant flip off-screen left
          '100%': { transform: 'translateX(100vw) scaleX(-1)' }, // Back to right, flipped
        },
      },
      animation: {
        runner: 'runner 6s linear infinite', // Infinite back-and-forth animation
      },
    },
  },
  plugins: [],
};
