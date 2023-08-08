import { RuleSetRule } from "webpack";

import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoaders";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "ru"],
              keysAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
