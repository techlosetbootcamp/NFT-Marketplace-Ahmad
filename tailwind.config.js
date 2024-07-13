/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "below-lg": { max: "1029px" },
        'tablet':{max:'834px'},
        'md-tablet':'835px',
        '1020':'1020px',
        '375':{max :'375px'},
        'max-834':{max :'834px'},
        'min-835':{min :'835px'},
        'min-1020':{min :'1020px'},
        'max-sm':{max:'639px'}

      },
      colors: {
        "primary-btn-color": "#975DE7",
        "primary-bg-color": "#2B2B2B",
        "secondry-bg-color": "#3B3B3B",
        "dark-bg-color": "#101010",
        "light": "#a2a2a2",
        "lightText": " #858584",
      },
      fontFamily:{
        workSans:[ "Work Sans", 'sans-serif'],
        spaceMono:["Space Mono", 'monospace']

      }
    },
  },

  plugins: [],
};

