import React from "react"
import { Typography } from "@mui/material"
import { DescriptionProps } from "./description.ts"

export function Description({ sx, children }: DescriptionProps) {
  return <Typography sx={sx}>{children}</Typography>
}
