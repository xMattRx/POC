import { Meta, StoryObj } from "@storybook/react"
import { SectionBusiness } from "./sectionBusiness"

const meta: Meta<typeof SectionBusiness> = {
  title: "organisms/SectionBusiness",
  component: SectionBusiness,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof SectionBusiness> = {
  render: () => {
    return <SectionBusiness  />
  }
}

