import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
xs: "300px",
sm: "640px" ,
md: "768px" ,
lg: "1024px" ,

    },
    extend: {
      animation:{
        'fade-in-out': 'fadeInOut 4s infinite',
      },
      keyframes:{
        fadeInOut:{
'0%, 100%' : { opacity:
'0', transform: 'scale(0.8)' },
'50%' : { opacity: '1', 
  transform: 'scale(1)'},
},
        },
      },
      
      },
    
  
  plugins: [],
} satisfies Config;
