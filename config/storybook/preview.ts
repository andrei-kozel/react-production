import type { Preview } from "@storybook/react";
import { StyleDecorator } from "./decorators/styleDecorator";
import { ThemeDecorator } from "./decorators/themeDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator],
};

export default preview;
