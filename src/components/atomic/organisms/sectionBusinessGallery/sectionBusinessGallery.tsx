import React from "react"
import { Box, Typography } from "@mui/material"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Title } from "../../atoms/title/title.tsx"
import { Topic } from "../../atoms/topic/topic.tsx"
import { SectionBrainstormNow } from "../sectionBrainstormNow/sectionBrainstormNow.tsx"
import { SectionBusinessGalleryStyles } from "./sectionBusinessGallery.styles"

const images = [
  { src: "./img/sectionBusinessGallery/Picture6.png", alt: "holding a lamp" },
  { src: "./img/sectionBusinessGallery/Picture8.png", alt: "small plant" },
  { src: "./img/sectionBusinessGallery/Picture7.png", alt: "word idea" },
  { src: "./img/sectionBusinessGallery/Picture4.png", alt: "two friends doing a project" },
  { src: "./img/sectionBusinessGallery/Picture1.png", alt: "girl pointing at light bulb" },
  { src: "./img/sectionBusinessGallery/Picture2.png", alt: "holding a light bulb with both hands" },
  { src: "./img/sectionBusinessGallery/Picture3.png", alt: "brainstorm meeting" },
  { src: "./img/sectionBusinessGallery/Picture5.png", alt: "light on" }
]

export function SectionBusinessGallery() {
  const styles = SectionBusinessGalleryStyles()

  return (
    <Box sx={styles.sectionBusinessGallery} component="section">
      <Box sx={styles.sectionBusinessGallery__content}>
        <Box sx={styles.sectionBusinessGallery__text}>
          <Topic color={theme.palette.grey[100]} sx={styles.sectionBusinessGallery__topic}>
            No limits
          </Topic>
          <Title sx={styles.sectionBusinessGallery__title} heading="h1">
            Unlimited ideas for your projects
          </Title>
          <Typography sx={styles.sectionBusinessGallery__description}>
            Explore a world of endless possibilities and ignite your creativity.
          </Typography>
          <Button sx={styles.sectionBusinessGallery__button}>
            Start For Free
          </Button>
        </Box>

        {images.map((image, index) => (
          <Box
            key={index}
            sx={styles[`sectionBusinessGallery__picture${index + 1}`]}
            component="img"
            src={image.src}
            alt={image.alt}
          />
        ))}

        <SectionBrainstormNow />
      </Box>
    </Box>
  )
}
