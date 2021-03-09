import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View} from 'react-native';
import {color, spacing, fontSize} from '../../themes';
import {Button, Text, TextField, PhoneNumberField} from '../../components';
import {useDispatch} from 'react-redux';
import {SelectServicesContainer} from '../../containers';
import {useTranslation} from 'react-i18next';
import {updateUser} from '../../redux/ducks/user/actions';
import {navigate} from '../../navigation/navigation-utilities';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const GetUserDataContainer = () => {
  const {t} = useTranslation();

  const [services, setServices] = useState([
    {
      serviceName: 'food',
      labelName: t('signin.getUserData.food'),
      serviceImage: require('./food.png'),
      isSelected: true,
    },
    {
      serviceName: 'groceries',
      labelName: t('signin.getUserData.groceries'),
      serviceImage: require('./groceries.png'),
      isSelected: false,
    },
    {
      serviceName: 'healthAndWellness',
      labelName: t('signin.getUserData.healthAndWellness'),
      serviceImage: require('./healthAndWellness.png'),
      isSelected: false,
    },
    {
      serviceName: 'personal care',
      labelName: t('signin.getUserData.personalCare'),
      serviceImage: require('./personalCare.png'),
      isSelected: false,
    },
    {
      serviceName: 'liquor',
      labelName: t('signin.getUserData.liquor'),
      serviceImage: require('./liquor.png'),
      isSelected: false,
    },
    {
      serviceName: 'others',
      labelName: t('signin.getUserData.others'),
      serviceImage: require('./other.png'),
      isSelected: false,
    },
  ]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmitButton = () => {
    dispatch(
      updateUser({
        servicesOfChoice: services,
        firstName: firstName,
        lastName: lastName,
        // phoneNumber: phoneNumberRef.getValue(),
      }),
    );
    navigate('authStack', {screen: 'verifyPhone'});
  };

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
      <TextField
        value={firstName}
        maxLength={20}
        label={t('signin.getUserData.firstName')}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextField
        value={lastName}
        maxLength={20}
        label={t('signin.getUserData.lastName')}
        onChangeText={(text) => setLastName(text)}
      />
      <Text
        preset="fieldLabel"
        text={t('auth.phoneNumber')}
        style={{width: width * 0.85}}
      />
      <PhoneNumberField
        style={{
          width: width * 0.85,
          borderBottomWidth: 1.7,
          borderColor: color.palette.iconsColor,
        }}
      />
      <SelectServicesContainer services={services} setServices={setServices} />
      <Button
        onPress={() => handleSubmitButton()}
        text={t('actions.continue')}
      />
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
    paddingLeft: 10,
    width: width * 0.85,
    marginBottom: spacing.large,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderColor: color.palette.iconsColor,
    borderBottomWidth: 1.7,
    height: 40,
    minHeight: 44,
  },
  phoneInputText: {
    fontSize: fontSize.body2,
  },
});
