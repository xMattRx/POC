import { Meta, StoryObj } from "@storybook/react"
import { Topic } from "./topic"

const meta: Meta<typeof Topic> = {
  title: "organisms/Topic",
  component: Topic,
  tags: ["autodocs"],
  parameters:{
    layout: "fullscreen"
  },
}
export default meta

export const Default: StoryObj<typeof Topic> = {
  render: () => {
    return <Topic color="#D1FAE5" description="Pellentesque quis tincidunt sit sed. Tortor massa sed habitant." title="Fermentum amet" img="./img/attach.svg" />
  }
}

