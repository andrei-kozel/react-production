import { WebpackConfiguration } from "webpack-dev-server";
import { BuildPaths } from "../build/types/config";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: BuildPaths = {
    build: "build",
    src: path.resolve(__dirname, "..", "..", "src"),
    entry: "src/index.tsx",
    html: "public/index.html",
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx", ".scss");
  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": paths.src,
    };
  }

  if (config.module?.rules) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        true ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes(".module.")),
              localIdentName: "[path][name]__[local]",
            },
          },
        },
        "sass-loader",
      ],
    });
  }

  return config;
};
