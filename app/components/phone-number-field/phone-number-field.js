/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import {Text} from '../text/text';
import {AsYouType, parsePhoneNumberFromString} from 'libphonenumber-js';
import {Dimensions, View, TextInput, TouchableOpacity} from 'react-native';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {color, fontSize, spacing, typography} from '../../themes';
import {mergeAll, flatten} from 'ramda';
import {Text} from '../text/text';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const countryPickerCustomStyles = {};

// your brand's theme primary color
const CONTAINER = {
  width: width * 0.82,
  backgroundColor: color.transparent,
  marginBottom: spacing.large,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  height: 45,
};
// the base styling for the TextInput
const INPUT = {
  color: color.palette.primaryTextColor,
  fontSize: fontSize.body2,
  padding: 0,
  backgroundColor: color.transparent,
};
// currently we have no presets, but that changes quickly when you build your app.
const PRESETS = {
  default: {},
};

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]));
};

export const PhoneNumberField = (props) => {
  const {
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    blurBackground,
    ...rest
  } = props;
  let containerStyle = {...CONTAINER, ...PRESETS[preset]};
  containerStyle = enhance(containerStyle, styleOverride);

  let inputStyle = INPUT;
  inputStyle = enhance(inputStyle, inputStyleOverride);

  const [isFocused, setIsFocused] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState({
    cca2: 'US',
    callingCode: '1',
  });
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  useEffect(() => {
    if (blurBackground) {
      blurBackground(isFocused);
    }
  });
  const _onTextChange = (number) => {
    const num = parsePhoneNumberFromString(number, country.cca2);
    let reg = /^[0-9]/;
    if (
      !!num &&
      phoneNumber.length > number.length &&
      !reg.test(phoneNumber[phoneNumber.length - 1])
    ) {
      let phone = num.nationalNumber.split('');
      phone.pop();
      phone = phone.join('');
      setPhoneNumber(phone);
      if (props.getRawNumber) {
        props.getRawNumber(phone);
      }
    } else {
      let newNum = new AsYouType(country.cca2);
      setPhoneNumber(newNum.input(number));
      if (props.getRawNumber) {
        props.getRawNumber({...country, phoneNumber: newNum.getChars()});
      }
    }
  };

  return (
    <View style={{...containerStyle, borderRadius: 7}}>
      <TouchableOpacity
        onPress={() => setIsCountryPickerVisible((s) => !s)}
        style={{
          paddingLeft: 10,
          paddingRight: 5,
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: color.transparent,
        }}>
        <CountryPicker
          theme={DARK_THEME}
          withEmoji
          withFilter
          withCallingCode
          closeable
          countryCode={country.cca2}
          withFlag
          onSelect={(value) => {
            console.log(value);
            setCountry(value);
          }}
          visible={isCountryPickerVisible}
          cca2={country.cca2}
          styles={countryPickerCustomStyles}
          translation="eng"
          containerButtonStyle={{
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          }}
        />
        <Icon name="menu-down" size={18} />
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: color.transparent,
          flex: 1,
          paddingLeft: 10,
          paddingVertical: 5,
          borderTopEndRadius: 7,
          borderBottomEndRadius: 7,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...inputStyle,
            color: color.palette.primaryTextColor,
            // fontWeight: 'bold',
          }}>
          {'+' + country.callingCode}
        </Text>
        <TextInput
          allowFontScaling={false}
          // placeholder={placeholder}
          {...rest}
          style={{
            ...inputStyle,
            flex: 1,
            paddingLeft: 5,
            color: color.palette.dark1TextColor,
          }}
          // ref={forwardedRef}
          maxLength={20}
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          onChangeText={(value) => _onTextChange(value)}
          value={phoneNumber}
          keyboardType={'phone-pad'}
        />
      </View>
    </View>
    // </View>
  );
};
