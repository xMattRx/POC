import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionIdeasStyles = (): MuiStyles => ({
  sectionIdeas: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  sectionIdeas__content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    maxWidth: "1440px",
    padding: "48px 16px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      gap: "0px",
      padding: "80px"
    }
  },
  sectionIdeas__title: {
    color: theme.palette.brand["200"],
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "110%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "72px",
      marginBottom: "32px"
    }
  },
  sectionIdeas__description: {
    color: theme.palette.brand["200"],
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "140%",
    maxWidth: "744px",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "160%",
      marginBottom: "32px"
    }
  },
  sectionIdeas__button: {
    background: theme.palette.brand["50"],
    borderRadius: "50px",
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: "24px",
    gap: "24px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    padding: "20px 24px 20px 48px",
    textTransform: "initial",
    [theme.breakpoints.up("md")]: {
      marginBottom: "80px"
    },

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  },
  sectionIdeas__watchDemo: {
    alignItems: "center",
    display: "flex",
    gap: "16px",
    flexDirection: "column",
    position: "relative"
  },
  sectionIdeas__image: {
    maxWidth: "1100px",
    padding: "0px 15.5px",
    width: "100%"
  },
  sectionIdeas__cta: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    gap: "16px",
    padding: "12px 24px 12px 8px"
  },
  sectionIdeas__label: {
    color: theme.palette.brand[50],
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    lineHeight: "24px",
    textTransform: "initial"
  },
  sectionIdeas__icon1: {
    height: "213px",
    left: "-85px",
    position: "absolute",
    top: "-9px",
    width: "231px",
    zIndex: "-1",
    [theme.breakpoints.up("md")]: {
      left: "-333px",
      height: "730px",
      top: "-229px",
      width: "793px"
    }
  },
  sectionIdeas__icon2: {
    height: "256px",
    right: "-15px",
    position: "absolute",
    top: "-48px",
    width: "256px",
    zIndex: "-1",
    [theme.breakpoints.up("md")]: {
      right: "-114px",
      top: "-137px",
      height: "730px",
      width: "730px"
    }
  }
})
