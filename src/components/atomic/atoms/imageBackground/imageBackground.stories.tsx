import { Meta, StoryObj } from "@storybook/react"
import { theme } from "../../../../libs/theme"
import { ImageBackground } from "./imageBackground.tsx"
import { ImageBackgroundProps } from "./imageBackground.ts"

const meta: Meta<typeof ImageBackground> = {
  title: "atoms/ImageBackground",
  tags: ["autodocs"],
  component: ImageBackground,
}
export default meta

export const Default: StoryObj<typeof ImageBackground> = (
  args: ImageBackgroundProps
) => {
  return <ImageBackground {...args} />
}

Default.args = {
  sx: {
    height: "213px",
    left: "-85px",
    position: "absolute",
    top: "-9px",
    width: "231px",
    zIndex: "-1",
    [theme.breakpoints.up("md")]: {
      left: "-333px",
      height: "730px",
      top: "-229px",
      width: "793px"
    }
  },
  img: "./img/sectionIdeas/Ellipses2.svg"
}
