import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FootballProvider from "./context/FootballProvider";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationFa from "./utils/fa.json";

i18n.use(LanguageDetector).init({
  resources: {
    fa: {
      translation: translationFa,
    },
  },
  fallbackLng: "fa",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FootballProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </FootballProvider>
  </React.StrictMode>
);
