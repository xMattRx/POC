import { Meta, StoryObj } from "@storybook/react"
import { Logo } from "./logo"

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  tags: ["autodocs"],
}
export default meta

export const Default: StoryObj<typeof Logo> = {
  render: () => {
    return <Logo  />
  }
}

