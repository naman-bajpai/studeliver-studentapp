/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'okra' : ['Okra-Regular', 'sans-serif'],
        'okra-bold' : ['Okra-Bold', 'sans-serif'],
        'okra-medium' : ['Okra-Medium', 'sans-serif'],
        'okra-medium-light' : ['Okra-MediumLight', 'sans-serif'],
        'okra-extra-bold' : ['Okra-ExtraBold', 'sans-serif'],
      },
      colors: {
        "primary" : {
          "DEFAULT" : "#5e17eb",
          100 : "#5e17eb0A",
          200 : "#205B9C1A",
        },
        "secondary" : {
          "DEFAULT" : "#fef08a",
          100 : "#e6ca00",
          200 : "#fef08a1A",
        },
        "accent" : {
          "DEFAULT" : "#FBFBFD",
        },
        "black" : {
          "DEFAULT" : "#000000",
          100 : "#8C8E98",
          200 : "#666876",
          300 : "#191D31",
        },
        "danger" : "#F75555",
        "success" : {
          "DEFAULT" : "#4CAF50",
          100 : "#175555"
        },
        "warning" : "#FFC846",
        "info" : "#607D8B",
        "light" : "#F5F5F5",
        "dark" : "#212121",
        


      }
    },
  },
  plugins: [],
}