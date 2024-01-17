import { Box, Button, Typography } from "@mui/material"
import { SectionBusinessGalleryStyles } from "./sectionBusinessGallery.styles"

export function SectionBusinessGallery() {
  const styles = SectionBusinessGalleryStyles()

  return (
    <Box sx={styles.sectionBusinessGallery} component="section">
      <Box sx={styles.sectionBusinessGallery__content}>
        <Box sx={styles.sectionBusinessGallery__text}>
          <Typography sx={styles.sectionBusinessGallery__topic}>
            No limits
          </Typography>
          <Typography sx={styles.sectionBusinessGallery__title}>
            Unlimited ideas for your projects
          </Typography>
          <Typography sx={styles.sectionBusinessGallery__description}>
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </Typography>
          <Button sx={styles.sectionBusinessGallery__button}>
            Start For Free
          </Button>
        </Box>
        <Box sx={styles.sectionBusinessGallery__gallery}>
          <Box sx={styles.sectionBusinessGallery__galleryContent}>
            <Box sx={styles.sectionBusinessGallery__picture1} component="img" src="./img/sectionBusinessGallery/Picture1.png" />
            <Box sx={styles.sectionBusinessGallery__picture2} component="img" src="./img/sectionBusinessGallery/Picture2.png" />
            <Box sx={styles.sectionBusinessGallery__picture3} component="img" src="./img/sectionBusinessGallery/Picture3.png" />
            <Box sx={styles.sectionBusinessGallery__picture4} component="img" src="./img/sectionBusinessGallery/Picture4.png" />
            <Box sx={styles.sectionBusinessGallery__picture5} component="img" src="./img/sectionBusinessGallery/Picture5.png" />
            <Box sx={styles.sectionBusinessGallery__picture6} component="img" src="./img/sectionBusinessGallery/Picture6.png" />
            <Box sx={styles.sectionBusinessGallery__picture7} component="img" src="./img/sectionBusinessGallery/Picture7.png" />
            <Box sx={styles.sectionBusinessGallery__picture8} component="img" src="./img/sectionBusinessGallery/Picture8.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
