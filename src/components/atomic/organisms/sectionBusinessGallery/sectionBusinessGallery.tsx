import { Box, Typography } from "@mui/material"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Title } from "../../atoms/title/title.tsx"
import { Topic } from "../../atoms/topic/topic.tsx"
import { SectionBrainstormNow } from "../sectionBrainstormNow/sectionBrainstormNow.tsx"
import { SectionBusinessGalleryStyles } from "./sectionBusinessGallery.styles"

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
          alt="holding a lamp"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture8}
          component="img"
          src="./img/sectionBusinessGallery/Picture8.png"
          alt="small plant"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture7}
          component="img"
          src="./img/sectionBusinessGallery/Picture7.png"
          alt="word idea"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture4}
          component="img"
          src="./img/sectionBusinessGallery/Picture4.png"
          alt="two friends doing a project"
          />

        <Box
          sx={styles.sectionBusinessGallery__picture1}
          component="img"
          src="./img/sectionBusinessGallery/Picture1.png"
          alt="girl pointing at light bulb"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture2}
          component="img"
          src="./img/sectionBusinessGallery/Picture2.png"
          alt="holding a light bulb with both hands"
        />
        <Box
          sx={styles.sectionBusinessGallery__picture3}
          component="img"
          src="./img/sectionBusinessGallery/Picture3.png"
          alt="brainstorm meeting"
        />

        <Box
          sx={styles.sectionBusinessGallery__picture5}
          component="img"
          src="./img/sectionBusinessGallery/Picture5.png"
          alt="light on"
        />

        <SectionBrainstormNow />
      </Box>
    </Box>
  )
}
