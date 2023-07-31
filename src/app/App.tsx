import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import { AppRouter } from "@/app/providers/router";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>about</Link>
      <AppRouter />
    </div>
  );
};

export default App;
