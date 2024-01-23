import { Meta, StoryObj } from "@storybook/react"
import { FooterLinks } from "./footerLinks.tsx"
import { FooterLinksProps } from "./footerLinks.ts"

const meta: Meta<typeof FooterLinks> = {
  title: "molecules/FooterLinks",
  tags: ["autodocs"],
  component: FooterLinks,
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof FooterLinks> = (
  args: FooterLinksProps
) => {
  return <FooterLinks {...args} />
}

Default.args = {
  links: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Contact", href: "#" }
  ]
}
