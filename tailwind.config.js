module.exports = {
  mode: 'jit',
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      'spartan': ['Spartan', 'sans-serif']
    },
    extend: {
      backgroundPosition: {
        all: 'top 0 left 0, bottom 0 right 0',
      },
      backgroundImage: {
        'image': 'url(../images/bg-pattern-top-mobile.svg), url(../images/bg-pattern-bottom-mobile.svg)',
        'lg-image': 'url(../images/bg-pattern-top-desktop.svg), url(../images/bg-pattern-bottom-desktop.svg)'
      },
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'white': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
