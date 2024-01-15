import { Meta, StoryObj } from "@storybook/react"
import { SectionIdeas } from "./sectionIdeas"

const meta: Meta<typeof SectionIdeas> = {
  title: "organisms/SectionIdeas",
  component: SectionIdeas,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof SectionIdeas> = {
  render: () => {
    return <SectionIdeas  />
  }
}

