import App from "@/app/App";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/shared/config/i18n/i18n";

const container = document.getElementById("root");
const root = createRoot(container);

const app = (
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

root.render(app);
