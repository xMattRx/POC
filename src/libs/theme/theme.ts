import { Color } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ColorPartial } from "@mui/material/styles/createPalette";

export const theme = createTheme({
  palette: {
    brand: {
      50: "#7C3AED",
      100: "#4C1D95",
      200: "#0F172A",
      300: "#A78BFA",
      400: "#9199D8",
      500: "#DAD7D6",
      600: "#F8F4F1",
    },
    grey: {
      100: "#475569",
      200: "#E2E8F0",
      300: "#374047",
      400: "#777777",
      500: "#21272B",
    },
    common: {
      white: '#ffffff',
      black: '#141414',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 769,
      lg: 1441,
      xl: 1921,
    },
  },
})

declare module "@mui/material/styles" {
  interface Palette {
    brand: Color
  }

  interface PaletteOptions {
    brand: ColorPartial
  }
}


