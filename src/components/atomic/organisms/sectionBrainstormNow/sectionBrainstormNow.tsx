import { Box, Button, Typography } from "@mui/material"
import { SectionBrainstormNowStyles } from "./sectionBrainstormNow.styles"

export function SectionBrainstormNow() {
  const styles = SectionBrainstormNowStyles()

  return (
    <Box sx={styles.sectionBrainstormNow} component="section">
      <Box sx={styles.sectionBrainstormNow__iconsContainer}>
        <Box sx={styles.sectionBrainstormNow__content}>
          <Typography sx={styles.sectionBrainstormNow__topic}>
            Start Building ideas
          </Typography>
          <Typography sx={styles.sectionBrainstormNow__title}>
            Brainstorm now!
          </Typography>
          <Typography sx={styles.sectionBrainstormNow__description}>
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            <br />
            <Typography component="span">
              Risus elit et fringilla habitant ut facilisi.
            </Typography>
          </Typography>
          <Button sx={styles.sectionBrainstormNow__button}>
            Start For Free
          </Button>
        </Box>
        <Box
          sx={styles.sectionBrainstormNow__ellipses}
          component="img"
          src="./img/sectionBusinessGallery/Ellipses_Brainstorm.svg"
        />
        <Box
          sx={styles.sectionBrainstormNow__phones}
          component="img"
          src="./img/sectionBusinessGallery/Iphones.svg"
        />
      </Box>
    </Box>
  )
}
