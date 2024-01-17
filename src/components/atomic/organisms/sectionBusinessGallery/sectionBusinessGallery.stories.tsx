import { Meta, StoryObj } from "@storybook/react"
import { SectionBusinessGallery } from "./sectionBusinessGallery"

const meta: Meta<typeof SectionBusinessGallery> = {
  title: "organisms/SectionBusinessGallery",
  component: SectionBusinessGallery,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof SectionBusinessGallery> = {
  render: () => {
    return <SectionBusinessGallery  />
  }
}

