import { Meta, StoryObj } from "@storybook/react"
import { NavItem } from "./navItem.tsx"
import { NavItemProps } from "./navItem.ts"

const meta: Meta<typeof NavItem> = {
  title: "atoms/NavItem",
  tags: ["autodocs"],
  component: NavItem,
  
}
export default meta

export const Default: StoryObj<typeof NavItem> = (args:NavItemProps) =>{
    return <NavItem {...args} />
}

Default.args = {
  label: "Products",
  link: "#"
}

