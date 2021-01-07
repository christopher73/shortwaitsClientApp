import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import * as resources from './resources';

export const userLanguage = getLocales()[0].languageCode;

if (__DEV__) {
  console.log('LANGUAGE (i18n) =>', userLanguage);
}

export default i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  fallbackLng: 'en',
  lng: userLanguage,
});
