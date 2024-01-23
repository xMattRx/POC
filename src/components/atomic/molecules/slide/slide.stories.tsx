import { Meta, StoryObj } from "@storybook/react"
import Slide from "./slide.tsx"
import { SlideProps } from "./slide.ts"

const meta: Meta<typeof Slide> = {
  title: "molecules/Slide",
  tags: ["autodocs"],
  component: Slide,
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof Slide> = (args:SlideProps) => {
  return <Slide {...args} />
}

Default.args = {
  img: "url('./img/sectionSimilar/woman.png')",
  topic: "Artist & investor",
  description: `Enim sagittis, sit porttitor morbi lobortis amet, libero
  adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
  Egestas ac arcu amet nisl quis est ...`
}
