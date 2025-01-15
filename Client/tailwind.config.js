

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         scroll: "scroll 10s linear infinite",
//       },
//       keyframes: {
//         scroll: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" }, // Simplified for Tailwind compatibility
//         },
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",
        reverseScroll: "reverseScroll 15s linear infinite", // Reverse scroll animation
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Normal scrolling
        },
        reverseScroll: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }, // Reverse scrolling
        },
      },
    },
  },
  plugins: [],
};
