import { Counter } from "@/app/entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <div><Counter></Counter></div>;
};

export default MainPage;
