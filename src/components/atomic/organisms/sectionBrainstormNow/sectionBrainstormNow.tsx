import { Box, Typography } from "@mui/material"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Description } from "../../atoms/description/description.tsx"
import { ImageBackground } from "../../atoms/imageBackground/imageBackground.tsx"
import { Title } from "../../atoms/title/title.tsx"
import { Topic } from "../../atoms/topic/topic.tsx"
import { SectionBrainstormNowStyles } from "./sectionBrainstormNow.styles"

export function SectionBrainstormNow() {
  const styles = SectionBrainstormNowStyles()

  return (
    <Box sx={styles.sectionBrainstormNow} component="section">
      <Box sx={styles.sectionBrainstormNow__iconsContainer}>
        <Box sx={styles.sectionBrainstormNow__content}>
          <Topic
            color={theme.palette.brand[300]}
            sx={styles.sectionBrainstormNow__topic}
          >
            Start Building ideas
          </Topic>
          <Title heading="h1" sx={styles.sectionBrainstormNow__title}>
            Brainstorm now!
          </Title>
          <Description sx={styles.sectionBrainstormNow__description}>
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            <br />
            <Typography component="span">
              Risus elit et fringilla habitant ut facilisi.
            </Typography>
          </Description>
          <Button sx={styles.sectionBrainstormNow__button}>
            Start For Free
          </Button>
        </Box>
        <ImageBackground
          sx={styles.sectionBrainstormNow__ellipses}
          img="./img/sectionBusinessGallery/Ellipses_Brainstorm.svg"
        />
        <ImageBackground
          sx={styles.sectionBrainstormNow__phones}
          img="./img/sectionBusinessGallery/Iphones.svg"
        />
      </Box>
    </Box>
  )
}
