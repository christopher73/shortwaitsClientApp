import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  navigate,
  navigateAndSimpleReset,
  navigationRef,
} from './navigation-utilities';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {UtilsNavigators} from './utils-navigators';
import {AuthNavigator} from './auth-navigator';
import {LoadingScreen} from '../screens';
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
    'state at root-navigation:\n ' +
      JSON.stringify(useSelector((state) => state)),
  );

  const userAuthState = useSelector((state) => state.userAuth);

  useEffect(() => {
    if (
      MainNavigator === null &&
      userAuthState.registrationState === 'success'
    ) {
      console.log('MAIN_NAVIGATOR IS LOADED');
      MainNavigator = require('./main-navigator').default;
      setIsApplicationLoaded(true);
    }
  }, [userAuthState]);

  // useEffect(() => {
  //   isApplicationLoaded ? navigateAndSimpleReset('authStack') : null;
  // }, [isApplicationLoaded]);

  return (
    // <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        // mode="modal"
        initialRouteName="loading"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name="loading"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="authStack"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="utilsStack"
          component={UtilsNavigators}
          options={{
            headerShown: false,
          }}
        />
        {isApplicationLoaded && (
          <RootStack.Screen
            name="mainStack"
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
    // </SafeAreaProvider>
  );
};

// RootNavigator.displayName = 'RootNavigator';
