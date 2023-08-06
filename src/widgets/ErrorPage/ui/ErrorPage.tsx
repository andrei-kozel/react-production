import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ErrorPage.module.scss";
import Button from "@/shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      {t("Something went wrong")}
      <Button onClick={reloadPage}>{t("Reload page")}</Button>
    </div>
  )
}
