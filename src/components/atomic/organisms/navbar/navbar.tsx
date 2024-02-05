/* eslint-disable prefer-const */
import { Box } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "../../atoms/button/button.tsx"
import { Logo } from "../../atoms/logo/logo"
import { NavItem } from "../../atoms/navItem/navItem.tsx"
import { NavbarStyles } from "./navbar.styles"
import { NavbarProps } from "./navbar.ts"

export function Navbar({ menuItems }: NavbarProps) {
  const [handleMenu, setHandleMenu] = useState(false)
  const styles = NavbarStyles(handleMenu)

  const actionMenu = (value: boolean) => {
    if (value) {
      document.body.classList.add("close")
    } else {
      document.body.classList.remove("close")
    }
  }

  const actionMenuHamburguer = () => {
    let value = !handleMenu
    setHandleMenu(value)
    actionMenu(value)
  }

  useEffect(() => {
    actionMenu(handleMenu)
  }, [])

  return (
    <Box sx={styles.Navbar} component="header">
      <Box sx={styles.Navbar__content}>
        <Logo />
        <>
          <Box
            sx={styles.Navbar__menuHamburguer}
            component="img"
            onClick={actionMenuHamburguer}
            src="./img/navbar/menu-outline.svg"
            alt="Menu icon"
          />
        </>
        <Box sx={styles.Navbar__menu} component="nav">
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
