import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionBrainstormNowStyles = (): MuiStyles => ({
  sectionBrainstormNow: {
    alignItems: "center",
    background: theme.palette.brand[100],
    bottom: "0px",
    display: "flex",
    justifyContent: "center",
    left: "0px",
    overflow: "hidden",
    position: "absolute",
    width: "100%"
  },
  sectionBrainstormNow__iconsContainer: {
    alignItems: "center",
    background: theme.palette.brand[100],
    bottom: "0px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "100%"
  },
  sectionBrainstormNow__content: {
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "1440px",
    padding: "48px 16px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "80px 0"
    }
  },
  sectionBrainstormNow__topic: {
    color: theme.palette.brand[300],
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "100%",
    letterSpacing: "3px",
    marginBottom: "8px",
    textTransform: "uppercase"
  },
  sectionBrainstormNow__title: {
    color: theme.palette.common.white,
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "110%",
    marginBottom: "32px",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800
    }
  },
  sectionBrainstormNow__description: {
    color: theme.palette.common.white,
    fontSize: "16px",
    lineHeight: "140%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "160%"
    },

    "& > span": {
      fontSize: "16px",
      lineHeight: "140%",
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
        lineHeight: "160%"
      }
    }
  },
  sectionBrainstormNow__button: {
    background: theme.palette.brand["50"],
    borderRadius: "50px",
    boxShadow:
      "0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    color: theme.palette.common.white,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    padding: "20px 48px",
    textTransform: "initial",

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  },
  sectionBrainstormNow__ellipses: {
    left: "-70px",
    bottom: "-290px",
    position: "absolute",
    [theme.breakpoints.up(1024)]: {
      bottom: "0px",
      display: "block",
    }
  },
  sectionBrainstormNow__phones: {
    display: "none",
    [theme.breakpoints.up(1024)]: {
      display: "block",
      bottom: "0px",
      right: "0px",
      position: "absolute"
    }
  }
})
