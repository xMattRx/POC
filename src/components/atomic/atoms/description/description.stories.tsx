import { Meta, StoryObj } from "@storybook/react"
import { theme } from "../../../../libs/theme"
import { Description } from "./description.tsx"
import { DescriptionProps } from "./description.ts"

const meta: Meta<typeof Description> = {
  title: "atoms/Description",
  tags: ["autodocs"],
  component: Description,
}
export default meta

export const Default: StoryObj<typeof Description> = (
  args: DescriptionProps
) => {
  return <Description {...args}>{args.children}</Description>
}

Default.args = {
  sx: {
    color: theme.palette.brand["200"],
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "140%",
    maxWidth: "744px",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "160%",
      marginBottom: "32px"
    }
  },
  children: "All your ideas in one place"
}
