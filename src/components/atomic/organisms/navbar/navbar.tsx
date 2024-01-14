import { Box, Button } from "@mui/material"
import { Logo } from "../../atoms/logo/logo"
import { NavbarStyles } from "./navbar.styles"
import Link from "next/link"

export function Navbar() {
  const styles = NavbarStyles()
  return (
    <Box sx={styles.Navbar}>
      <Box sx={styles.Navbar__content}>
        <Logo />
        <Box
          sx={styles.Navbar__menuHamburguer}
          src={"./img/menu-outline.svg"}
          component="img"
        />
        <Box sx={styles.Navbar__menu}>
          <Box sx={styles.Navbar__navList} component="ul">
            <Box sx={styles.Navbar__navItem} component="li">
              Products
            </Box>
            <Box sx={styles.Navbar__navItem} component="li">
              Solutions
            </Box>
            <Box sx={styles.Navbar__navItem} component="li">
              Pricing
            </Box>
            <Box sx={styles.Navbar__navItem} component="li">
              Resources
            </Box>
          </Box>
          <Box sx={styles.Navbar__actions}>
            <Link href="#">Log in</Link>
            <Button sx={styles.Navbar__button}>Start For Free</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
