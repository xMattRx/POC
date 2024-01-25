import { Box, Typography } from "@mui/material"
import { Button } from "../../atoms/button/button.tsx"
import { Title } from "../../atoms/title/title.tsx"
import { SectionBusinessGalleryStyles } from "./sectionBusinessGallery.styles"
import { theme } from "../../../../libs/theme"
import { Topic } from "../../atoms/topic/topic.tsx"
import { SectionBrainstormNow } from "../sectionBrainstormNow/sectionBrainstormNow.tsx"

export function SectionBusinessGallery() {
  const styles = SectionBusinessGalleryStyles()

  return (
    <Box sx={styles.sectionBusinessGallery} component="section">
      <Box sx={styles.sectionBusinessGallery__content}>
        <Box sx={styles.sectionBusinessGallery__text}>
          <Topic
            color={theme.palette.grey[100]}
            sx={styles.sectionBusinessGallery__topic}
          >
            No limits
          </Topic>
          <Title sx={styles.sectionBusinessGallery__title} heading="h1">
            Unlimited ideas for your projects
          </Title>
        </Box>

        <Box sx={styles.sectionBusinessGallery__cta}>
          <Typography sx={styles.sectionBusinessGallery__description}>
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </Typography>
          <Button sx={styles.sectionBusinessGallery__button}>
            Start For Free
          </Button>
        </Box>

        <Box
          sx={styles.sectionBusinessGallery__picture6}
          component="img"
          src="./img/sectionBusinessGallery/Picture6.png"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture8}
          component="img"
          src="./img/sectionBusinessGallery/Picture8.png"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture7}
          component="img"
          src="./img/sectionBusinessGallery/Picture7.png"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture4}
          component="img"
          src="./img/sectionBusinessGallery/Picture4.png"
        />

        <Box
          sx={styles.sectionBusinessGallery__picture1}
          component="img"
          src="./img/sectionBusinessGallery/Picture1.png"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture2}
          component="img"
          src="./img/sectionBusinessGallery/Picture2.png"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture3}
          component="img"
          src="./img/sectionBusinessGallery/Picture3.png"
        />

        <Box
          sx={styles.sectionBusinessGallery__picture5}
          component="img"
          src="./img/sectionBusinessGallery/Picture5.png"
        />

        <SectionBrainstormNow />
      </Box>
    </Box>
  )
}
