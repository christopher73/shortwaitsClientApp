import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {AuthScreen, WelcomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};
/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
// const exitRoutes = ['welcome'];
// export const canExit = (routeName: string) => exitRoutes.includes(routeName);
