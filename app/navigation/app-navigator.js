import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {DashboardScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
// const exitRoutes = ['welcome'];
//  const canExit = (routeName: string) => exitRoutes.includes(routeName);
