import { Box, Typography } from "@mui/material"
import { FooterStyles } from "./footer.styles"
import Link from "next/link"
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled
} from "@tabler/icons-react"
import { theme } from "../../../../libs/theme"

export function Footer() {
  const styles = FooterStyles()

  return (
    <Box sx={styles.footer} component="footer">
      <Box sx={styles.footer__content}>
        <Box sx={styles.footer__columns}>
          <Box sx={styles.footer__column}>
            <Typography sx={styles.footer__title}>categories</Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">User Interface</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">User Experience</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Digital Media</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Lifestyle</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Programming</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Animation</Link>
            </Typography>
          </Box>
          <Box sx={styles.footer__column}>
            <Typography sx={styles.footer__title}>product</Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Pricing</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Overview</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Browse</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Accesibility</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Five</Link>
            </Typography>
          </Box>
          <Box sx={styles.footer__column}>
            <Typography sx={styles.footer__title}>solutions</Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Brainstorming</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Ideation</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Wireframing</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Research</Link>
            </Typography>
          </Box>
          <Box sx={styles.footer__column}>
            <Typography sx={styles.footer__title}>resources</Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Help Center</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Blog</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Tutorials</Link>
            </Typography>
          </Box>
          <Box sx={styles.footer__column}>
            <Typography sx={styles.footer__title}>support</Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Contact Us</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Developers</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Documentation</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Integrations</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Reports</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Webinar</Link>
            </Typography>
          </Box>
          <Box sx={styles.footer__column}>
            <Typography sx={styles.footer__title}>company</Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">About</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Press</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Events</Link>
            </Typography>
            <Typography sx={styles.footer__item}>
              <Link href="#">Careers</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.footer__copyright}>
          <Typography sx={styles.footer__rights}>
            @ 2023 Wrapp. All rights reserved
          </Typography>
          <Box sx={styles.footer__linksAndIcons}>
            <Box sx={styles.footer__links}>
              <Typography sx={styles.footer__link}>
                <Link href="#">Terms</Link>
              </Typography>
              <Typography sx={styles.footer__link}>
                <Link href="#">Privacy</Link>
              </Typography>
              <Typography sx={styles.footer__link}>
                <Link href="#">Contact</Link>
              </Typography>
            </Box>
            <Box sx={styles.footer__socialLinks}>
              <Typography sx={styles.footer__social}>
                <Link href="#">
                  <IconBrandYoutubeFilled
                    size={24}
                    color={theme.palette.brand["100"]}
                  />
                </Link>
              </Typography>
              <Typography sx={styles.footer__social}>
                <Link href="#">
                  <IconBrandFacebookFilled
                    size={24}
                    color={theme.palette.brand["100"]}
                  />
                </Link>
              </Typography>
              <Typography sx={styles.footer__social}>
                <Link href="#">
                  <IconBrandTwitterFilled
                    size={24}
                    color={theme.palette.brand["100"]}
                  />
                </Link>
              </Typography>
              <Typography sx={styles.footer__social}>
                <Link href="#">
                  <IconBrandInstagram
                    size={24}
                    color={theme.palette.brand["100"]}
                  />
                </Link>
              </Typography>
              <Typography sx={styles.footer__social}>
                <Link href="#">
                  <IconBrandLinkedin
                    size={24}
                    color={theme.palette.brand["100"]}
                  />
                </Link>
              </Typography>
            </Box>
            <Box component="img" src="./img/footer/App_Store.svg"/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
