import React from "react"
import { Typography } from "@mui/material"
import { TitleProps } from "./title.ts"

export function Title({ sx, children, heading }: TitleProps) {
  return (
    <Typography sx={sx} component={heading}>
      {children}
    </Typography>
  )
}
