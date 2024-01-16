import { Box, Button, Typography } from "@mui/material"
import { IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react"
import { theme } from "../../../../libs/theme"
import { SectionIdeasStyles } from "./sectionIdeas.styles"

export function SectionIdeas() {
  const styles = SectionIdeasStyles()

  return (
    <Box sx={styles.sectionIdeas} component="section">
      <Box sx={styles.sectionIdeas__content}>
        <Typography sx={styles.sectionIdeas__title} component="h2">
          All your ideas in one place
        </Typography>
        <Typography sx={styles.sectionIdeas__description} component="p">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </Typography>
        <Button sx={styles.sectionIdeas__button}>
          Start For Free <IconArrowNarrowRight />
        </Button>
        <Box sx={styles.sectionIdeas__watchDemo}>
          <Box
            sx={styles.sectionIdeas__image}
            src="./img/sectionIdeas/window.svg"
            alt="window image"
            component="img"
          />
          <Button sx={styles.sectionIdeas__cta}>
            <IconPlayerPlay color={theme.palette.brand[50]} />
            <Typography sx={styles.sectionIdeas__label}>Watch Demo</Typography>
          </Button>
          <Box
            component="img"
            src="./img/sectionIdeas/Ellipses1.svg"
            sx={styles.sectionIdeas__icon1}
          />
          <Box
            component="img"
            src="./img/sectionIdeas/Ellipses2.svg"
            sx={styles.sectionIdeas__icon2}
          />
        </Box>
      </Box>
    </Box>
  )
}
