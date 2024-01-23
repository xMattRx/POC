import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const FooterColumnStyles = (): MuiStyles => ({
  footer__title: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "110%",
    textTransform: "uppercase",
    padding: "12px 0"
  },
  footer__column: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      maxWidth: "173px",
      width: "100%"
    }
  },
  footer__item: {
    padding: "12px 0",
    "& > a": {
      color: theme.palette.grey[100],
      fontSize: "16px",
      lineHeight: "140%",
      textDecoration: "none"
    }
  },
})
