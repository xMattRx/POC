import React from "react"
import { Box } from "@mui/material"
import { ImageBoxProps } from "./imageBox.ts"

export const ImageBox = ({ style, imagePath }: ImageBoxProps) => (
  <Box sx={{ ...style, background: `url('${imagePath}')` }}></Box>
)
