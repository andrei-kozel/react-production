import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/Applink";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useCallback, useState } from "react";
import Modal from "@/shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
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
          onClick={onToggleModal}
          className={classNames(cls.links)}
        >
          {t("login")}
        </Button>
      </div>
      <Modal isOpened={isAuthModal} onClose={onToggleModal}>
        {t("login goes here")}
      </Modal>
    </div>
  );
};
