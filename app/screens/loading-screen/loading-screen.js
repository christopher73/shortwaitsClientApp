import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import imageLogo from './logo_ios.png';
import imageBackground from './background_ios_3x.png';
import {useDispatch, useSelector} from 'react-redux';
import {locale} from '../../i18n';
import {initUser} from '../../redux/ducks/auth/operations';
import {navigateAndSimpleReset} from '../../navigation';

const height = Dimensions.get('screen').height;
export const LoadingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  // const registrationState = useSelector(
  //   (state) => state.auth.authState.registrationState,
  // );
  // useEffect(() => {
  //   if (registrationState === 'verified') {
  //     navigateAndSimpleReset('main');
  //   }
  // });
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={imageBackground}>
        <Image style={styles.image} source={imageLogo} />
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
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    marginTop: height * 0.2,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
