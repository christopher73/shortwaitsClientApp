import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {color, fontSize, spacing, typography} from '../../themes';
import {Button, Text} from '../../components';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const WelcomeContainer = (props) => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('auth');
  // console.log(navigation.navigate('authStack'));
  return (
    <View style={styles.slide}>
      <Button text="Skip >>" preset="skipLink" onPress={nextScreen} />
      <Image style={styles.image} source={props.image} />
      <Text preset="header" text={props.text} />
      <Text preset="body1" text={props.description} />
      <Text preset="body1" style={styles.highlight} text={props.highlight} />
      {props.isLastScreen ? (
        <Button
          onPress={nextScreen}
          preset="welcomeScreen"
          text="Get Started"
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.palette.backgroundWhite,
  },
  image: {
    // marginTop: height * 0.05,
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  highlight: {
    marginTop: spacing.small,
    marginBottom: spacing.large,
    color: color.palette.primaryTextColor,
    fontWeight: 'bold',
  },
});