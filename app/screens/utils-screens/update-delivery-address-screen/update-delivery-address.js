import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View, Image, StyleSheet, Dimensions, Alert} from 'react-native';
import myLocation from './location.png';
import {color, spacing} from '../../../themes';
import {Button, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const UpdateDeliveryAddressScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const getAddress = () => navigation.navigate('');

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        console.log(info);
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
        onPress={getGeolocation}
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
