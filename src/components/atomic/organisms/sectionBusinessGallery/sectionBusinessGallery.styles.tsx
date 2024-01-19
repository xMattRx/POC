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
      justifyContent: "space-between",
      paddingTop: "80px",
      paddingRight: "80px",
      gap: "0px"
    }
  },

  sectionBusinessGallery__left: {
    display: "none",
    padding: "0 0 0 16px",
    [theme.breakpoints.up("md")]: {
      alignSelf: "baseline",
      flexDirection: "column",
      gap: "30px",
      padding: "0 0 0 80px",
      width: "100%"
    }
  },
  sectionBusinessGallery__text: {
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      alignSelf: "flex-start",
      boxSizing: "content-box",
      maxWidth: "625px",
      width: "100%"
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
      maxWidth: "460px",
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
      marginBottom: "32px",
      maxWidth: "470px"
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
  sectionBusinessGallery__galleryDown: {
    [theme.breakpoints.up("md")]: {
      gap: "30px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  },
  sectionBusinessGallery__picture7: {
    [theme.breakpoints.up("md")]: {
      height: "240px",
      maxWidth: "459px",
      width: "100%"
    }
  },
  sectionBusinessGallery__picture8: {
    [theme.breakpoints.up("md")]: {
      display: "block",
      height: "210px",
      maxWidth: "135px",
      width: "100%"
    }
  },
  sectionBusinessGallery__gallery: {
    display: "flex",
    justifyContent: "center",
    height: "638px",
    [theme.breakpoints.up("md")]: {
      height: "1120px",
      width: "100%"
    }
  },
  sectionBusinessGallery__galleryContent: {
    display: "none",
    flexWrap: "wrap",
    height: "630px",
    maxWidth: "390px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
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
    [theme.breakpoints.up("md")]: {
      alignSelf: "end",
      height: "210px",
      maxWidth: "135px",
      width: "100%"
    }
  },
  sectionBusinessGallery__picture2: {
    [theme.breakpoints.up("md")]: {
      height: "240px",
      width: "100%",
      maxWidth: "459px"
    }
  },
  sectionBusinessGallery__picture3: {
    [theme.breakpoints.up("md")]: {
      height: "312px",
      maxWidth: "624px",
      width: "100%",
    }
  },
  sectionBusinessGallery__picture4: {
    [theme.breakpoints.up("md")]: {
      display: "block",
      height: "210px",
      maxWidth: "135px",
      width: "100%"
    }
  },
  sectionBusinessGallery__picture5: {
    [theme.breakpoints.up("md")]: {
      display: "block",
      height: "240px",
      maxWidth: "459px",
      width: "100%"
    }
  },
  sectionBusinessGallery__picture6: {
    [theme.breakpoints.up("md")]: {
      alignSelf: "flex-end",
      marginTop: "-195px",
      height: "210px",
      maxWidth: "135px",
      width: "100%"
    }
  }
})
