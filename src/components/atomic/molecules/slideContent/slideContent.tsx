import { Box } from "@mui/material"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Link from "next/link"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Description } from "../../atoms/description/description.tsx"
import { Topic } from "../../atoms/topic/topic.tsx"
import { SlideContentStyles } from "./slideContent.styles"
import React from "react"
import { SlideContentProps } from "./slideContent.ts"



export function SlideContent({ topic, description }: SlideContentProps) {
  const styles = SlideContentStyles()

  return (
    <Box sx={styles.slide__content}>
      <Topic color={theme.palette.grey[100]} sx={styles.slide__topic}>
        {topic}
      </Topic>
      <Description sx={styles.slide__description}>{description}</Description>
      <Button sx={styles.slide__link}>
        <Link href="#">Read Full Story</Link>
        <IconArrowNarrowRight color={theme.palette.brand[50]} />
      </Button>
    </Box>
  )
}
