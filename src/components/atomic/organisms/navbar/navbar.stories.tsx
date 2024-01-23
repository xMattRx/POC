import { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./navbar.tsx"
import { NavbarProps } from "./navbar.ts"

const meta: Meta<typeof Navbar> = {
  title: "organisms/Navbar",
  tags: ["autodocs"],
  component: Navbar,
  
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof Navbar> = (args: NavbarProps) => {
    return <Navbar {...args}  />
}

Default.args = {
  menuItems: [
    { label: "Products", link: "#" },
    { label: "Solutions", link: "#" },
    { label: "Pricing", link: "#" },
    { label: "Resources", link: "#" }
  ],
}

