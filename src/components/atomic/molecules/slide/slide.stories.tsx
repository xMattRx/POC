import { Meta, StoryObj } from "@storybook/react"
import Slide from "./slide"

const meta: Meta<typeof Slide> = {
  title: "molecules/Slide",
  component: Slide,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof Slide> = {
  render: () => {
    return <Slide  />
  }
}

