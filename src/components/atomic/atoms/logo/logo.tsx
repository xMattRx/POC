import { Typography } from "@mui/material"

import { LogoStyles } from "./logo.styles"

export function Logo() {
  const styles = LogoStyles()
  return (
    <Typography sx={styles.Logo} component="h1">
      <Typography component="span">w</Typography>rap<Typography component="span">p</Typography>
    </Typography>
  )
}
