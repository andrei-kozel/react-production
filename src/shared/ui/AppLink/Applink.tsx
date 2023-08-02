import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

export enum AppLinkTheme {
  LIGHT = "light",
  DARK = "dark",
}

interface ApplinkProps extends LinkProps, PropsWithChildren {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<ApplinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.LIGHT,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
