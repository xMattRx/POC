import { Meta, StoryObj } from "@storybook/react"
import { SectionSimilar } from "./sectionSimilar.tsx"
import { SectionSimilarProps } from "./sectionSimilar.ts"

const meta: Meta<typeof SectionSimilar> = {
  title: "organisms/SectionSimilar",
  tags: ["autodocs"],
  component: SectionSimilar,
  
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof SectionSimilar> = (args:SectionSimilarProps) => {
    return <SectionSimilar {...args} />
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