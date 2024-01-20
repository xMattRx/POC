import { Meta, StoryObj } from "@storybook/react"
import { Footer } from "./footer"

const meta: Meta<typeof Footer> = {
  title: "organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
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

