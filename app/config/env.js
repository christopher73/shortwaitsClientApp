import Config from 'react-native-config';
/**
 * @see https://github.com/luggit/react-native-config
 * Keep in mind this module doesn't
 * obfuscate or encrypt secrets for
 * packaging, so do not store sensitive
 * keys in .env. It's basically
 * impossible to prevent users from
 * reverse engineering mobile app
 * secrets, so design your app
 * (and APIs) with that in mind.
 */

export const env = {
  apiUrl: Config.API_URL,
  googlePlacesApiKey: Config.GOOGLE_PLACES_API_KEY,
};
