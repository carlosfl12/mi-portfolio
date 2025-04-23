// tailwind.config.js
module.exports = {
    darkMode: 'class', // 👈 Activamos modo oscuro por clase
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          backgroundLight: '#f9fafb',
          backgroundDark: '#0d1020',
        },
      },
    },
    plugins: [],
  };
  