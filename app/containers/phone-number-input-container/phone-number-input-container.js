import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import {color, spacing} from '../../themes';
import {Button, Text} from '../../components';
const width = Dimensions.get('screen').width;

export const PhoneNumberInputContainer = ({
  value,
  setValue,
  setIsAuthenticating,
}) => {
  const handleAuth = () => {
    setIsAuthenticating((s) => true);
  };

  return (
    <View style={styles.container}>
      <Text
        text={'Enter your Phone number'}
        preset="header"
        style={{textAlign: 'left'}}
      />
      <PhoneInput
        style={{width: width * 0.82}}
        textStyle={{fontSize: 20}}
        ref={(ref) => {
          value = ref;
        }}
      />
      <Button onPress={handleAuth} text="Send confirmation code" />
      <Text
        text='By tapping "Send confirmation code" above, we will send you an SMS or WhatsApp message to comfirm your phone number. Message & data rates may apply'
        preset="info"
        style={{textAlign: 'left'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
