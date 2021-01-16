import 'react-native-gesture-handler';
import './i18n';
import './utils/ignore-warnings';

import React, {useRef} from 'react';
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from './navigation';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ToggleStorybook} from '../storybook/toggle-storybook';
import {store, persistor} from './redux';
import * as storage from './utils/storage';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {LoadingScreen} from './screens';
enableScreens();
export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App() {
  const navigationRef = useRef();

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // console.log(navigationRef);
  return (
    <ToggleStorybook>
      <Provider store={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <RootNavigator
              ref={navigationRef}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </PersistGate>
        </SafeAreaProvider>
      </Provider>
    </ToggleStorybook>
  );
}

export default App;
