import { Meta, StoryObj } from "@storybook/react"
import { FooterColumnProps } from "./footerColumn.ts"
import { FooterColumn } from "./footerColumn.tsx"

const meta: Meta<typeof FooterColumn> = {
  title: "molecules/FooterColumn",
  tags: ["autodocs"],
  component: FooterColumn,
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof FooterColumn> = (
  args: FooterColumnProps
) => {
  return <FooterColumn {...args} />
}

Default.args = {
  title: "categories",
  items: [
    "User Interface",
    "User Experience",
    "Digital Media",
    "Lifestyle",
    "Programming",
    "Animation"
  ]
}
