import { Meta, StoryObj } from "@storybook/react"
import { SlideProps } from "../slide/slide.ts"
import { SlideContent } from "./slideContent.tsx"

const meta: Meta<typeof SlideContent> = {
  title: "molecules/SlideContent",
  tags: ["autodocs"],
  component: SlideContent,
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof SlideContent> = (args:SlideProps) => {
  return <SlideContent {...args} />
}

Default.args = {
  topic: "Artist & investor",
  description: `Enim sagittis, sit porttitor morbi lobortis amet, libero
  adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
  Egestas ac arcu amet nisl quis est ...`
}
