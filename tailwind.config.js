/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      backgroundColor: theme =>({
				...theme('colors'), // colores por defecto de tailwind
				'secondary': '#0C1220',
			}),
			textColor:{
				'primary': '#38BDF8',
				'secundary': '#C7D2FE'
			},
			//"Young Serif", serif;
			fontFamily: {
				'primary': ['Young Serif', 'serif'],
				'secundary': ['Outfit', 'sans-serif'],
			  },
			fontSize: {
				'paragraph': '16px',
			},
			colors: {
				'primary-nutmeg': '#854632',
				'primary-dark-raspberry': '#7B284F',
				'neutral-rose-white': '#FFF5FA',
				'neutral-eggshell': '#F3E6D8',
				'neutral-light-grey': '#E4DED8',
				'neutral-wenge-brown': '#5F574E',
				'neutral-dark-charcoal': '#302D2C'
			}
    },
  },
  variants:{
	extend:{
		with:['responsive','hover','focus']
	}
  },
  plugins: [],
};



