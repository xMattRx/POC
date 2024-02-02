import { Box, Typography } from "@mui/material"
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
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
      {
        label: "User Interface",
        href: "/posts/user-interface"
      },
      {
        label: "User Experience",
        href: "/posts/user-experience"
      },
      {
        label: "Digital Media",
        href: "/posts/digital-media"
      },
      { label: "Lifestyle", href: "/posts/lifestyle" },
      { label: "Programming", href: "/posts/programming" },
      { label: "Animation", href: "/posts/animation" }
    ]
  },
  {
    title: "product",
    items: [
      { label: "Pricing", href: "/pricing" },
      { label: "Overview", href: "/overview" },
      { label: "Browse", href: "/browse" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Five", href: "/five" }
    ]
  },
  {
    title: "solutions",
    items: [
      { label: "Brainstorming", href: "/brainstorming" },
      { label: "Ideation", href: "/ideation" },
      { label: "Wireframing", href: "/wireframing" },
      { label: "Research", href: "/research" }
    ]
  },
  {
    title: "resources",
    items: [
      { label: "Help Center", href: "/help-center" },
      { label: "Blog", href: "/blog" },
      { label: "Tutorials", href: "/tutorials" }
    ]
  },
  {
    title: "support",
    items: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Developers", href: "/developers" },
      { label: "Documentation", href: "/documentation" },
      { label: "Integrations", href: "/integrations" },
      { label: "Reports", href: "/reports" },
      { label: "Webinar", href: "/webinar" }
    ]
  },
  {
    title: "company",
    items: [
      { label: "About", href: "/about" },
      { label: "Press", href: "/press" },
      { label: "Events", href: "/events" },
      { label: "Careers", href: "/careers" }
    ]
  }
]

const footerLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "#" }
]

const isExternalLink = (url: string) => {
  const regex = /^(https?:)?\/\//
  return regex.test(url)
}

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
                  {isExternalLink(item.href) ? (
                    <Box
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </Box>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
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
                  {isExternalLink(socialLink.href) ? (
                    <Link
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socialLink.icon}
                    </Link>
                  ) : (
                    <Link href={socialLink.href}>{socialLink.icon}</Link>
                  )}
                </Typography>
              ))}
            </Box>
            <Box sx={styles.footer__links}>
              {footerLinks.map((link, index) => (
                <Typography key={index} sx={styles.footer__link}>
                  {isExternalLink(link.href) ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
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
