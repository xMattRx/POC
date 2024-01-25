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
    [theme.breakpoints.up("lg")]: {
      paddingTop: "80px",
      paddingRight: "80px"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingRight: "0px"
    }
  },

  sectionBusinessGallery__left: {
    display: "flex",
    padding: "0 16px 0 16px",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
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
    [theme.breakpoints.up("lg")]: {
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
      marginBottom: "82px"
    },

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  },
  sectionBusinessGallery__galleryDown: {
    display: "grid",
    gap: "12px",
    justifyItems: "end",
    gridTemplateRows:"0fr",
    height: "68%",
    gridArea: "area1",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      gridTemplateColumns: "1fr 2fr 2fr",
      gridTemplateRows: "168px 155px",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "30px",
      paddingLeft: "30px"
    },
    "& > img": {
      borderRadius: "5px",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
    }
  },
  sectionBusinessGallery__picture7: {
    objectFit: "cover",
    objectPosition: "-123px 0px",
    height: "108px",
    maxWidth: "207px",
    width: "100%",
    gridRow: 2,
    [theme.breakpoints.up("md")]: {
      height: "100%",
      objectFit: "cover",
      objectPosition: "0px",
      gridRow: "1",
      gridColumn: "2",
      gridColumnStart: "1",
      gridColumnEnd: "4",
      maxWidth: "initial",
    },
    [theme.breakpoints.up("lg")]: {
      gridColumnStart: "2",
    }
  },
  sectionBusinessGallery__picture8: {
    display: "none",
    height: "210px",
    maxWidth: "135px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "block",
      objectFit: "cover",
      gridRow: 2,
      gridColumn: 2,
      height: "100%",
      maxWidth: "303px",
      width: "100%"
    }
  },
  sectionBusinessGallery__gallery: {
    display: "grid",
    gridTemplateAreas: `'area1 area2'`,
    gridTemplateColumns: "[area1]1fr [area2]4fr",
    gap: "13.80px",
    overflow: "hidden",
    height: "630px",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: "769px",
      gridTemplateColumns: "[area1]1fr [area2]1fr"
    },
    [theme.breakpoints.up("lg")]: {
      height: "1120px"
    }
  },
  sectionBusinessGallery__galleryContent: {
    display: "grid",
    gridTemplateAreas: `
      'picture1 picture2'
      'picture3 picture3'
    `,
    gap: "13.2px",
    height: "630px",
    width: "100%",
    gridArea: "area2",
    justifyItems: "end",
    alignItems: "baseline",
    gridTemplateRows: "0fr 2fr",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-end",
      gap: "30px",
      height: "852px",
      maxWidth: "1440px"
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
      gridTemplateColumns: "1fr 2fr",
      gridTemplateRows: "168px 155px",
    },
    "& > img": {
      borderRadius: "5px",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
    }
  },
  sectionBusinessGallery__picture1: {
    alignSelf: "end",
    gridArea: "picture1",
    height: "94px",
    maxWidth: "61px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "100px",
      height: "167px"
    }
  },
  sectionBusinessGallery__picture2: {
    alignSelf: "end",
    justifySelf: "start",
    gridArea: "picture2",
    height: "116px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      justifySelf: "end",
      height: "168px",
      width: "280px"
    }
  },
  sectionBusinessGallery__picture3: {
    gridArea: "picture3",
    height: "155px",
    maxWidth: "310px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      objectFit: "cover",
      maxWidth: "initial",
      width: "100%"
    }
  },
  sectionBusinessGallery__picture4: {
    display: "none",
    gridArea: "picture4",
    height: "210px",
    maxWidth: "135px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "block",
      gridColumn: 3,
      gridRow: 2,
      height: "100%",
      objectFit: "cover",
      maxWidth: "initial",

    }
  },
  sectionBusinessGallery__picture5: {
    display: "none",
    height: "240px",
    maxWidth: "459px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // display: "flex"
    }
  },
  sectionBusinessGallery__picture6: {
    height: "94px",
    maxWidth: "61px",
    [theme.breakpoints.up("md")]: {
      gridRow: 2,
      gridColumn: 1,
      maxWidth: "initial",
      objectFit: "cover",
      height: "100%",
    }
  }
})
