import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpBackend)
  .init({
    backend: {
      loadPath: () => {
        // check the domain
        const host = window.location.host;
        return (host === 'production.ltd' ? '/static/app':'') + '/locales/{{lng}}/{{ns}}.json';
      },
    },
    lng: 'en',
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


  export default i18next;