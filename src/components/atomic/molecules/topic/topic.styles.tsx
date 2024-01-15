import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const TopicStyles = (color:string): MuiStyles => ({
  topic__block: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  topic__img: {
    background: `${color}`,
    borderRadius: "50%",
    padding: "16px",
    width: "96px"
  },
  topic__title: {
    color: theme.palette.brand[200],
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "110%",
    [theme.breakpoints.up("md")]: {
      fontWeight: "700",
      fontSize: "24px"
    }
  },
  topic__description: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    lineHeight: "140%",
    maxWidth: "361px",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "272px"
    }
  }
})