import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import * as resources from './resources';

export const locale = getLocales()[0];

// if (__DEV__) {
//   console.log('COUNTRY =>', locale.countryCode);
//   console.log('LANGUAGE (i18n) =>', locale.languageCode);
// }

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
  lng: locale.languageCode,
});
