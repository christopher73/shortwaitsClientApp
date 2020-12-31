/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Text} from '../../components';
import {OTCInputContainer, PhoneNumberInputContainer} from '../../containers';
import {color, spacing} from '../../themes';

export const VerifyPhoneScreen = () => {
  const [oneTimeCode, setOneTimeCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        text="< Back"
        style={{alignItems: 'flex-start'}}
        preset="skipLink"
      />
      {isAuthenticating ? (
        <OTCInputContainer value={oneTimeCode} setValue={setOneTimeCode} />
      ) : (
        <PhoneNumberInputContainer
          value={phoneNumber}
          setValue={setPhoneNumber}
          setIsAuthenticating={setIsAuthenticating}
        />
      )}
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
