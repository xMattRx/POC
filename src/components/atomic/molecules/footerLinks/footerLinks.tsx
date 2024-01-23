import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { FooterLinksStyles } from "./footerLinks.styles.tsx"
import { FooterLinksProps } from "./footerLinks.ts"



export function FooterLinks({ links }: FooterLinksProps) {
  const styles = FooterLinksStyles()

  return (
    <Box sx={styles.footer__links}>
      {links.map((link, index) => (
        <Typography key={index} sx={styles.footer__link}>
          <Link href={link.href}>{link.label}</Link>
        </Typography>
      ))}
    </Box>
  )
}
