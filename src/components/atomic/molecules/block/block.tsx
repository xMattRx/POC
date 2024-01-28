import { Box } from "@mui/material";
import { Description } from "../../atoms/description/description.tsx";
import { Title } from "../../atoms/title/title.tsx";
import { BlockStyles } from "./block.styles";
import { BlockProps } from "./block.ts";

export function Block({color,img, alt, title,description}:BlockProps) {
  const styles = BlockStyles(color)

  return (
    <Box sx={styles.block__block}>
      <Box
        sx={styles.block__img}
        component="img"
        alt={alt}
        src={img}
      />
      <Title sx={styles.block__title} heading="h1">
        {title}
      </Title>
      <Description sx={styles.block__description}>
        {description}
      </Description>
    </Box>
  )
}
