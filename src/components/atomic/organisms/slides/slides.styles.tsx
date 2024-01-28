import { SxProps } from "@mui/material"

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
