import { SxProps } from "@mui/material";
import { ReactNode } from "react";

type HeadingProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
  children: ReactNode;
  sx: SxProps;
  heading: HeadingProps;
}