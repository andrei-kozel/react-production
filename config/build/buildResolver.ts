import { BuildOptions } from "config/build/types/config";
import { ResolveOptions } from "webpack";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    alias: {
      "@": options.paths.src,
    },
  };
}
