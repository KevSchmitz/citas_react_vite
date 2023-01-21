/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"], // En estos directorios es donde va a ser aplicado Tailwind. Se coloca los asteriscos para decir que en todas las carpetas dentro de src busque todos los archivos JSX.
  theme: {
    extend: {},
  },
  plugins: [],
};
