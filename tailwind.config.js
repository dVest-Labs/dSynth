const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "sky": {
            "500": "#09c6e6",
        },
        "btn": {
          "selected": '#105ad5',
        }
    },
}

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    "colors": colors,
    fontFamily: {
      sans: [
        "Chivo",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {
      zIndex: {
        "-1": -1,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
      },
      backgroundImage: theme => ({
        'dSynth-background-image': "url('/images/dSynthBack.png')"
        })
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    float: false,
    container: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
