import 'react-native-gesture-handler';
import './i18n';
import './utils/ignore-warnings';

import React from 'react';
import {RootNavigator} from './navigation';
import {ToggleStorybook} from '../storybook/toggle-storybook';
import {store, persistor} from './redux';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/lib/integration/react';

enableScreens();

const App = () => (
  <ToggleStorybook>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  </ToggleStorybook>
);

export default App;
