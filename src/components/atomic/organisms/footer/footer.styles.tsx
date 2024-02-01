import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const FooterStyles = (): MuiStyles => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  footer__content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 16px",
    maxWidth: "1440px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "0 80px"
    }
  },
  footer__columns: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    justifyContent: "center",
    padding: "48px 0px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: "48px",
    }
  },
  footer__column: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      maxWidth: "173px",
      width: "100%"
    }
  },
  footer__title: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "110%",
    textTransform: "uppercase",
    padding: "12px 0"
  },
  footer__item: {
    padding: "12px 0",
    "& > a": {
      color: theme.palette.grey[100],
      fontSize: "16px",
      lineHeight: "140%",
      textDecoration: "none"
    }
  },
  footer__copyright: {
    alignItems: "center",
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexDirection: "column",
    padding: "24px 0px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      padding: "36px 0px",
      flexDirection: "row",
    }
  },
  footer__rights: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      color: theme.palette.brand["100"],
      fontSize: "16px",
      lineHeight: "140%",
    }
  },
  footer__linksAndIcons: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: "48px",
      width: "100%"
    }
  },
  footer__links: {
    display: "flex",
    gap: "24px",
    [theme.breakpoints.up("md")]: {
      padding: "12px 0"
    }
  },
  footer__link: {
    "& > a": {
      lineHeight: "140%",
      color: theme.palette.grey["100"],
      fontSize: "16px",
      textDecoration: "none"
    }
  },
  footer__socialLinks: {
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    height: "24px",
    gap: "24px",
    [theme.breakpoints.up("md")]: {
      gap: "16px",
    }
  },
  footer__social: {
    "& > a": {
      lineHeight: "140%",
      fontSize: "16px",
      textDecoration: "none",
      "& > svg":{
        color: theme.palette.grey["100"],
        stroke: theme.palette.grey["100"],
      }
    }
  },

  footerColumns__title: {
    color: theme.palette.brand[200],
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "110%",
    textTransform: "uppercase",
    padding: "12px 0"
  },
  footerColumns__column: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      maxWidth: "173px",
      width: "100%"
    }
  },
  footerColumns__item: {
    padding: "12px 0",
    "& > a": {
      color: theme.palette.grey[100],
      fontSize: "16px",
      lineHeight: "140%",
      textDecoration: "none"
    }
  },
})
