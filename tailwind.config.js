module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundImage: {
        'home-hero-img': "url('./img/home-hero.jpg')",
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }