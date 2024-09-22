// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [require('daisyui')],

// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'tiny': '400px',    // Custom name for a small screen
        'small': '650px',   // Custom name for a medium-small screen
        'medium': '931px',  // Custom name for a medium screen
        'large': '1364px',  // Custom name for a large screen
        'huge': '1600px',   // Custom name for an extra-large screen
      },
    },
  },
  plugins: [require('daisyui')],
}
