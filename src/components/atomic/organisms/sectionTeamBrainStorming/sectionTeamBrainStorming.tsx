import { Box, Typography } from "@mui/material";
import { theme } from "../../../../libs/theme";
import { Button } from "../../atoms/button/button.tsx";
import { ImageBox } from "../../atoms/imageBox/imageBox.tsx";
import { Title } from "../../atoms/title/title.tsx";
import { Topic } from "../../atoms/topic/topic.tsx";
import { SectionTeamBrainStormingStyles } from "./sectionTeamBrainStorming.styles";



export function SectionTeamBrainStorming() {
  const styles = SectionTeamBrainStormingStyles()

  const imageBoxData = [
    './img/sectionTeamBrainStorming/Picture2.png',
    './img/sectionTeamBrainStorming/Picture3.png',
    './img/sectionTeamBrainStorming/Picture4.png',
    './img/sectionTeamBrainStorming/Picture5.png',
  ];

  return (
    <Box sx={styles.sectionTeamBrainStorming} component="section">
      <Box sx={styles.sectionTeamBrainStorming__content}>
        <Box sx={styles.sectionTeamBrainStorming__top}>
          <Box
            sx={styles.sectionTeamBrainStorming__picture1}></Box>
          <Box sx={styles.sectionTeamBrainStorming__informations}>
            <Topic
              color={theme.palette.brand[300]}
              sx={styles.sectionTeamBrainStorming__topic}
            >
              team work
            </Topic>
            <Title
              heading="h1"
              sx={styles.sectionTeamBrainStorming__title}
            >
              Easily brainstorm with your team
            </Title>
            <Typography
              component="p"
              sx={styles.sectionTeamBrainStorming__description}
            >
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia.
            </Typography>
            <Button sx={styles.sectionTeamBrainStorming__button}>
              Start For Free
            </Button>
          </Box>
        </Box>
        <Box sx={styles.sectionTeamBrainStorming__bottom}>
        {imageBoxData.map((imagePath, index) => (
            <ImageBox
              key={index}
              style={
                index % 2 === 0
                  ? styles.sectionTeamBrainStorming__even
                  : styles.sectionTeamBrainStorming__odd
              }
              imagePath={imagePath}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
