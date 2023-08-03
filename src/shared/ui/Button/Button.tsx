import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { className, children, theme, ...rest } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
