import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {color, spacing} from '../../themes';
import defaultBackground from './default_background.jpg';
import logo from './logo.png';
import {Button, Text} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('screen').width;

export const AuthScreen = () => {
  const navigation = useNavigation();

  const [cityBackground, setCityBackground] = useState(null);
  useEffect(() => {
    RNLocalize.getLocales()[0].countryCode === 'PE'
      ? setCityBackground(require('./lim_per_background.jpg'))
      : null;
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={cityBackground || defaultBackground}>
        <View style={styles.overlay}>
          <Image style={styles.image} source={logo} />
          <View style={styles.header}>
            <Text preset="mainHeader">Welcome</Text>
            <Text preset="link">Sign in to continue</Text>
          </View>

          <Button
            preset="whatsApp"
            onPress={() => navigation.navigate('verifyPhone')}>
            <Icon
              name="whatsapp"
              color={color.palette.secondaryTextColor}
              size={30}
            />
            <Text preset="whatsApp">Connect with WhatsApp</Text>
          </Button>

          <Button
            style={styles.link}
            text="Don't have an account? Sign up"
            preset="whiteLink"
            onPress={() => navigation.navigate('verifyPhone')}>
            <Text preset="link">Don't have an account? Sign up</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.75)',
    // justifyContent: 'space-between',
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
  link: {
    marginVertical: spacing.medium,
  },
});
