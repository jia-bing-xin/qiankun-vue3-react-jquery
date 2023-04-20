import i18n from 'i18next';
import zh_CN from "./locales/zh_CN";
import en_US from "./locales/en_US";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: { translation: en_US },
            zh: { translation: zh_CN },
        },
        fallbackLng: 'en',
        preload: ['en', 'zh'],
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n