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
  important: true,
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
          secondary: "#C4C4C4",
          success: "#21212199",
          warning: "#F18A00",
          error: "#B00020",
        },
      },
    ],
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "primary-dark": "rgba(0, 0, 0, 0.8)",
      },
      boxShadow: {
        basic: "1px 1px 10px rgba(0, 0, 0, 0.25)",
        basiclight: "1px 2px 8px rgba(0, 0, 0, 0.13)",
        login:
          "0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168)",
      },
      animation: {
        showForm: "showForm 0.6s ",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/svg/signup.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
