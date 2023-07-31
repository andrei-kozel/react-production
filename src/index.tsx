import App from "@/app/App";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

const app = (
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

root.render(app);
