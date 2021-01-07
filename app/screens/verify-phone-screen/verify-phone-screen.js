/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import {Button, Text} from '../../components';
import {OTCInputContainer, PhoneNumberInputContainer} from '../../containers';
import {color, spacing} from '../../themes';
import {useNavigation} from '@react-navigation/native';

export const VerifyPhoneScreen = () => {
  const [oneTimeCode, setOneTimeCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        text="< Back"
        style={{alignItems: 'flex-start'}}
        preset="skipLink"
        onPress={() => navigation.navigate('auth')}
      />
      <OTCInputContainer value={oneTimeCode} setValue={setOneTimeCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: color.palette.backgroundWhite,
  },
});
