import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionBusinessGalleryStyles = (): MuiStyles => ({
  sectionBusinessGallery: {
    alignItems: "center",
    background: "#F1F5F9",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%"
  },
  sectionBusinessGallery__content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    maxWidth: "1440px",
    paddingTop: "48px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: "80px",
      paddingRight: "80px",
      gap: "0px"
    }
  },
  sectionBusinessGallery__text: {
    alignItems: "center",

    display: "flex",
    flexDirection: "column",
    padding: "0 16px",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      alignSelf: "flex-start",
      boxSizing: "content-box",
      maxWidth: "460px",
      width: "100%",
      padding: "0 0 0 80px"
    }
  },
  sectionBusinessGallery__topic: {
    color: theme.palette.grey[100],
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "100%",
    letterSpacing: "3px",
    marginBottom: "16px",
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    }
  },
  sectionBusinessGallery__title: {
    color: theme.palette.brand[200],
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "100%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800,
      lineHeight: "110%",
      textAlign: "left"
    }
  },
  sectionBusinessGallery__description: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    lineHeight: "140%",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: "18px",
      lineHeight: "160%",
      marginBottom: "32px"
    }
  },
  sectionBusinessGallery__button: {
    background: theme.palette.brand["50"],
    borderRadius: "50px",
    color: theme.palette.common.white,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    marginBottom: "32px",
    padding: "20px 48px",
    textTransform: "initial",

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  },
  sectionBusinessGallery__gallery: {
    display: "flex",
    justifyContent: "center",
    height: "638px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "1120px",
      maxWidth: "789px",
      width: "100%",
    }
  },
  sectionBusinessGallery__galleryContent: {
    position: "relative",
    height: "630px",
    maxWidth: "390px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "960px",
      maxWidth: "1440px"
    },
    "& > img": {
      borderRadius: "5px",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
    }
  },
  sectionBusinessGallery__picture1: {
    height: "94px",
    left: "102px",
    position: "absolute",
    top: "21px",
    width: "61px",
    [theme.breakpoints.up("md")]: {
      left: "initial",
      right: "489px",
      height: "210px",
      width: "135px",
      top: "29px"
    }
  },
  sectionBusinessGallery__picture2: {
    height: "116px",
    position: "absolute",
    right: "-5px",
    top: "0px",
    width: "224px",
    [theme.breakpoints.up("md")]: {
      height: "240px",
      right: "0px",
      width: "459px"
    }
  },
  sectionBusinessGallery__picture3: {
    backgroundSize: "cover",
    height: "155px",
    right: "-20px",
    position: "absolute",
    top: "130px",
    width: "310px",
    [theme.breakpoints.up("md")]: {
      height: "312px",
      width: "624px",
      right: "0px",
      top: "270px"
    }
  },
  sectionBusinessGallery__picture4: {
    backgroundSize: "cover",
    display: "none",
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      display: "block",
      height: "210px",
      width: "135px",
      right: "489px",
      top: "612px"
    }
  },
  sectionBusinessGallery__picture5: {
    backgroundSize: "cover",
    display: "none",
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      display: "block",
      height: "240px",
      width: "459px",
      right: "0px",
      top: "612px"
    }
  },
  sectionBusinessGallery__picture6: {
    backgroundSize: "cover",
    height: "94px",
    left: "28.2px",
    position: "absolute",
    top: "105px",
    width: "61px",
    [theme.breakpoints.up("md")]: {
      left: "0px",
      height: "210px",
      width: "135px",
      top: "216px",
    }
  },
  sectionBusinessGallery__picture7: {
    backgroundSize: "cover",
    height: "108px",
    left: "-118px",
    position: "absolute",
    top: "214px",
    width: "207px",
    [theme.breakpoints.up("md")]: {
      height: "240px",
      left: "-324px",
      top: "456px",
      width: "459px"
    }
  },
  sectionBusinessGallery__picture8: {
    backgroundSize: "cover",
    display: "none",
    position: "absolute",
   
    [theme.breakpoints.up("md")]: {
      display: "block",
      height: "210px",
      left: "-489px",
      top: "523px",
      width: "135px"
    }
  }
})
