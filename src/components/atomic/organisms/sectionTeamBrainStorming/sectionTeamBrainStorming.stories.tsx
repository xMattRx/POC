import { Meta, StoryObj } from "@storybook/react"
import { SectionTeamBrainStorming } from "./sectionTeamBrainStorming"

const meta: Meta<typeof SectionTeamBrainStorming> = {
  title: "organisms/SectionTeamBrainStorming",
  tags: ["autodocs"],
  component: SectionTeamBrainStorming,
  
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof SectionTeamBrainStorming> = {
  render: () => {
    return <SectionTeamBrainStorming  />
  }
}

