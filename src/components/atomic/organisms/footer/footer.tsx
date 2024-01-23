import { Box, Typography } from "@mui/material"
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled
} from "@tabler/icons-react"
import { theme } from "../../../../libs/theme"
import { SocialIcon } from "../../atoms/socialIcon/socialIcon.tsx"
import { FooterColumn } from "../../molecules/footerColumn/footerColumn.tsx"
import { FooterLinks } from "../../molecules/footerLinks/footerLinks.tsx"
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

export function Footer() {
  const styles = FooterStyles()

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

  return (
    <Box sx={styles.footer} component="footer">
      <Box sx={styles.footer__content}>
        <Box sx={styles.footer__columns}>
          {footerColumns.map((column, columnIndex) => (
            <FooterColumn
              title={column.title}
              items={column.items}
              key={columnIndex}
            />
          ))}
        </Box>
        <Box sx={styles.footer__copyright}>
          <Typography sx={styles.footer__rights}>
            @ 2023 Wrapp. All rights reserved
          </Typography>
          <Box sx={styles.footer__linksAndIcons}>
            <FooterLinks links={footerLinks} />
            <Box sx={styles.footer__socialLinks}>
              {socialLinks.map((socialLink, socialLinkIndex) => (
                <SocialIcon
                  key={socialLinkIndex}
                  icon={socialLink.icon}
                  href={socialLink.href}
                />
              ))}
            </Box>
            <Box component="img" src="./img/footer/App_Store.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
