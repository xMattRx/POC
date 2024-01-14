import { SxProps } from "@mui/material"
import { theme } from "../../../../libs/theme"

type MuiStyles = {
    [key: string]: SxProps
  }

export const LogoStyles = (): 
MuiStyles => ({
  Logo:{
    color: theme.palette.brand["50"],
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "110%",
    '& > span':{
      color: theme.palette.brand["100"],
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "110%",
    }
  }
})