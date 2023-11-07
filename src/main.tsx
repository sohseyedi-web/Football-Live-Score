import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FootballProvider from "./context/FootballProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FootballProvider>
      <App />
    </FootballProvider>
  </React.StrictMode>
);
