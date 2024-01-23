import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionBusinessStyles = (): MuiStyles => ({
  sectionBusiness: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  sectionBusiness__content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    maxWidth: "1440px",
    padding: "48px 16px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      gap: "80px",
      padding: "80px"
    }
  },
  sectionBusiness__grow: {
    alignItems: "center",
    display: "flex",
    gap: "32px",
    flexDirection: "column",
  },
  sectionBusiness__title: {
    color: theme.palette.brand["200"],
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "110%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800
    }
  },
  sectionBusiness__description: {
    fontSize: "16px",
    lineHeight: "140%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "160%",
    }
  },
  sectionBusiness__button: {
    background: theme.palette.common.white,
    border: `2px solid ${theme.palette.brand[50]}`,
    borderRadius: "50px",
    color: theme.palette.brand[50],
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    padding: "16px 32px",
    textTransform: "initial"
  },
  sectionBusiness__unlimited: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  sectionBusiness__unlimitedImage: {
    height: "311px",
    maxWidth: "360px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "412px",
      maxWidth: "600px",
      
    }
  },
  sectionBusiness__unlimitedContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      maxWidth: "600px",
      marginBottom: "75px"
    },
  },
  sectionBusiness__unlimitedTopic: {
    color: theme.palette.grey[100],
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "100%",
    letterSpacing: "3px",
    marginBottom: "16px",
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    }
  },
  sectionBusiness__unlimitedTitle: {
    color: theme.palette.brand[200],
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "110%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800,
      textAlign: "left"
    }
  },
  sectionBusiness__unlimitedDescription: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    lineHeight: "140%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "160%",
      textAlign: "left"
    }
  }
})
