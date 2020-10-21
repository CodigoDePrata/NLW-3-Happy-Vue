module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "1.875rem"
      }
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        default: "#5C8599",
        50: "#F5F8FA",
        100: "#EBF2F5",
        200: "#D3E2E5",
        300: "#8FA7B2",
        500: "#5C8599",
        600: "#4D6F80"
      },
      cyan: {
        default: "#15C3D6",
        50: "#D1EDF2",
        100: "#96FEFF",
        300: "#17D6EB",
        500: "#15C3D6",
        600: "#12AFCB",
        700: "#0089A5"
      },
      yellow: {
        default: "#FFD666",
        50: "#FFF5D9",
        500: "#FFD666"
      },
      green: {
        default: "#37C77F",
        50: "#EDFFF6",
        500: "#37C77F"
      },
      red: {
        default: "#FF669D",
        50: "#FFE4EE",
        500: "#FF669D"
      }
    }
  },
  variants: {},
  plugins: []
};
