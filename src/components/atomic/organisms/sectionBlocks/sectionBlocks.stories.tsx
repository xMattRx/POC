import { Meta, StoryObj } from "@storybook/react"
import { SectionBlocks } from "./sectionBlocks"

const meta: Meta<typeof SectionBlocks> = {
  title: "organisms/SectionBlocks",
  tags: ["autodocs"],
  component: SectionBlocks,
  
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof SectionBlocks> = {
  render: () => {
    return <SectionBlocks  />
  }
}

