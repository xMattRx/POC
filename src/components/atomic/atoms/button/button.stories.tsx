import { Meta, StoryObj } from "@storybook/react"
import { theme } from "../../../../libs/theme"
import { Button } from "./button.tsx"
import { ButtonProps } from "./button.ts"

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  tags: ["autodocs"],
  component: Button
}
export default meta

export const Default: StoryObj<typeof Button> = (args: ButtonProps) => {
  return <Button {...args}>Start For Free</Button>
}

Default.args = {
  sx: {
    background: theme.palette.brand["50"],
    borderRadius: "50px",
    color: theme.palette.common.white,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    padding: "12px 28px",
    textTransform: "initial",

    "&:hover": {
      background: theme.palette.brand["50"],
      opacity: 1
    }
  }
}
