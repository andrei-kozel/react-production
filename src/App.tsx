import "./styles/index.scss";

import { Link, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>about</Link>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
