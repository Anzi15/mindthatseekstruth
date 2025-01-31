/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
	flowbite.content(),
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
				primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e","950":"#082f49"}

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('flowbite-typography'), flowbite.plugin(),
  ],
});
