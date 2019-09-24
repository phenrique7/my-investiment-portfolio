module.exports = {
  theme: {
    fontFamily: {
      display: ['Vollkorn SC', 'serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    inset: {
      '-4': '-1rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
    },
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
        120: '30rem',
      },
    },
    screens: {
      'sm-min': '640px',
      'sm-max': { max: '639px' },
      'md-min': '768px',
      'md-max': { max: '767px' },
      'lg-min': '1024px',
      'lg-max': { max: '1023px' },
      'xl-min': '1280px',
      'xl-max': { max: '1279px' },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
