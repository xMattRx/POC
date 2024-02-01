import { Box, Typography } from "@mui/material"
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled
} from "@tabler/icons-react"
import Link from "next/link"
import { theme } from "../../../../libs/theme"
import { FooterStyles } from "./footer.styles"

const socialLinks = [
  {
    icon: (
      <IconBrandYoutubeFilled size={24} color={theme.palette.brand["100"]} />
    ),
    href: "#"
  },
  {
    icon: (
      <IconBrandFacebookFilled size={24} color={theme.palette.brand["100"]} />
    ),
    href: "#"
  },
  {
    icon: (
      <IconBrandTwitterFilled size={24} color={theme.palette.brand["100"]} />
    ),
    href: "#"
  },
  {
    icon: <IconBrandInstagram size={24} color={theme.palette.brand["100"]} />,
    href: "#"
  },
  {
    icon: <IconBrandLinkedin size={24} color={theme.palette.brand["100"]} />,
    href: "#"
  }
]

const footerColumns = [
  {
    title: "categories",
    items: [
      "User Interface",
      "User Experience",
      "Digital Media",
      "Lifestyle",
      "Programming",
      "Animation"
    ]
  },
  {
    title: "product",
    items: ["Pricing", "Overview", "Browse", "Accesibility", "Five"]
  },
  {
    title: "solutions",
    items: ["Brainstorming", "Ideation", "Wireframing", "Research"]
  },
  { title: "resources", items: ["Help Center", "Blog", "Tutorials"] },
  {
    title: "support",
    items: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
      "Webinar"
    ]
  },
  { title: "company", items: ["About", "Press", "Events", "Careers"] }
]

const footerLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "#" }
]

export function Footer() {
  const styles = FooterStyles()

  return (
    <Box sx={styles.footer} component="footer">
      <Box sx={styles.footer__content}>
        <Box sx={styles.footer__columns}>
          {footerColumns.map((column, columnIndex) => (
            <Box key={columnIndex} sx={styles.footer__column}>
              <Typography sx={styles.footer__title}>{column.title}</Typography>
              {column.items.map((item, index) => (
                <Typography key={index} sx={styles.footer__item}>
                  <Link href="#">{item}</Link>
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
        <Box sx={styles.footer__copyright}>
          <Typography sx={styles.footer__rights}>
            @ 2023 Wrapp. All rights reserved
          </Typography>
          <Box sx={styles.footer__linksAndIcons}>
            <Box sx={styles.footer__socialLinks}>
              {socialLinks.map((socialLink, socialLinkIndex) => (
                <Typography key={socialLinkIndex} sx={styles.footer__social}>
                  <Link href={socialLink.href}>{socialLink.icon}</Link>
                </Typography>
              ))}
            </Box>
            <Box sx={styles.footer__links}>
              {footerLinks.map((link, index) => (
                <Typography key={index} sx={styles.footer__link}>
                  <Link href={link.href}>{link.label}</Link>
                </Typography>
              ))}
            </Box>
            <img src="./img/footer/App_Store.svg" alt="App Store" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
