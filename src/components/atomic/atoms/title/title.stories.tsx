import { Meta, StoryObj } from "@storybook/react"
import { theme } from "../../../../libs/theme"
import { Title } from "./title.tsx"
import { TitleProps } from "./title.ts"

const meta: Meta<typeof Title> = {
  title: "atoms/Title",
  tags: ["autodocs"],
  component: Title,
}
export default meta

export const Default: StoryObj<typeof Title> = (args: TitleProps) => {
  return <Title {...args}>{args.children}</Title>
}

Default.args = {
  sx: {
    color: theme.palette.common.black,
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "110%",
    marginBottom: "32px",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      fontWeight: 800
    }
  },
  heading: "h1",
  children: "All your ideas in one place"
}
