module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: { 
        marquee: { 
          from: { 
            transform: "translateX(0)"
          },
          to: { 
            transform: "translateX(-100%)"
          }
        }
      },
      animation: { 
        marquee: "marquee 20s linear infinite "
        
      }
      
    },
  },
  plugins: [
    
  ],
}