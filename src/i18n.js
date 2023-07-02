import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';

i18next
  .use(initReactI18next) 
  .use(HttpBackend)
  .init({
    backend: {
      loadPath: () => {
        const host = window.location.host;
        return (host === 'production.ltd' ? 'https://gracevargas.github.io/3D-Portfolio':'') + '/locales/{{lng}}/{{ns}}.json';
      },
    },
    lng: 'en',
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false 
    }
  });


  export default i18next;