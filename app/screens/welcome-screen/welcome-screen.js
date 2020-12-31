import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {WelcomeContainer} from '../../containers';
import {color} from '../../themes';

export const WelcomeScreen = () => {
  const content = [
    {
      image: require('./welcome2.png'),
      text: 'Skip the line\nby ordering ahead',
      description:
        'No need to wait in line,\n choose "pick-up" for a faster checkout',
      highlight: 'Reduce your time in crowded places',
      isLastScreen: false,
    },
    {
      image: require('./welcome4.png'),
      text: 'Order online\nwith fast delivery',
      description:
        'We make delivery simple and sheaper,\n no extra charges or hidding fees.',
      highlight: 'Shortwaits never collects delivery fees.',
      isLastScreen: false,
    },
    {
      image: require('./welcome3.png'),
      text: 'Order from places\nnear you',
      description:
        'We make it simple to find the place you crave.\n Enter your address and let us do the rest',
      highlight: 'Support your local business',
      isLastScreen: true,
    },
  ];
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      paginationStyle={styles.paginationStile}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      loop={false}>
      {content.map((elem, i) => (
        <WelcomeContainer {...elem} key={i} />
      ))}
    </Swiper>
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
