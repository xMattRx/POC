import { Meta, StoryObj } from "@storybook/react"
import { SectionTopics } from "./sectionTopics"

const meta: Meta<typeof SectionTopics> = {
  title: "organisms/SectionTopics",
  component: SectionTopics,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof SectionTopics> = {
  render: () => {
    return <SectionTopics  />
  }
}

