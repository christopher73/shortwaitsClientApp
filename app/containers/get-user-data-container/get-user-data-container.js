import React, {useState} from 'react';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';
import {color, spacing, fontSize} from '../../themes';
import {Button, Text, TextField} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {SelectServicesContainer} from '../../containers';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const GetUserDataContainer = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const nextScreen = () => navigation.navigate('');

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <Text
        style={{marginBottom: 0}}
        text={t('signin.getUserData.header')}
        preset="header"
      />
      <Text
        style={{marginVertical: spacing.large}}
        text={t('signin.getUserData.description')}
        preset="body1"
      />
      <TextField label={t('signin.getUserData.firstName')} />
      <TextField label={t('signin.getUserData.lastName')} />
      <SelectServicesContainer />
      <Button text={t('actions.submit')} />
      {/* <Image style={styles.image} source={myLocation} /> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: color.palette.backgroundWhite,
  },
  image: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  header: {
    width: width * 0.82,
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    width: width * 0.7,
    marginTop: spacing.medium,
  },
  link: {
    marginTop: spacing.large,
  },
  phoneInput: {
    paddingHorizontal: 10,
    width: width * 0.82,
    marginVertical: spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.palette.iconsColor,
    borderBottomWidth: 1.7,
    height: 45,
    borderRadius: 7,
  },
  phoneInputText: {
    fontSize: fontSize.body2,
  },
});
