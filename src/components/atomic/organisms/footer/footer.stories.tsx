import { Meta, StoryObj } from "@storybook/react"
import { Footer } from "./footer"

const meta: Meta<typeof Footer> = {
  title: "organisms/Footer",
  tags: ["autodocs"],
  component: Footer,
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof Footer> = {
  render: () => {
    return <Footer/>
  }
}

