import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, StyleSheet} from 'react-native';
import {
  DeliveryHeaderContainer,
  BusinessTypeButtonsContainer,
} from '../../../containers';
import {color} from '../../../themes';

export const DeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <DeliveryHeaderContainer />
      <BusinessTypeButtonsContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.backgroundWhite,
  },
});
