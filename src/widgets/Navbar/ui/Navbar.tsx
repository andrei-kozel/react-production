import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/Applink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.DARK} to={"/"}>
          {t("navigation_links.home")}
        </AppLink>
        <AppLink theme={AppLinkTheme.DARK} to={"/about"}>
          {t("navigation_links.about")}
        </AppLink>
      </div>
    </div>
  );
};
