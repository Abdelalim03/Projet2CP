module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        avatar: 'avatar 2s ease-in-out 1',
      },
      keyframes: {
        avatar: {
          '0%': { opacity:"0" },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}