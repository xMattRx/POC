import { Box, Button, Typography } from "@mui/material"
import { SectionBusinessStyles } from "./sectionBusiness.styles"

export function SectionBusiness() {
  const styles = SectionBusinessStyles()

  return (
    <Box sx={styles.sectionBusiness} component="section">
      <Box sx={styles.sectionBusiness__content}>
        <Box sx={styles.sectionBusiness__grow}>
          <Typography sx={styles.sectionBusiness__title} component="h1">
            Get your business to grow fast
          </Typography>
          <Typography sx={styles.sectionBusiness__description}>
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </Typography>
          <Button sx={styles.sectionBusiness__button}>View Product Tour</Button>
        </Box>

        <Box sx={styles.sectionBusiness__unlimited}>
          <Box sx={styles.sectionBusiness__unlimitedImage}></Box>
          <Box sx={styles.sectionBusiness__unlimitedContent}>
            <Typography sx={styles.sectionBusiness__unlimitedTopic}>
              No limits
            </Typography>
            <Typography sx={styles.sectionBusiness__unlimitedTitle}>
              Unlimited ideas for your projects
            </Typography>
            <Typography sx={styles.sectionBusiness__unlimitedDescription}>
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
