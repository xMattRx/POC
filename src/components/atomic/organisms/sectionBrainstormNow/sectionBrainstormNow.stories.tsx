import { Meta, StoryObj } from "@storybook/react"
import { SectionBrainstormNow } from "./sectionBrainstormNow"

const meta: Meta<typeof SectionBrainstormNow> = {
  title: "organisms/SectionBrainstormNow",
  tags: ["autodocs"],
  component: SectionBrainstormNow,
  
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof SectionBrainstormNow> = {
  render: () => {
    return <SectionBrainstormNow />
  }
}
