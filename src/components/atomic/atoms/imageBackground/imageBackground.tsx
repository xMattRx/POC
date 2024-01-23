import React from "react"
import { Box } from "@mui/material"
import { ImageBackgroundProps } from "./imageBackground.ts"

export function ImageBackground({ sx, img }: ImageBackgroundProps) {
  return <Box component="img" src={img} sx={sx} />
}
