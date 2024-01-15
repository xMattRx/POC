import { Box, SxProps } from "@mui/material";

interface ImageBoxProps {
    style: SxProps;
    imagePath: string;
  }
  
  export const ImageBox = ({ style, imagePath }: ImageBoxProps) => (
    <Box sx={{ ...style, background: `url('${imagePath}')` }}></Box>
  );