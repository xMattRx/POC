import { Meta, StoryObj } from "@storybook/react"
import Slides from "./slides"

const meta: Meta<typeof Slides> = {
  title: "organisms/Slides",
  component: Slides,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof Slides> = {
  render: () => {
    return <Slides  />
  }
}

