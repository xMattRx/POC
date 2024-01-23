import { Box, Typography } from "@mui/material"
import Link from "next/link"
import React from "react"
import { FooterColumnStyles } from "./footerColumn.styles.tsx"
import { FooterColumnProps } from "./footerColumn.ts"



export function FooterColumn({ title, items }: FooterColumnProps) {
  const styles = FooterColumnStyles()

  return (
    <Box sx={styles.footer__column}>
      <Typography sx={styles.footer__title}>{title}</Typography>
      {items.map((item, index) => (
        <Typography key={index} sx={styles.footer__item}>
          <Link href="#">{item}</Link>
        </Typography>
      ))}
    </Box>
  )
}
