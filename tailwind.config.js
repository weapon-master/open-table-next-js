/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      '2xsm': '10px',
      xsm: '12px',
      sm: '13px',
      reg: '15px',
      lg: '18px',
      '2lg': '22px',
      '3lg': '25px',
      '4lg': '32px',
      '5lg': '40px',
      '6lg': '50px',
      '7lg': '70px',
    }
  },
  plugins: [],
}
