import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const FooterLinksStyles = (): MuiStyles => ({
  footer__link: {
    "& > a": {
      lineHeight: "140%",
      color: theme.palette.grey["100"],
      fontSize: "16px",
      textDecoration: "none"
    }
  },
  footer__links: {
    display: "flex",
    gap: "24px",
    padding: "12px 0",
    [theme.breakpoints.up("md")]: {
      padding: "12px 0"
    }
  },
})
