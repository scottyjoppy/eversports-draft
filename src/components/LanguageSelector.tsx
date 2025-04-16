"use client";

import "../app/i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="p-4 mt-50">
      <select
        onChange={changeLanguage}
        defaultValue={i18n.language}
        className="p-2 rounded bg-white text-black"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
      <p className="mt-2">{t("welcome")}</p>
    </div>
  );
}
