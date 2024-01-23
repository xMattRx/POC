import { Meta, StoryObj } from "@storybook/react"
import { theme } from "../../../../libs/theme"
import { SocialIcon } from "./socialIcon.tsx"
import { IconBrandYoutubeFilled } from "@tabler/icons-react"
import { SocialIconProps } from "./socialIcon.ts"

const meta: Meta<typeof SocialIcon> = {
  title: "atoms/SocialIcon",
  tags: ["autodocs"],
  component: SocialIcon,
}
export default meta

export const Default: StoryObj<typeof SocialIcon> = (args: SocialIconProps) => {
  return <SocialIcon {...args} />
}

Default.args = {
  icon: <IconBrandYoutubeFilled size={24} color={theme.palette.brand["100"]} />,
  href: "#"
}
