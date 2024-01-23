import { Box } from "@mui/material"
import React from "react"
import { SlideStyles } from "./slide.styles"
import { SlideProps } from "./slide.ts"
import { SlideContent } from "../slideContent/slideContent.tsx"

export default function Slide({ img, topic, description }: SlideProps) {
  const styles = SlideStyles()

  return (
    <Box sx={styles.slide}>
      <Box sx={styles.slide__container}>
        <Box sx={{ ...styles.slide__image, backgroundImage: img }}>
          <SlideContent description={description} topic={topic} />
        </Box>
      </Box>
    </Box>
  )
}
