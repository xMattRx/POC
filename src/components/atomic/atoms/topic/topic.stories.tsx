import { Meta, StoryObj } from "@storybook/react"
import { theme } from "../../../../libs/theme"
import { TopicProps } from "./topic.ts"
import { Topic } from "./topic.tsx"

const meta: Meta<typeof Topic> = {
  title: "atoms/Topic",
  tags: ["autodocs"],
  component: Topic,
}
export default meta

export const Default: StoryObj<typeof Topic> = (args: TopicProps) => {
  return <Topic {...args}>{args.children}</Topic>
}

Default.args = {
  sx: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "100%",
    letterSpacing: "3px",
    marginBottom: "16px",
    textTransform: "uppercase"
  },
  children: "All your ideas in one place",
  color:theme.palette.grey[100],
}
