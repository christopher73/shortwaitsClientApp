import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

// import {AppNavigator} from './app-navigator';
import {AuthNavigator} from './auth-navigator';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="authStack"
        component={AuthNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* {isApplicationLoaded && (
        <Stack.Screen
          name="appStack"
          component={AppNavigator}
          options={{
            headerShown: false,
          }}
        />
      )} */}
    </Stack.Navigator>
  );
};

/**
 *
 * React.forwardRef is sending NavigationContainerRef to its childrens
 * @see https://reactnavigation.org/docs/typescript/#annotating-ref-on-navigationcontainer
 *
 */
export const RootNavigator = React.forwardRef((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
