import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FootballProvider from "./context/FootballProvider";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationFa from "./utils/fa.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <FootballProvider>
        <I18nextProvider i18n={i18n}>
          <App />
          <Toaster/>
        </I18nextProvider>
      </FootballProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
