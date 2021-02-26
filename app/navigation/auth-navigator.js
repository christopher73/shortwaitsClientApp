import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  AuthScreen,
  LoadingScreen,
  SignupScreen,
  VerifyPhoneScreen,
  WelcomeScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        // headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        // options={{
        //   header: () => null,
        //   headerLeft: null,
        //   headerTitle: props => (
        //     <HeaderAuth {...props} back={false} title={'Edit Username'} />
        //   ),
        //   headerStyle: {
        //     backgroundColor: g.colors.main,
        //   },
        //   gestureEnabled: false,
        // }}
      />
      <Stack.Screen name="verifyPhone" component={VerifyPhoneScreen} />
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
