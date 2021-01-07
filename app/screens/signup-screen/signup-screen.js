import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions, Alert} from 'react-native';
import {color, spacing} from '../../themes';

import {GetLocationContainer, GetUserDataContainer} from '../../containers';

export const SignupScreen = () => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {isLocationEnabled ? (
        <GetUserDataContainer />
      ) : (
        <GetLocationContainer setIsLocationEnabled={setIsLocationEnabled} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
