import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionTeamBrainStormingStyles = (): MuiStyles => ({
  sectionTeamBrainStorming: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  sectionTeamBrainStorming__content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    maxWidth: "1440px",
    width: "100%",
    [theme.breakpoints.up("md")]: {}
  },
  sectionTeamBrainStorming__top: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  sectionTeamBrainStorming__picture1: {
    background: "url('./img/Picture1.png')",
    backgroundSize: "cover !important",
    height: "278px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      maxWidth: "715px",
    }
  },
  sectionTeamBrainStorming__informations: {
    alignItems: "center",
    background: theme.palette.brand[100],
    display: "flex",
    flexDirection: "column",
    padding: "48px 16px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      maxWidth: "715px",
      padding: "80px",
    }
  },
  sectionTeamBrainStorming__topic: {
    color: theme.palette.brand[300],
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "100%",
    letterSpacing: "3px",
    marginBottom: "16px",
    textAlign: "center",
    textTransform: "uppercase",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    }
  },
  sectionTeamBrainStorming__title: {
    color: theme.palette.common.white,
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "110%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800,
      textAlign: "left",
    }
  },
  sectionTeamBrainStorming__description: {
    color: theme.palette.common.white,
    fontSize: "16px",
    lineHeight: "140%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "160%",
      textAlign: "left",
    }
  },
  sectionTeamBrainStorming__button: {
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
  sectionTeamBrainStorming__bottom: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    width: "100%"
  },
  sectionTeamBrainStorming__even: {
    height: "54px",
    flex: "2",
    backgroundSize: "cover !important",
    [theme.breakpoints.up("md")]: {
      backgroundSize: "cover !important",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      height: "210px",
      maxWidth: "528px",
      width: "100%"
    }
  },
  sectionTeamBrainStorming__odd: {
    height: "54px",
    flex: "1",
    backgroundSize: "cover !important",
    [theme.breakpoints.up("md")]: {
      backgroundSize: "cover !important",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      height: "210px",
      maxWidth: "177px",
      width: "100%",
    }
  }
})
