const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		//commented out for faster builds during development
		cssnano({
		  preset: 'default'
		}),
		
	  ]
}