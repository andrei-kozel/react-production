declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  import React = require("react");
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
