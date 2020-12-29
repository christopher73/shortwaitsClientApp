import React from 'react';
import {RootNavigation} from '../../navigation';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {color, fontSize, spacing, typography} from '../../themes';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const WelcomeContainer = (props) => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('auth');
  console.log(navigation.navigate('authStack'));

  return (
    <View style={styles.slide}>
      <Button text="Skip >>" preset="skipLink" onPress={nextScreen} />
      <Image style={styles.image} source={props.image} />
      <Text style={styles.title}>{props.text}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={{...styles.description, ...styles.highlight}}>
        {props.highlight}
      </Text>
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
    marginTop: height * 0.1,
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  title: {
    width: width * 0.85,
    textAlign: 'center',
    color: color.palette.bodyTextColor,
    fontSize: fontSize.title1,
    fontWeight: '700',
    marginBottom: spacing.large,
  },
  description: {
    width: width * 0.8,
    textAlign: 'center',
    fontSize: fontSize.body2,
    fontWeight: '600',
    fontFamily: typography.secondary,
    color: color.palette.bodyTextColor,
    lineHeight: 25,
  },
  highlight: {
    fontWeight: 'bold',
  },
});
