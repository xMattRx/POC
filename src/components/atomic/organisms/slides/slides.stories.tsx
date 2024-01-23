import { Meta, StoryObj } from "@storybook/react"
import { SectionSimilarProps } from "../sectionSimilar/sectionSimilar"
import Slides from "./slides"

const meta: Meta<typeof Slides> = {
  title: "organisms/Slides",
  tags: ["autodocs"],
  component: Slides,
  
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof Slides> = (args: SectionSimilarProps) => {
  return <Slides {...args} />
}

Default.args = {
  slides: [
    {
      img: "url('./img/sectionSimilar/woman.png')",
      topic: "Artist & investor",
      description: `Enim sagittis, sit porttitor morbi lobortis amet, libero
    adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
    Egestas ac arcu amet nisl quis est ...`
    },

    {
      img: "url('./img/sectionSimilar/woman.png')",
      topic: "Artist & investor",
      description: `Enim sagittis, sit porttitor morbi lobortis amet, libero
    adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
    Egestas ac arcu amet nisl quis est ...`
    },

    {
      img: "url('./img/sectionSimilar/woman.png')",
      topic: "Artist & investor",
      description: `Enim sagittis, sit porttitor morbi lobortis amet, libero
    adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
    Egestas ac arcu amet nisl quis est ...`
    }
  ]
}
