import i18n from "i18next";
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { format, formatDistance } from "date-fns";
// other date functions: { formatDistance, formatRelative, subDays } from 'date-fns';
import { de, enUS } from "date-fns/locale";
import transDe from "./i18n/de/translation";
import transEn from "./i18n/en/translation";
import { initReactI18next } from "react-i18next";
import Currency from "./model/currency";

const dateLang = {
  en: enUS,
  de: de
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to the react-i18next components.
  // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    whitelist: ["en", "de"],
    fallbackLng: "en",
    cleanCode: true,
    lowerCaseLng: true,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: function(value, formatting, lng) {
        var makedate = value => {
          if (value instanceof Date) {
            return value;
          } else {
            var d = new Date();
            d.setUTCSeconds(value / 1000);
            return d;
          }
        };
        var currency = new Currency();
        var now = new Date();
        switch (formatting) {
          case "distance":
            switch (lng) {
              case "de":
                value = makedate(value);
                return (
                  (value.getTime() > now.getTime() ? "in " : "vor ") +
                  formatDistance(value, now, {
                    locale: dateLang[lng]
                  })
                );
              case "en":
              default:
                value = makedate(value);
                return (
                  formatDistance(value, now, {
                    locale: dateLang[lng]
                  }) + (value.getTime() > now.getTime() ? " remaining" : " ago")
                );
            }
          case "date":
            return format(makedate(value), "MM/dd/yyyy", {
              locale: dateLang[lng]
            });
          case "eth":
            return currency.formatEth(value, lng);
          default:
            if (value instanceof Date)
              return format(value, formatting, { locale: dateLang[lng] });
            else return value;
        }
      }
    },
    keySeparator: ".",
    react: {
      wait: true
    },
    resources: {
      en: { translation: transEn },
      de: { translation: transDe }
    }
  });

export default i18n;
