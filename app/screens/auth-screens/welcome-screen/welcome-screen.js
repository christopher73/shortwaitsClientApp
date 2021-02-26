import React from 'react';
import {AppRegistry, StyleSheet, Platform, StatusBar, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {WelcomeContainer} from '../../../containers';
import {color} from '../../../themes';
import {Screen} from '../../../components';
import {useTranslation} from 'react-i18next';

const CONTAINER = {
  flex: 1,
  backgroundColor: color.transparent,
};

export const WelcomeScreen = () => {
  const {t} = useTranslation();
  const CONTENT = [
    {
      image: require('./welcome2.png'),
      header: t('welcome.slide1.header'),
      description: t('welcome.slide1.description'),
      highlight: t('welcome.slide1.highlight'),
      isLastScreen: false,
    },
    {
      image: require('./welcome4.png'),
      header: t('welcome.slide2.header'),
      description: t('welcome.slide2.description'),
      highlight: t('welcome.slide2.highlight'),
      isLastScreen: false,
    },
    {
      image: require('./welcome3.png'),
      header: t('welcome.slide3.header'),
      description: t('welcome.slide3.description'),
      highlight: t('welcome.slide3.highlight'),
      isLastScreen: true,
    },
  ];
  return (
    <View style={CONTAINER}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        paginationStyle={styles.paginationStile}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}>
        {CONTENT.map((elem, i) => (
          <WelcomeContainer {...elem} key={i} />
        ))}
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  paginationStile: {},
  dot: {
    backgroundColor: '#EFEEF3',
    width: 25,
    height: 8,
    borderRadius: 3,
    marginHorizontal: 2.5,
  },
  activeDot: {
    backgroundColor: color.palette.primaryColor,
    width: 25,
    height: 8,
    borderRadius: 3,
    marginHorizontal: 2.5,
  },
});
AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);
