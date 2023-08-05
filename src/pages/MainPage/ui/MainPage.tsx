import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t("home_page_title")}</div>;
};

export default MainPage;
