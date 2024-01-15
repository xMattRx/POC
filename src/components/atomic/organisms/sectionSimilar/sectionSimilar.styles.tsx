import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionSimilarStyles = (): MuiStyles => ({
  sectionSimilar: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  sectionSimilar__content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1440px",
    padding: "48px 16px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "80px"
    }
  },
  sectionSimilar__title: {
    color: theme.palette.brand[200],
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "110%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800,
      lineHeight: "110%"
    }
  },
  sectionSimilar__description: {
    color: theme.palette.brand[200],
    fontSize: "18px",
    lineHeight: "160%",
    marginBottom: "32px",
    textAlign: "center",
  }
})
