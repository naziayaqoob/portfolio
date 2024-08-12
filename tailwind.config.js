module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem', 
          md: '4rem',
          lg: '0',
          xl: '0',
        },
      },
      maxWidth: {
        'custom': '1201px',
      },
      fontSize: {
        'xs-custom': '0.6875rem',
      },
      boxShadow: {
        primary: '0 10px 40px rgba(70, 176, 230, 0.7)',
        secondary: '0 10px 40px rgba(248, 157, 33, 0.5)',
      },
      colors: {
        customBg: 'var(--bg-color)',
        purpleCustom: 'var(--custom-purple)',
      },
      willChange: {
        'transform': 'transform',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.will-change-transform': {
          willChange: 'transform',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
