import { Meta, StoryObj } from "@storybook/react"
import { SectionBrainstormNow } from "./sectionBrainstormNow"

const meta: Meta<typeof SectionBrainstormNow> = {
  title: "organisms/SectionBrainstormNow",
  component: SectionBrainstormNow,
  tags: ["autodocs"],
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
