import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.scss";
import App from "./App";
import Background from "./components/Background";

createRoot(document.getElementById("root")!).render(
  <div>
    <BrowserRouter>
      <App />
      <Background />
    </BrowserRouter>
  </div>
);
