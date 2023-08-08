import { Decorator } from "@storybook/react";
import React from "react";

export const ThemeDecorator: Decorator = (Story) => (
  <div className="light">
    <Story />
  </div>
)