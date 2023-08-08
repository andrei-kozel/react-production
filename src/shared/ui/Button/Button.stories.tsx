import Button, { ThemeButton } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: Object.values(ThemeButton),
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Clear",
  },
};

export const Secondary: Story = {
  args: {
    theme: ThemeButton.SECONDARY,
    children: "Secondary",
  },
};

export const Outlined: Story = {
  args: {
    theme: ThemeButton.OUTLINED,
    children: "Outlined",
  },
};
