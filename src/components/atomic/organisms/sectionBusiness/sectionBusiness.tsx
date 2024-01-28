import { Box } from "@mui/material"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Description } from "../../atoms/description/description.tsx"
import { Title } from "../../atoms/title/title.tsx"
import { Topic } from "../../atoms/topic/topic.tsx"
import { SectionBusinessStyles } from "./sectionBusiness.styles"

export function SectionBusiness() {
  const styles = SectionBusinessStyles()

  return (
    <Box sx={styles.sectionBusiness} component="section">
      <Box sx={styles.sectionBusiness__content}>
        <Box sx={styles.sectionBusiness__grow}>
          <Title sx={styles.sectionBusiness__title} heading="h1">
            Get your business to grow fast
          </Title>
          <Description sx={styles.sectionBusiness__description}>
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </Description>
          <Button sx={styles.sectionBusiness__button}>View Product Tour</Button>
        </Box>

        <Box sx={styles.sectionBusiness__unlimited}>
          <Box component="picture">
            <Box
              component="source"
              media="(min-width:768px)"
              srcSet="./img/sectionBusiness/window-desktop.png"
            />
            <Box
              component="img"
              src="./img/sectionBusiness/window-mobile.png"
              alt="window with photo"
              sx={styles.sectionBusiness__unlimitedImage}
            />
          </Box>
          <Box sx={styles.sectionBusiness__unlimitedContent}>
            <Topic
              color={theme.palette.grey[100]}
              sx={styles.sectionBusiness__unlimitedTopic}
            >
              No limits
            </Topic>
            <Title heading="h1" sx={styles.sectionBusiness__unlimitedTitle}>
              Unlimited ideas for your projects
            </Title>
            <Description sx={styles.sectionBusiness__unlimitedDescription}>
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia.
            </Description>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
