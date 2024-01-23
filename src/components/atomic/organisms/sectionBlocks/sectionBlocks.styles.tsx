import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionBlocksStyles = (): MuiStyles => ({
  sectionBlocks: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  sectionBlocks__content: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    justifyContent: "center",
    maxWidth: "1440px",
    padding: "48px 16px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: "64px",
      padding: "80px",
    }
  },
})
