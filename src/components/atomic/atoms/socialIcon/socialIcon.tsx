import { Typography } from "@mui/material"
import Link from "next/link"
import { SocialIconStyles } from "./socialIcon.styles.tsx"
import { SocialIconProps } from "./socialIcon.ts"

export function SocialIcon({ icon, href }: SocialIconProps) {
  const styles = SocialIconStyles()

  return (
    <Typography sx={styles.footer__social}>
      <Link href={href}>{icon}</Link>
    </Typography>
  )
}
