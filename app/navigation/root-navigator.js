import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {navigateAndSimpleReset, navigationRef} from './navigation-utilities';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {UtilsNavigators} from './utils-navigators';
import {AuthNavigator} from './auth-navigator';
// import {UpdateDeliveryAddressScreen} from '../screens';

const RootStack = createNativeStackNavigator();
let MainNavigator = null;

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

  const authState = useSelector((state) => state.auth.authState);
  // const isLoading = true;

  useEffect(() => {
    if (MainNavigator === null && !authState.isLoading) {
      console.log('MAIN_NAVIGATOR IS LOADED');
      MainNavigator = require('./main-navigator').default;
      setIsApplicationLoaded(true);
    }
  }, [authState]);

  useEffect(() => {
    isApplicationLoaded && authState.registrationState === 'verified'
      ? navigateAndSimpleReset('main')
      : null;
  }, [authState, isApplicationLoaded]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          // mode="modal"
          initialRouteName="auth"
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen
            name="auth"
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="utils"
            component={UtilsNavigators}
            options={{
              headerShown: false,
            }}
          />
          {isApplicationLoaded && (
            <RootStack.Screen
              name="main"
              component={MainNavigator}
              options={{
                headerShown: false,
              }}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// RootNavigator.displayName = 'RootNavigator';
