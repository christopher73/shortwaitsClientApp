/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as RNLocalize from 'react-native-localize';
import {color, spacing} from '../../../themes';
import defaultBackground from './default_background.jpg';
import logo from './logo.png';
import {Text, Button, PhoneNumberField} from '../../../components';
import {useTranslation} from 'react-i18next';
import {navigate} from '../../../navigation';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const AuthScreen = () => {
  const [isBlur, setIsBlur] = useState(false);
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
        <View style={styles.overlay}>
          <Image
            style={{
              ...styles.image,
              height: isBlur ? width * 0.2 : width * 0.25,
              marginTop: isBlur ? width * 0.15 : height * 0.2,
            }}
            source={logo}
          />

          <View style={{marginTop: 'auto', alignItems: 'center'}}>
            <PhoneNumberField
              blurBackground={setIsBlur}
              style={styles.phoneInput}
              getRawNumber={(s) => console.log(s)}
            />
            <Button text={t('auth.sms')} preset="sms" />
            <Button preset="whatsapp">
              <Text preset="whatsapp">
                {t('auth.whatsApp.part1')} <Icon name="whatsapp" size={20} />
                {' ' + t('auth.whatsApp.part2')}
              </Text>
            </Button>
            <Button
              style={styles.info}
              text="Don't have an account? Sign up"
              preset="whiteLink"
              onPress={() => navigate('authStack', {screen: 'signup'})}
            />
            <Text text={t('auth.info')} preset="info" style={styles.info} />
          </View>
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
  phoneInput: {
    backgroundColor: 'rgb(255,255,255)',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.75)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
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
