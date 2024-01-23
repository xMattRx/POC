import { Meta, StoryObj } from "@storybook/react"
import { Block } from "./block.tsx"
import { BlockProps } from "./block.ts"

const meta: Meta<typeof Block> = {
  title: "molecules/Block",
  tags: ["autodocs"],
  component: Block,
  parameters: {
    layout: "fullscreen"
  }
}
export default meta

export const Default: StoryObj<typeof Block> = (args:BlockProps) => {
  return <Block {...args} />
}

Default.args = {
  color: "#D1FAE5",
  description:
    "Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.",
  title: "Fermentum amet",
  img: "./img/sectionTopics/attach.svg"
}
