import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {navigationRef} from './navigation-utilities';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {AuthNavigator} from './auth-navigator';

const Stack = createNativeStackNavigator();
let MainNavigator;

/**
 *
 * React.forwardRef is sending NavigationContainerRef to its childrens
 * @see https://reactnavigation.org/docs/typescript/#annotating-ref-on-navigationcontainer
 *
 */

export const RootNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false);

  console.log(
    'state is at root-navigation ' +
      JSON.stringify(useSelector((state) => state)),
  );

  // const isLoading = useSelector((state) => state.auth.authState.isLoading);
  const isLoading = true;

  useEffect(() => {
    if (MainNavigator === null && !isLoading) {
      MainNavigator = require('./main-navigator').default;
      setIsApplicationLoaded(true);
    }
  }, [isLoading]);
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="auth"
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
          {isApplicationLoaded && (
            <Stack.Screen
              name="main"
              component={MainNavigator}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// RootNavigator.displayName = 'RootNavigator';
