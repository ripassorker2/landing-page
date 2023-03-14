/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#468EF9",
            secondary: "#0C66EE",
            blue: "#2F7CF0",
            black: "#222222",
            gray: "#666666",
            lightgray: "#DDDDDD",
            green: "#28C165",
            red: "#F4574D",
         },
      },
   },
   plugins: [],
};
