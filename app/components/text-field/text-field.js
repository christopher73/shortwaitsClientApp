import React, {useState} from 'react';
import {TextInput, View, Dimensions} from 'react-native';
import {color, fontSize, spacing, typography} from '../../themes';
// import {translate} from '../../i18n';
import {Text} from '../text/text';
import {mergeAll, flatten} from 'ramda';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

// the base styling for the container
const CONTAINER = {
  width: width * 0.85,
  marginBottom: spacing.large,
};

// the base styling for the TextInput
const INPUT = {
  height: 40,
  fontFamily: typography.primary,
  color: color.palette.primaryTextColor,
  minHeight: 44,
  fontSize: fontSize.body1,
  backgroundColor: color.transparent,
  borderBottomWidth: 1.7,
  borderColor: color.palette.iconsColor,
};

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS = {
  default: {},
};

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]));
};

/**
 * A component which has a label and an input together.
 */
export function TextField(props) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props;
  let containerStyle = {...CONTAINER, ...PRESETS[preset]};
  containerStyle = enhance(containerStyle, styleOverride);

  let inputStyle = INPUT;
  inputStyle = enhance(inputStyle, inputStyleOverride);
  // const actualPlaceholder = placeholderTx
  //   ? translate(placeholderTx)
  //   : placeholder;
  const actualPlaceholder = placeholder;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <TextInput
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => setIsFocused(false)}
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.subtitleTextColor}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={
          isFocused
            ? {...inputStyle, borderColor: color.palette.primaryColor}
            : inputStyle
        }
        ref={forwardedRef}
      />
    </View>
  );
}
