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
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "1193px"
    }
  },
  sectionBusinessGallery__content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    maxWidth: "1440px",
    paddingTop: "48px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      paddingTop: "80px",
      paddingLeft: "80px",
      paddingRight: "80px",
      display: "grid",
      gap: "30.03px",
      gridTemplateColumns: "repeat(7, 1fr)",
      gridTemplateRows: "240px repeat(2, 1fr)"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingRight: "0px"
    }
  },

  sectionBusinessGallery__text: {
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      gridArea: "1 / 1 / 2 / 4",
      width: "460px"
    }
  },
  sectionBusinessGallery__cta: {
    [theme.breakpoints.up("lg")]: {
      gridArea: "2 / 1 / 3 / 3",
      marginTop: "360px",
      gridColumnEnd: 4,
      gridRowStart: 2,
      gridRowEnd: 1,
      height: "100%"
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
    [theme.breakpoints.up("lg")]: {
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
    [theme.breakpoints.up("lg")]: {
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
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      gridArea: "2 / 1 / 3 / 3",
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
    [theme.breakpoints.up("lg")]: {
      marginBottom: "82px",
      gridArea: "2 / 1 / 3 / 3"
    },

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  },

  "& > img": {
    borderRadius: "5px",
    boxShadow:
      "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
  },

  sectionBusinessGallery__picture7: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      gridArea: "3 / 2 / 4 / 4",
      justifySelf: "end",
      gridRowStart: "4",
      gridRowEnd: "1",
      height: "240px",
      marginTop: "216px",
      width: "459px"
    }
  },
  sectionBusinessGallery__picture8: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      gridArea: "3 / 1 / 4 / 2",
      maxWidth: "135px",
      marginTop: "-110px",
      height: "210px"
    }
  },

  sectionBusinessGallery__picture1: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      marginTop: "29px",
      height: "210px",
      maxWidth: "135px",
      gridArea: "1 / 4 / 2 / 5"
    }
  },
  sectionBusinessGallery__picture2: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      maxWidth: "459px",
      gridArea: "1 / 5 / 2 / 7",
      gridColumnStart: 8,
      gridColumnEnd: 5,
      height: "240px"
    }
  },
  sectionBusinessGallery__picture3: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      height: "312px",
      maxWidth: "664px",
      gridArea: "2 / 4 / 3 / 7",
      gridColumnStart: "4",
      gridColumnEnd: "8"
    }
  },
  sectionBusinessGallery__picture4: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      gridArea: "3 / 4 / 4 / 5",
      height: "210px",
      objectFit: "cover",
      maxWidth: "135px"
    }
  },
  sectionBusinessGallery__picture5: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      gridArea: "3 / 5 / 4 / 7",
      maxWidth: "459px",
      height: "240px",
      gridColumnStart: "5",
      gridColumnEnd: "8"
    }
  },
  sectionBusinessGallery__picture6: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      gridArea: "2 / 3 / 3 / 4",
      justifySelf: "end",
      gridRowStart: "2",
      gridRowEnd: "1",
      marginTop: "219px",
      height: "210px",
      width: "135px"
    }
  }
})
