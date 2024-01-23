import { Box, Typography } from "@mui/material"
import { IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Title } from "../../atoms/title/title.tsx"
import { SectionIdeasStyles } from "./sectionIdeas.styles"
import { Description } from "../../atoms/description/description.tsx"
import { ImageBackground } from "../../atoms/imageBackground/imageBackground.tsx"

export function SectionIdeas() {
  const styles = SectionIdeasStyles()

  return (
    <Box sx={styles.sectionIdeas} component="section">
      <Box sx={styles.sectionIdeas__content}>
        <Title sx={styles.sectionIdeas__title} heading="h2">
          All your ideas in one place
        </Title>
        <Description sx={styles.sectionIdeas__description}>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </Description>
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
          <ImageBackground
            img="./img/sectionIdeas/Ellipses1.svg"
            sx={styles.sectionIdeas__icon1}
          />
          <ImageBackground
            img="./img/sectionIdeas/Ellipses2.svg"
            sx={styles.sectionIdeas__icon2}
          />
        </Box>
      </Box>
    </Box>
  )
}
