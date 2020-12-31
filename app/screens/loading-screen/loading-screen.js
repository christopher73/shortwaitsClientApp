import React from 'react';
import {Image, StyleSheet, ImageBackground, View} from 'react-native';
import imageLogo from './logo_ios.png';
import imageBackground from './background_ios_3x.png';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={imageBackground}>
        <Image source={imageLogo} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
