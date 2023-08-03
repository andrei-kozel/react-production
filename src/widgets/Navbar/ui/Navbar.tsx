import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/Applink";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.DARK} to={"/"}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.DARK} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
