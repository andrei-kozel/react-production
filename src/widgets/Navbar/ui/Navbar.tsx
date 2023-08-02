import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/Applink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.logo}>Logo</div>
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
