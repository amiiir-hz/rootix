/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#5754A8',
//         secondary: '#5056AA',
//       },
//     },
//   },
//   plugins: [require('daisyui')],
// }
module.exports = {
  prefix: "",
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
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
        chartLine: "3px 3px 10px rgba(0, 0, 0, 0.05)",
        table: "0px 4px 4px rgba(241, 233, 233, 0.25)",
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
};
