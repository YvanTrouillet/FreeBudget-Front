import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./shared/styles/index.scss";
import "./shared/styles/reset.css";
import Background from "./shared/components/Background";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <div>
    <BrowserRouter>
      <App />
      <Background />
    </BrowserRouter>
  </div>
);
