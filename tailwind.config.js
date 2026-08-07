/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0A0A0F",
        night2: "#12101C",
        cream: "#F5EFE6",
        amber: "#FF9D42",
        coral: "#FF5C7A",
        dusk: "#6C4AB6",
        melon: "#FF3D68",
        rind: "#2ED17A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        sunset:
          "radial-gradient(circle at 50% 30%, #FF9D42 0%, #FF5C7A 35%, #6C4AB6 65%, #0A0A0F 100%)",
        "sunset-soft":
          "radial-gradient(ellipse at 50% 0%, rgba(255,157,66,0.25) 0%, rgba(255,92,122,0.12) 40%, rgba(10,10,15,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(255,92,122,0.35)",
        card: "0 8px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
