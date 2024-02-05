import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
  [key: string]: SxProps
}

export const NavbarStyles = (handleMenu:boolean): MuiStyles => ({
  Navbar: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  Navbar__content: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    maxWidth: "1440px",
    padding: "16px",
    position: "relative",
    width: "100%",
    [theme.breakpoints.up(1024)]: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: "38px",
      padding: "24px 80px"
    }
  },
  Navbar__menuHamburguer: {
    cursor: "pointer",
    display: "flex",
    zIndex: 9999,
    [theme.breakpoints.up(1024)]: {
      display: "none"
    }
  },
  Navbar__menu: {
    alignItems: "flex-start",
    background: theme.palette.common.white,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    gap: "10px",
    height: "100vh",
    justifyContent: "space-between",
    padding: "10px",
    left: "0px",
    transform: handleMenu ? "translateX(0%)" : "translateX(-100%)",
    top: "0px",
    width: "50vw",
    transition: "transform 0.3s ease",
    zIndex:99,
    [theme.breakpoints.up(1024)]: {
      borderRadius: "0px",
      boxShadow: "none", 
      background: "transparent",
      position: "initial",
      flexDirection: "row",
      alignItems: "center",
      display: "flex",
      height: "auto",
      padding: 0,
      transform: "initial",
      width: "100%"
    }
  },
  Navbar__navList: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: "0",
    marginTop: "60px",
    gap: "10px",
    padding: "0",
    [theme.breakpoints.up(1024)]: {
      marginTop: "0px",
      alignItems: "center",
      flexDirection: "row",
      gap: "16px"
    }
  },
  Navbar__actions: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: "16px"
    },
    "& > a": {
      alignSelf: "flex-start",
      color: theme.palette.brand["50"],
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.5px",
      padding: "6px 12px",
      textDecoration: "none",
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        padding: "12px 24px",
      }
    }
  },
  Navbar__button: {
    background: theme.palette.brand["50"],
    borderRadius: "50px",
    color: theme.palette.common.white,
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    
    textTransform: "initial",
    width: "max-content",
    fontSize: "12px",
    padding: "10px 12px",
    [theme.breakpoints.up(1024)]: {
      padding: "12px 28px",
      fontSize: "14px",
    },

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  }
})
