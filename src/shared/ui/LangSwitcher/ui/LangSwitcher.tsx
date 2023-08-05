import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggleLanguage}
    >
      {i18n.language === "en" ? "ru" : "en"}
    </Button>
  );
};
