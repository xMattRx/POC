import { Box, Typography } from "@mui/material";
import { TopicStyles } from "./topic.styles";

interface TopicProps {
  color: string;
  img: string;
  title: string;
  description: string;
}

export function Topic({color,img,title,description}:TopicProps) {
  const styles = TopicStyles(color)

  return (
    <Box sx={styles.topic__block}>
      <Box
        sx={styles.topic__img}
        component="img"
        src={img}
      />
      <Typography sx={styles.topic__title} component="h3">
        {title}
      </Typography>
      <Typography sx={styles.topic__description} component="p">
        {description}
      </Typography>
    </Box>
  )
}
