/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {color, spacing} from '../../themes';
import defaultBackground from './default_background.jpg';
import logo from './logo.png';
import {Text, Screen} from '../../components';
import {PhoneNumberInputContainer} from '../../containers';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('screen').width;
const CONTAINER = {
  flex: 1,
  backgroundColor: color.transparent,
};

export const AuthScreen = () => {
  const [isBlur, setIsBlur] = useState(false);
  const navigation = useNavigation();
  const {t} = useTranslation();

  const [cityBackground, setCityBackground] = useState(null);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    RNLocalize.getLocales()[0].countryCode === 'PE'
      ? setCityBackground(require('./lim_per_background.jpg'))
      : null;
  }, []);

  const _keyboardDidShow = () => {
    setIsBlur((s) => true);
  };

  const _keyboardDidHide = () => {
    setIsBlur((s) => false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={cityBackground || defaultBackground}>
        <Screen
          style={CONTAINER}
          preset="fixed"
          backgroundColor={color.transparent}>
          <View style={styles.overlay}>
            <Image
              style={isBlur ? {...styles.image, opacity: 0} : styles.image}
              source={logo}
            />
            <PhoneNumberInputContainer />
            {/* <Button
              style={styles.info}
              text="Don't have an account? Sign up"
              preset="whiteLink"
              onPress={() => navigation.navigate('signup')}
            /> */}
            <Text text={t('auth.info')} preset="info" style={styles.info} />
          </View>
        </Screen>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.75)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    // width: width * 0.3,
    height: width * 0.25,
    marginTop: spacing.huge,
  },
  header: {
    width: width * 0.82,
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    // marginVertical: spacing.medium,
  },
});
