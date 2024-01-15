import { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./navbar"

const meta: Meta<typeof Navbar> = {
  title: "organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof Navbar> = {
  render: () => {
    return <Navbar  />
  }
}

