import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/Applink";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "@/features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);


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
      <div>
        <Button
          theme={ThemeButton.CLEAR}
          onClick={onShowModal}
          className={classNames(cls.links)}
        >
          {t("Login")}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </div>
  );
};
