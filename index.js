/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {env} from './app/config/env';

const SHOW_STORYBOOK = false;

let RootComponent = App;
if (__DEV__) {
  console.log(`API URL -> ${env.apiUrl}`);
}
if (__DEV__ && SHOW_STORYBOOK) {
  // Only include Storybook if we're in dev mode
  const {StorybookUIRoot} = require('./storybook/storybook');
  RootComponent = StorybookUIRoot;
}

AppRegistry.registerComponent(appName, () => RootComponent);
