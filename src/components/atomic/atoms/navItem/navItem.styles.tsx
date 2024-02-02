import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
    [key: string]: SxProps
  }

export const NavItemStyles = (): 
MuiStyles => ({
  Navbar__navItem:{
    alignContent: "center",
    display: "flex",
    fontWeight: "500",
    lineHeight: "24px",
    fontSize: "24px",
    letterSpacing: "0.5px",
    padding: "12px 8px",
    [theme.breakpoints.up(769)]: {
      fontSize: "16px",
      padding: "12px 8px",

    },
    "& > a":{
      color: theme.palette.brand["200"],
      textDecoration: "none",
    }
  },
  
})