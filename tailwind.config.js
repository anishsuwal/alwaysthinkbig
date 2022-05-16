
const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        'partners': "url('../img/common-bg.jpg')",    
        'metaverse': "url('../img/metaverse1.png')",      
        'nft': "url('../img/nft.png')",    
        'roadmap': "url('../img/roadmap.png')",      
  

      },
    
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%"
      },
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}
