/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      blink: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
      bounce: {
        "0%,100%": { transform: "translateY(10px)" },
        "50%": {
          transform: "translateY(-10px)",
        },
      },
      slide: {
        "0%": { transform: "rotate(0)" },
        "100%": { transform: "rotate(30deg)" },
      },
      spin: {
        from: { transform: "rotate(0)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    animation: {
      blink: "blink 5s ease infinite",
      bounce: "bounce 4s ease infinite",
      slide: "slide 5s ease",
      spin: "spin 10s linear infinite",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        gradientBg: 'url("/images/gradient-bg.png")',
        star: 'url("/images/star.png")',
      },
      backgroundColor: {
        titleBlack: "#020710",
      },
      textColor: {
        lightGreen: "#2CBCA5",
        lightGray: "#a2a3a2",
        darkGray: "#4f4f4f",
        titleBlack: "#020710",
        darkBlue: "#124ee8",
        darkPink: "#bc35bc",
      },
      border: {},
    },
  },
  plugins: [],
};
