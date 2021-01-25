import * as React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import {color, spacing} from '../../themes';
import {Text} from '../text/text';
import {brokenFile} from './assets/brokenFile.png';
const width = Dimensions.get('screen').width;
/**
 *
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 *
 */
export function BusinessTypeButton(props) {
  // grab the props
  const {
    tx,
    text,
    businessType,
    logoImageSelected,
    logoImage,
    setSelection,
    selection,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor:
            selection === businessType
              ? color.palette.primaryColorSelected
              : color.palette.backgroundWhite,
        }}
        onPress={() =>
          setSelection((s) => (s === businessType ? 'all' : businessType))
        }>
        {selection === businessType ? (
          <Image
            source={logoImageSelected || brokenFile}
            style={styles.image}
          />
        ) : (
          <Image source={logoImage || brokenFile} style={styles.image} />
        )}
      </TouchableOpacity>
      <Text
        tx={tx}
        text={text || 'loading...'}
        preset="businessType"
        style={
          selection === businessType ? {color: color.palette.primaryColor} : {}
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginRight: 23,
    marginVertical: spacing.medium,
    maxWidth: width / 4.1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    // backgroundColor: 'none', // will be NONE
  },
  button: {
    width: width / 7,
    height: width / 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width / 6 / 2,
  },
  image: {
    width: width / 11,
    height: width / 11,
  },
});
