import React from "react"
import Link from "next/link";
import { Typography } from "@mui/material";
import { NavItemStyles } from "./navItem.styles";
import { NavItemProps } from "./navItem.ts"


export function NavItem({ label, link }:NavItemProps) {
  const styles = NavItemStyles()
  return (
    <Typography sx={styles.Navbar__navItem} component="li">
      <Link href={link}>{label}</Link>
    </Typography>
  )
}


