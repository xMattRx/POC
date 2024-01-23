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
      paddingTop: "80px",
      paddingRight: "80px",
    }
  },

  sectionBusinessGallery__left: {
    display: "flex",
    padding: "0 0 0 16px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      alignSelf: "baseline",
      gap: "30px",
      padding: "0 0 0 80px",
      width: "100%"
    }
  },
  sectionBusinessGallery__text: {
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      alignSelf: "flex-start",
      boxSizing: "content-box",
      maxWidth: "625px",
      width: "100%"
    },
  
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
      fontSize: "18px",
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
      maxWidth: "460px",
      textAlign: "left"
    },
   
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
      marginBottom: "32px",
      maxWidth: "470px"
    },
   
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
  sectionBusinessGallery__galleryDown: {
    [theme.breakpoints.up("lg")]: {
      gap: "30px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  },
  sectionBusinessGallery__picture7: {
    height: "108px",
    maxWidth: "207px",
    left: "-119px",
    position: "absolute",
    width: "100%",
    top: "585px",
   
  },
  sectionBusinessGallery__picture8: {
    position: "absolute",
      display: "none",
      height: "210px",
      maxWidth: "135px",
      width: "100%"
    
  },
  sectionBusinessGallery__gallery: {
    display: "flex",
    justifyContent: "center",
    height: "630px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "1120px",
    }
  },
  sectionBusinessGallery__galleryContent: {
    display: "flex",
    flexWrap: "wrap",
    height: "630px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-end",
      gap: "30px",
      height: "852px",
      maxWidth: "1440px"
    },
    "& > img": {
      borderRadius: "5px",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
    }
  },
  sectionBusinessGallery__picture1: {
    left: "102px",
    height: "94px",
    maxWidth: "61px",
    top: "21px",
    width: "100%",
    position: "absolute",
  },
  sectionBusinessGallery__picture2: {
    height: "116px",
    position: "absolute",
    right: "-8px"
  },
  sectionBusinessGallery__picture3: {
    height: "155px",
    maxWidth: "310px",
    position: "absolute",
    top: "130px",
    right: "-17px",
    width: "100%",
    
  },
  sectionBusinessGallery__picture4: {
    display: "none",
    height: "210px",
    maxWidth: "135px",
    width: "100%",
  
  },
  sectionBusinessGallery__picture5: {
    display: "none",
    height: "240px",
    maxWidth: "459px",
    width: "100%",
  },
  sectionBusinessGallery__picture6: {
    position: "absolute",
    height: "94px",
    maxWidth: "61px",
    top: "480px",
    left: "28.2px"
    
  
  }
})
