// /** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

// export default withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });


import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
});

// const withMT = "@material-tailwind/react/utils/withMT";


// export const content = [
//   "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
//   "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
// ];
// export const theme = {};
// export const plugins = [];