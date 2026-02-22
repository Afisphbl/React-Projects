import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const STORAGE_KEY = "gsp_language";

export const translations = {
  en: {
    appTitle: "Global Settings Panel",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    layout: "Layout",
    light: "Light",
    dark: "Dark",
    english: "English",
    arabic: "Arabic",
    comfortable: "Comfortable",
    compact: "Compact",
    dashboard: "Dashboard",
    welcomeMessage: "Welcome to your personalized dashboard!",
    settingsDesc:
      "Your preferences are saved automatically and persist across sessions.",
    currentTheme: "Current Theme",
    currentLanguage: "Current Language",
    currentLayout: "Current Layout",
    cardOne: "Analytics Overview",
    cardOneDesc: "View insights and trends from your data at a glance.",
    cardTwo: "User Activity",
    cardTwoDesc: "Monitor recent actions and engagement metrics.",
    cardThree: "Performance",
    cardThreeDesc: "Track system health and response times.",
    cardFour: "Reports",
    cardFourDesc: "Generate and export detailed reports.",
    settingsPanelTitle: "Preferences",
  },
  ar: {
    appTitle: "لوحة الإعدادات العالمية",
    settings: "الإعدادات",
    theme: "المظهر",
    language: "اللغة",
    layout: "التخطيط",
    light: "فاتح",
    dark: "داكن",
    english: "الإنجليزية",
    arabic: "العربية",
    comfortable: "مريح",
    compact: "مضغوط",
    dashboard: "لوحة التحكم",
    welcomeMessage: "!مرحباً بك في لوحة التحكم المخصصة لك",
    settingsDesc: ".يتم حفظ تفضيلاتك تلقائياً وتبقى محفوظة عبر الجلسات",
    currentTheme: "المظهر الحالي",
    currentLanguage: "اللغة الحالية",
    currentLayout: "التخطيط الحالي",
    cardOne: "نظرة عامة على التحليلات",
    cardOneDesc: ".اعرض الرؤى والاتجاهات من بياناتك في لمحة سريعة",
    cardTwo: "نشاط المستخدم",
    cardTwoDesc: ".راقب الإجراءات الأخيرة ومقاييس التفاعل",
    cardThree: "الأداء",
    cardThreeDesc: ".تتبع صحة النظام وأوقات الاستجابة",
    cardFour: "التقارير",
    cardFourDesc: ".إنشاء التقارير المفصلة وتصديرها",
    settingsPanelTitle: "التفضيلات",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr",
    );
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
