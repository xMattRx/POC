import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
    [key: string]: SxProps
  }

export const NavbarStyles = (): 
MuiStyles => ({
  Navbar:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  Navbar__content:{
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1440px',
    padding: "16px",
    width: '100%',
    [theme.breakpoints.up("md")]: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: "38px",
      padding: "24px 80px",
    }
  },
  Navbar__menuHamburguer:{
    cursor: 'pointer',
    [theme.breakpoints.up("md")]: {
      display: 'none',
    }
  },
  Navbar__menu:{
    display: "none",
    [theme.breakpoints.up("md")]: {
      alignItems: 'center',
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    }
  },
  Navbar__navList:{
    listStyle: "none",
    margin: "0",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      gap: "16px"
    }
  },
  Navbar__navItem:{
    alignContent: "center",
    color: theme.palette.brand["200"],
    display: "flex",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    padding: "12px 8px"
  },
  Navbar__actions:{
    [theme.breakpoints.up("md")]: {
      display: "flex",
      gap: "16px"
    },
    "& > a":{
      color: theme.palette.brand["50"],
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.5px",
      padding: "12px 24px",
      textDecoration: "none"
    }
  },
  Navbar__button:{
    background:theme.palette.brand["50"],
    borderRadius: "50px",
    color: theme.palette.common.white,
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    padding: "12px 28px",
    textTransform: "initial",
    
    "&:hover":{
      background:theme.palette.brand["50"],
      opacity: 1
    }
  }
})