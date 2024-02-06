/* eslint-disable prefer-const */
import { Box } from "@mui/material"
import { IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"
import { theme } from "../../../../libs/theme"
import { Button } from "../../atoms/button/button.tsx"
import { Logo } from "../../atoms/logo/logo"
import { NavItem } from "../../atoms/navItem/navItem.tsx"
import { NavbarStyles } from "./navbar.styles"
import { NavbarProps } from "./navbar.ts"

export function Navbar({ menuItems }: NavbarProps) {
  const [handleMenu, setHandleMenu] = useState(false)
  const styles = NavbarStyles(handleMenu)

  const actionMenuHamburguer = () => {
    let value = !handleMenu
    setHandleMenu(value)
  }

  return (
    <Box sx={styles.Navbar} component="header">
      <Box sx={styles.Navbar__content}>
        <Logo />
        <>
          {handleMenu ? (
            <IconX size={24} onClick={actionMenuHamburguer} style={{zIndex:999}} color={theme.palette.brand["100"]} />
          ) : (
            <Box
              sx={styles.Navbar__menuHamburguer}
              component="img"
              onClick={actionMenuHamburguer}
              src="./img/navbar/menu-outline.svg"
              alt="Menu icon"
            />
          )}
        </>
        <Box className={handleMenu ? 'open' : ''} sx={styles.Navbar__menu} component="nav">
          <Box sx={styles.Navbar__navList} component="ul">
            {menuItems.map((item, index) => (
              <NavItem key={index} label={item.label} link={item.link} />
            ))}
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
