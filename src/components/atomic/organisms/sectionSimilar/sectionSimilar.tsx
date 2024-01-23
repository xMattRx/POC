import { Box } from "@mui/material"
import React from "react"
import { Description } from "../../atoms/description/description.tsx"
import { Title } from "../../atoms/title/title.tsx"
import Slides from "../slides/slides"
import { SectionSimilarStyles } from "./sectionSimilar.styles"
import { SectionSimilarProps } from "./sectionSimilar.ts"



export function SectionSimilar({slides}: SectionSimilarProps) {
  const styles = SectionSimilarStyles()

  return (
    <Box sx={styles.sectionSimilar} component="section">
      <Box sx={styles.sectionSimilar__content}>
        <Title heading="h2" sx={styles.sectionSimilar__title}>
          Find similar stories
        </Title>
        <Description sx={styles.sectionSimilar__description}>
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </Description>
        <Slides slides={slides} />
      </Box>
    </Box>
  )
}
