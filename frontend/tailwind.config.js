module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'bg-deep': '#07070B',
        'bg-base': '#0B0B12',
        'surface': '#121222',
        'neon-purple': '#A855F7',
        'electric-violet': '#7C3AED',
        'revenue-green': '#22E3A1',
      },
    },
  },
  plugins: [],
}
