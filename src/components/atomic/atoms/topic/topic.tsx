import { Typography } from "@mui/material"
import React from "react"
import { TopicProps } from "./topic.ts"

export function Topic({ sx, children, color }: TopicProps) {
  return <Typography sx={{ ...sx, color: color }}>{children}</Typography>
}
