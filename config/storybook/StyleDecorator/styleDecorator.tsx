import { Decorator, StoryFn } from "@storybook/react";
import React from "react";
import "../../../src/app/styles/index.scss";
import "../../../src/app/styles/";

export const StyleDecorator: Decorator = (Story) => (
  <div className="storybook-style-decorator">
    <Story />
  </div>
);
