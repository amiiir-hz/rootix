/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  // theme: {
  //   extend: {},
  // },
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    // themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    // darkTheme: "light",
    themes: [
      {
        mytheme: {
          primary: "#9C5FA4",
          success: "#21212199",
          warning: "#F18A00",
          error: "#B00020",
        },
      },
    ],
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        swipe: {
          50: "#111C44",
        },
        swipe: {
          50: "#111C44",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
