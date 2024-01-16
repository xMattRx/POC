import { Box, Typography } from "@mui/material"
import { SectionSimilarStyles } from "./sectionSimilar.styles"
import Slides from "../slides/slides"

export function SectionSimilar() {
  const styles = SectionSimilarStyles()

  return (
    <Box sx={styles.sectionSimilar} component="section">
      <Box sx={styles.sectionSimilar__content}>
        <Typography sx={styles.sectionSimilar__title}>
          Find similar stories
        </Typography>
        <Typography sx={styles.sectionSimilar__description}>
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </Typography>
        <Slides/>
      </Box>
    </Box>
  )
}
