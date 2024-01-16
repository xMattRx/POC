import { Meta, StoryObj } from "@storybook/react"
import { SectionSimilar } from "./sectionSimilar"

const meta: Meta<typeof SectionSimilar> = {
  title: "organisms/SectionSimilar",
  component: SectionSimilar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof SectionSimilar> = {
  render: () => {
    return <SectionSimilar />
  }
}
