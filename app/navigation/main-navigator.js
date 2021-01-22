import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {DashboardScreen} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
// const exitRoutes = ['welcome'];
//  const canExit = (routeName: string) => exitRoutes.includes(routeName);
