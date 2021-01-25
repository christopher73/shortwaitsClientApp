import React from 'react';
import {
  DeliveryScreen,
  OrdersScreen,
  PickupScreen,
  ReserveScreen,
} from '../screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../themes';

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="delivery"
      activeColor={color.palette.primaryColor}
      inactiveColor={color.palette.headlineTextColor}
      labeled={true}
      shifting={false}
      barStyle={{backgroundColor: color.palette.backgroundWhite}}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Tab.Screen
        name="delivery"
        component={DeliveryScreen}
        options={{
          tabBarLabel: 'Delivery',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bike-fast" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="pickup"
        component={PickupScreen}
        options={{
          tabBarLabel: 'Pickup',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="reserve"
        component={ReserveScreen}
        options={{
          tabBarLabel: 'Reserve',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-clock"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="receipt" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigator;
// const exitRoutes = ['welcome'];
//  const canExit = (routeName: string) => exitRoutes.includes(routeName);
