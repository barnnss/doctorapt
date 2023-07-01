 @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./index.html",
    "./ src/**/ *.{ html, js , ts, jsx, tsx }",
  ],
  theme: {
    extend: { 
      primaryColor: "#0067FF",
      yellowColor: "#FEB60D",
      purpleColor: "#9771FF",
      irisBlueColor: "#01B5C5",
      headingColor: "#181A1E",
      textColor: "#4E545F",
    },
  },
  plugins: [],
}

