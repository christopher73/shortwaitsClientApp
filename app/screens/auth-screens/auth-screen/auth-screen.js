/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Keyboard,
  StatusBar,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {color, spacing} from '../../../themes';
import defaultBackground from './default_background.jpg';
import logo from './logo.png';
import {Text, Button} from '../../../components';
import {PhoneNumberInputContainer} from '../../../containers';
import {useTranslation} from 'react-i18next';
import {navigate} from '../../../navigation';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
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
    RNLocalize.getLocales()[0].countryCode === 'PE'
      ? setCityBackground(require('./lim_per_background.jpg'))
      : null;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={cityBackground || defaultBackground}>
        {/* <Screen
          style={CONTAINER}
          preset="fixed"
          backgroundColor={color.transparent}> */}
        <View style={styles.overlay}>
          <Image
            style={isBlur ? {...styles.image, opacity: 0} : styles.image}
            source={logo}
          />
          <PhoneNumberInputContainer />
          <Button
            style={styles.info}
            text="Don't have an account? Sign up"
            preset="whiteLink"
            onPress={() => navigate('authStack', {screen: 'signup'})}
          />
          <Text text={t('auth.info')} preset="info" style={styles.info} />

          {/* </Screen> */}
        </View>
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
    marginTop: height * 0.2,
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
// useEffect(() => {
//   Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
//   Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

//   // cleanup function
//   return () => {
//     Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
//     Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
//   };
// }, []);
// const _keyboardDidShow = () => {
//   setIsBlur((s) => true);
// };

// const _keyboardDidHide = () => {
//   setIsBlur((s) => false);
// };
