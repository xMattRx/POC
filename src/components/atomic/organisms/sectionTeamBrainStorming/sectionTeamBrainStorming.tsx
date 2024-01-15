import { Box, Button, Typography } from "@mui/material";
import { SectionTeamBrainStormingStyles } from "./sectionTeamBrainStorming.styles";
import { ImageBox } from "../../atoms/imageBox/imageBox";



export function SectionTeamBrainStorming() {
  const styles = SectionTeamBrainStormingStyles()

  const imageBoxData = [
    './img/Picture2.png',
    './img/Picture3.png',
    './img/Picture4.png',
    './img/Picture5.png',
  ];

  return (
    <Box sx={styles.sectionTeamBrainStorming} component="section">
      <Box sx={styles.sectionTeamBrainStorming__content}>
        <Box sx={styles.sectionTeamBrainStorming__top}>
          <Box
            sx={styles.sectionTeamBrainStorming__picture1}></Box>
          <Box sx={styles.sectionTeamBrainStorming__informations}>
            <Typography
              component="h1"
              sx={styles.sectionTeamBrainStorming__topic}
            >
              team work
            </Typography>
            <Typography
              component="h2"
              sx={styles.sectionTeamBrainStorming__title}
            >
              Easily brainstorm with your team
            </Typography>
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
