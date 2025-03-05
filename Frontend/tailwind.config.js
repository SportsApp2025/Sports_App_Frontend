/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily:{
        Raleway:["Raleway", "serif"],
        
         Opensans:["Open sans", "serif"]

        

      },

      colors: {
        customYellow: "#F9DC5C",
        lightYellow:"#FDE394",
        customGrey:"#D9D9D9"
      },
     
      
      

    },
  },
  plugins: [],
}

