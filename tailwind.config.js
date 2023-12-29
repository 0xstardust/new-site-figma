/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "beigebeige-02": "var(--beigebeige-02)",
      },
      fontFamily: {
        "caption-2-regular": "var(--caption-2-regular-font-family)",
      },
    },
  },
  plugins: [],
};
