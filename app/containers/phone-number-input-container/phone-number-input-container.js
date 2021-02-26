import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import {color, fontSize, spacing} from '../../themes';
import {Button, Text} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('screen').width;

export const PhoneNumberInputContainer = ({
  value,
  setValue,
  setIsAuthenticating,
}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const handleAuth = () => navigation.navigate('verifyPhone');

  return (
    <View style={styles.container}>
      <PhoneInput
        style={styles.phoneInput}
        textProps={{
          placeholder: t('auth.phoneNumber'),
          placeholderTextColor: color.palette.primaryTextColor,
        }}
        textStyle={styles.phoneInputText}
        ref={(ref) => {
          value = ref;
        }}
      />
      <Button onPress={handleAuth} text={t('auth.sms')} preset="sms" />
      <Button onPress={handleAuth} preset="whatsapp">
        <Text preset="whatsapp">
          {t('auth.whatsApp.part1')} <Icon name="whatsapp" size={20} />
          {' ' + t('auth.whatsApp.part2')}
        </Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
  },
  phoneInput: {
    paddingHorizontal: 10,
    width: width * 0.82,
    marginVertical: spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.palette.primaryBackgroundColor,
    height: 45,
    borderRadius: 7,
  },
  phoneInputText: {
    fontSize: fontSize.body2,
  },
});
