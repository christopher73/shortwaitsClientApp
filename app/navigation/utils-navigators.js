import React from 'react';
import {UpdateDeliveryAddressScreen} from '../screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export const UtilsNavigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="updateDeliveryAddress"
        component={UpdateDeliveryAddressScreen}
      />
    </Stack.Navigator>
  );
};

// const exitRoutes = ['welcome'];
//  const canExit = (routeName: string) => exitRoutes.includes(routeName);
