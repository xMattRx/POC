import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Logo } from "../../atoms/logo/logo";
import { NavbarStyles } from "./navbar.styles";

export function Navbar() {
  const styles = NavbarStyles();

  return (
    <Box sx={styles.Navbar}>
      <Box sx={styles.Navbar__content}>
        <Logo />
        <>
          <Box
            sx={styles.Navbar__menuHamburguer}
            component="img"
            src="./img/navbar/menu-outline.svg"
            alt="Menu icon"
          />
        </>

        <Box sx={styles.Navbar__menu} component="nav">
          <Box sx={styles.Navbar__navList} component="ul">
            {["Products", "Solutions", "Pricing", "Resources"].map((item, index) => (
              <Typography key={index} sx={styles.Navbar__navItem} component="li">
                <Link href="#">{item}</Link>
              </Typography>
            ))}
          </Box>
          <Box sx={styles.Navbar__actions}>
            <Link href="#">Log in</Link>
            <Button sx={styles.Navbar__button}>Start For Free</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
