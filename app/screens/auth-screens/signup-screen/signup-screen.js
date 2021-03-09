/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {color, spacing} from '../../../themes';
import {GetLocationContainer, GetUserDataContainer} from '../../../containers';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
export const SignupScreen = ({navigation}) => {
  // const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const state = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          marginTop: StatusBar.currentHeight,
          alignSelf: 'flex-start',
          marginLeft: StatusBar.currentHeight,
        }}>
        <Icon name="arrow-left" size={30} color={color.palette.primaryColor} />
      </TouchableOpacity>
      {state.userData.location.coords ? (
        <GetUserDataContainer />
      ) : (
        /**
         *
         * @note this can be done also by sending to getlocation navigator
         *
         * */
        <GetLocationContainer />
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
