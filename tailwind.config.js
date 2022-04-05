module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "symapp-blue-light": "#C7DBFE",
        "symapp-purple": "#6A5CF7",
        "symapp-orange": "#FF946B",
        "symapp-blue-light-second": "#98BCFF",
        "symapp-pink-light": "#FDE3DE",
      },
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
};
