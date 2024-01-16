import { SxProps } from "@mui/material"
// import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SlidesStyles = (): MuiStyles => ({
  slides: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
})
