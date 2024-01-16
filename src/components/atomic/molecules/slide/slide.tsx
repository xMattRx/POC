import { Box, Button, Typography } from "@mui/material"
import { SlideStyles } from "./slide.styles"
import Link from "next/link"
import { theme } from "../../../../libs/theme"
import { IconArrowNarrowRight } from "@tabler/icons-react"

export default function Slide() {
  const styles = SlideStyles()

  return (
    <Box sx={styles.slide}>
      <Box sx={styles.slide__container}>
        <Box sx={styles.slide__image}>
          <Box sx={styles.slide__content}>
            <Typography sx={styles.slide__topic}>Artist & investor</Typography>
            <Typography sx={styles.slide__description}>
              Enim sagittis, sit porttitor morbi lobortis amet, libero
              adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
              Egestas ac arcu amet nisl quis est ...
            </Typography>
            <Button sx={styles.slide__link}>
              <Link href="#">Read Full Story</Link>
              <IconArrowNarrowRight color={theme.palette.brand[50]} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
