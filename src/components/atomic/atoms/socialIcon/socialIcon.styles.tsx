import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SocialIconStyles = (): MuiStyles => ({
  footer__social: {
    "& > a": {
      lineHeight: "140%",
      fontSize: "16px",
      textDecoration: "none",
      "& > svg": {
        color: theme.palette.grey["100"],
        stroke: theme.palette.grey["100"]
      }
    }
  }
})
