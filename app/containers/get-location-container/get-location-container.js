import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View, Image, StyleSheet, Dimensions, Alert} from 'react-native';
import myLocation from './location.png';
import {color, spacing} from '../../themes';
import {Button, Text} from '../../components';
import {useTranslation} from 'react-i18next';
import {updateUser} from '../../redux/ducks/user/actions';
import {useDispatch} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const GetLocationContainer = ({setIsLocationEnabled}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        console.log(info);
        dispatch(
          updateUser({
            location: {coords: {...info.coords}, timestamp: info.timestamp},
          }),
        );
        setIsLocationEnabled(true);
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={myLocation} />
      <Text text={t('signin.getLocation.header')} preset="header" />
      <Text
        style={styles.info}
        text={t('signin.getLocation.description')}
        preset="info"
      />
      <Button
        onPress={() => getGeolocation()}
        text={t('actions.useCurrentLocation')}
        preset="location"
        icon="location-arrow"
        iconColor={color.palette.primaryColor}
      />
      <Button
        onPress={() => {}}
        style={styles.link}
        text={t('actions.selectManually')}
        preset="simpleLink"
      />
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
  image: {
    // marginTop: height * 0.05,
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  header: {
    width: width * 0.82,
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    width: width * 0.7,
    marginTop: spacing.medium,
  },
  link: {
    marginTop: spacing.large,
  },
});

/**
 * get user current location response ex:
 * {
 *  "coords":
 *  {
 *    "accuracy": 20,
 *    "altitude": 5,
 *    "heading": 0,
 *    "latitude": 37.421998333333335,
 *    "longitude": -122.08400000000002,
 *    "speed": 0
 *  },
 *  "mocked": false,
 *  "timestamp": 1614313796000
 * }
 * */
