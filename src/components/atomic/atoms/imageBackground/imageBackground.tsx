import React from "react"
import { Box } from "@mui/material"
import { ImageBackgroundProps } from "./imageBackground.ts"

export function ImageBackground({ sx, img, alt }: ImageBackgroundProps) {
  return <Box component="img" alt={alt} src={img} sx={sx} />
}
