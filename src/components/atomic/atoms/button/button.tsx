import React from "react"
import { Button as MuiButton } from "@mui/material"
import { ButtonProps } from "./button.ts"

export function Button({ sx, children }: ButtonProps) {
  return <MuiButton sx={sx}>{children}</MuiButton>
}
