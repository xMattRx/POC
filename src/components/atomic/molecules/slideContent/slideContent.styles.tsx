import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SlideContentStyles = (): MuiStyles => ({
  slide__content: {
    alignItems: "flex-start",
    background: theme.palette.common.white,
    boxShadow:
      "0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
    boxSizing: "border-box",
    border: "1px solid #E2E8F0",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "24px 16px 12px 16px",
    position: "absolute",
    left: "17px",
    top: "209px",
    width: "327px",
    [theme.breakpoints.up("md")]: {
      top: "50%",
      transform: "translateY(-50%)",
      left: "600px",
      maxWidth: "680px",
      padding: "48px 48px 24px 48px",
      width: "100%"
    },
    [theme.breakpoints.between(769,1240)]: {
      left: "520px",
      width: "340px",
    },
  },
  slide__topic: {
    
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "100%",
    letterSpacing: "3px",
    marginBottom: "16px",
    textTransform: "uppercase"
  },
  slide__description: {
    color: theme.palette.brand[200],
    fontSize: "18px",
    lineHeight: "160%",
    textAlign: "left",
    marginBottom: "12px"
  },
  slide__link: {
    gap: "16px",
    padding: "12px 0",

    "& > a": {
      color: theme.palette.brand[50],
      textDecoration: "none",
      textTransform: "initial"
    }
  }
})
