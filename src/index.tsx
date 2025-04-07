import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import Background from "./components/Background";

createRoot(document.getElementById("root")!).render(
  <div>
    <App />
    <Background />
  </div>
);
