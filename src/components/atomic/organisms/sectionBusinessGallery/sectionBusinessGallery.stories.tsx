import { Meta, StoryObj } from "@storybook/react"
import { SectionBusinessGallery } from "./sectionBusinessGallery.tsx"

const meta: Meta<typeof SectionBusinessGallery> = {
  title: "organisms/SectionBusinessGallery",
  tags: ["autodocs"],
  component: SectionBusinessGallery,
  
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Variation1: StoryObj<typeof SectionBusinessGallery> = {
  render: () => {
    return <SectionBusinessGallery variation={1} />
  }
}

export const Variation2: StoryObj<typeof SectionBusinessGallery> = {
  render: () => {
    return <SectionBusinessGallery variation={2}  />
  }
}

