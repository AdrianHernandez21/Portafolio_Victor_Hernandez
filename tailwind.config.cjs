/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c10",
        panel: "#11131a",
        muted: "#9aa3b2",
        accent: "#7c5cff",
        line: "rgba(255,255,255,.08)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};
