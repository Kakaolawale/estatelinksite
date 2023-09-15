/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'estatelinkyellow': '#FFC000',
      'estatelinkpurple': '#660066',
      'estatelinkblack': '#1B1919',
      'estatelinkwhite': '#FFFFFF',
      'estatelinkgrey': '#5A5A5A',
    },

    extend: {
      backgroundImage: {
        'space1one': "url('/images/space1one.jpg')",
      },
    },
  },
  plugins: [],
}
