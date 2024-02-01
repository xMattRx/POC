import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const SectionBusinessGalleryStyles = (variation: number): MuiStyles => ({
  sectionBusinessGallery: {
    alignItems: "center",
    background: "#F1F5F9",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "1000px",
    [theme.breakpoints.up("md")]: {
      height: "1115px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "1193px"
    }
  },

  sectionBusinessGallery__content: {
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "1440px",
    paddingTop: "48px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 61px 110px repeat(1, 1fr)",
    gridTemplateRows: "repeat(2, 1fr) 118px 118px repeat(1, 1fr)",
    gap: "14px",
    [theme.breakpoints.up("lg")]: {
      paddingTop: "80px",
      paddingLeft: variation === 1 ? "80px" : "0px",
      paddingRight: variation === 1 ? "80px" : "0px",
      display: "grid",
      gap: "30.03px",
      gridTemplateColumns:
        variation === 1 ? "repeat(7, 1fr)" : "repeat(6, 1fr)",
      gridTemplateRows:
        variation === 1 ? "240px repeat(2, 1fr)" : "375px repeat(5, 1fr)"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingRight: "0px"
    },
    "& > img": {
      borderRadius: "5px",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
    }
  },

  sectionBusinessGallery__text: {
    gridArea: "1 / 1 / 2 / 5",
    alignSelf: "baseline",
    justifySelf: "center",
    [theme.breakpoints.up("lg")]: {
      
      justifySelf: "start",
      display: "block",
      alignSelf: "start",
      gridArea: variation === 1 ? "1 / 1 / 2 / 4" : "1 / 3 / 3 / 5",
      width: "460px"
    }
  },

  sectionBusinessGallery__cta: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gridArea: "2 / 1 / 4 / 5",
    gridRowStart: 1,
    gridRowEnd: 0,
    marginTop: "40px",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "center",
      justifyContent: variation === 1 ? "initial" : "flex-start",
      display: variation === 1 ? "block" : "flex",
      gridArea: variation === 1 ? "2 / 1 / 3 / 3" : "3 / 3 / 4 / 5",
      marginTop: "360px",
      gridColumnStart: 3,
      gridColumnEnd: 5,
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
      textAlign: "center"
    }
  },

  sectionBusinessGallery__title: {
    color: theme.palette.brand[200],
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "100%",
    maxWidth: "361px",
    marginBottom: "32px",
    textAlign: "center",
    gridArea: "1 / 1 / 3 / 5",
    [theme.breakpoints.up("lg")]: {
      fontSize: "56px",
      fontWeight: 800,
      lineHeight: "110%",
      maxWidth: "460px",
      textAlign: "center"
    }
  },
  sectionBusinessGallery__description: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    lineHeight: "140%",
    maxWidth: "361px",
    marginBottom: "32px",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      gridArea: "2 / 1 / 3 / 3",
      maxWidth: "initial",
      gridColumnEnd: "4",
      fontSize: "18px",
      lineHeight: "160%",
      marginBottom: "32px",
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
      // gridArea: variation === 1 ? "2 / 1 / 3 / 3" : "3 / 3 / 4 / 5",
    },

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  },

  sectionBusinessGallery__picture7: {
    objectFit: "cover",
    alignSelf: "start",
    height: "108px",
    width: "100%",
    gridArea: "4 / 1 / 6 / 1",
    marginTop: "106px",
    [theme.breakpoints.up("lg")]: {
      gridArea: variation === 1 ? "3 / 2 / 4 / 4" : "4 / 3 / 6 / 5",
      justifySelf: "end",
      gridRowStart: "4",
      gridRowEnd: "1",
      height: "240px",
      marginTop: "456px",
      maxWidth: "initial",
      width: "459px"
    }
  },
  sectionBusinessGallery__picture8: {
    objectFit: "cover",
    display: "none",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      alignSelf: "start",
      gridArea: variation === 1 ? "3 / 1 / 4 / 2" : "4 / 2 / 5 / 3",
      maxWidth: "135px",
      marginTop: "-110px",
      height: "210px"
    }
  },

  sectionBusinessGallery__picture1: {
    objectFit: "cover",
    alignSelf: "start",
    height: "94px",
    maxWidth: "61px",
    width: "100%",
    gridArea: "3 / 2 / 4 / 3",
    justifySelf: "end",
    marginTop: "53px",
    [theme.breakpoints.up("lg")]: {
      display: "none",
      alignSelf: "start",
      marginTop: "29px",
      height: "210px",
      maxWidth: "135px",
      gridArea: "1 / 4 / 2 / 5"
    }
  },
  sectionBusinessGallery__picture2: {
    objectFit: "cover",
    alignSelf: "start",
    height: "116px",
    marginTop: "32px",
    width: "100%",
    gridArea: "3 / 3 / 7 / 5",
    justifySelf: "end",
    [theme.breakpoints.up("lg")]: {
      alignSelf: "start",
      marginTop: "0px",
      maxWidth: "459px",
      gridArea: variation === 1 ? "1 / 5 / 2 / 7" : "3 / 2 / 4 / 3",
      gridColumnStart: 8,
      gridColumnEnd: 5,
      height: "240px"
    }
  },
  sectionBusinessGallery__picture3: {
    objectFit: "cover",
    height: "155px",
    width: "100%",
    gridArea: "4 / 2 / 5 / 5",
    marginTop: "29px",
    justifySelf: "start",
    alignSelf: "start",
    [theme.breakpoints.up("lg")]: {
      marginTop: "0px",
      marginLeft: "0px",
      boxShadow:
        "0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      height: "312px",
      maxWidth: "664px",
      gridArea: variation === 1 ? "2 / 4 / 3 / 7" : "3 / 5 / 5 / 7",
      gridColumnStart: "4",
      gridColumnEnd: "8"
    }
  },
  sectionBusinessGallery__picture4: {
    objectFit: "cover",
    display: "none",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      alignSelf: "start",
      gridArea: variation === 1 ? "3 / 4 / 4 / 5" : "5 / 5 / 6 / 6",
      height: "210px",
      objectFit: "cover",
      maxWidth: "135px"
    }
  },
  sectionBusinessGallery__picture5: {
    objectFit: "cover",
    display: "none",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      alignSelf: "start",
      gridArea: variation === 1 ? "3 / 5 / 4 / 7" : "2 / 1 / 3 / 2",
      maxWidth: variation === 1 ? "459px" : "282px",
      height: variation === 1 ? "240px" : "134px",
      marginTop: variation === 2 && "152px",
      gridColumnStart: variation === 1 ? "5" : "",
      gridColumnEnd: variation === 1 ? "8" : "4",
    }
  },
  sectionBusinessGallery__picture6: {
    objectFit: "cover",
    alignSelf: "start",
    height: "94px",
    justifySelf: "end",
    maxWidth: "61px",
    width: "100%",
    gridArea: "4 / 1 / 5 / 2",
    gridColumnStart: "2",
    marginRight: "74px",
    [theme.breakpoints.up("lg")]: {
      marginRight: "0px",
      alignSelf: variation === 1 ? "start" : "start",
      gridArea: variation === 1 ? "2 / 3 / 3 / 4" : "3 / 1 / 5 / 2",
      justifySelf: variation === 1 ? "end" : "start",
      gridRowStart: "2",
      gridRowEnd: "1",
      marginTop: variation === 1 ? "219px" : "309px",
      maxWidth: "initial",
      height: "210px",
      width: "135px"
    }
  }
})
