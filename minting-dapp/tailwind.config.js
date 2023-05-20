const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: "#18F7CA",
        links: {
          txt: "#18F7CA",
          hover_txt: colors.white,
        },
        loading_spinner: "#18F7CA",
        popups: {
          bg: colors.neutral[900],
          txt: colors.white,
          internal_border: colors.black,
        },
        warning: {
          txt: colors.slate[800],
          bg: "#18F7CA",
          border: colors.neutral[900],
        },
        error: {
          txt: "#18F7CA",
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: "#18F7CA",
          bg: colors.neutral[900],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.black,
          bg: "#18F7CA",
          border: colors.black,
          hover_txt: colors.white,
          hover_bg: "#18F7CA",
          hover_border: "#18F7CA",
        },
        btn_error: {
          txt: colors.white,
          bg: "#18F7CA",
          border: "#18F7CA",
          hover_txt: colors.white,
          hover_bg: "#18F7CA",
          hover_border: "#18F7CA",
        },
        label: "#18F7CA",
        txt_input: {
          txt: "#18F7CA",
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: "#18F7CA",
          focus_bg: colors.slate[50],
          focus_border: "#18F7CA",
          placeholder_txt: "#18F7CA",
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: "#18F7CA",
        },

        // Mint widget
        token_preview: colors.neutral[900],
      },
    },
  },
  variants: {},
  plugins: [],
};