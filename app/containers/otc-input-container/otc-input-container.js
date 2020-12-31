import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {color, spacing} from '../../themes';
import {Button, Text} from '../../components';
const width = Dimensions.get('screen').width;

const CELL_COUNT = 4;

export const OTCInputContainer = ({value, setValue}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <Text
        text={'Enter your Phone number'}
        preset="header"
        style={{textAlign: 'left'}}
      />
      <Text
        text="Enter your one-time 4 digit PIN code "
        preset="body1"
        style={{textAlign: 'left'}}
      />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={styles.cell}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || '•'}
          </Text>
        )}
      />
      <Button
        disabled={value.length !== CELL_COUNT}
        style={
          value.length === CELL_COUNT
            ? {backgroundColor: color.palette.primaryColor}
            : {backgroundColor: color.palette.subtitleTextColor}
        }
        text="Verify Now"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  codeFieldRoot: {
    width,
    marginVertical: spacing.huge,
    // alignContent: 'flex-start',
    justifyContent: 'space-evenly',
  },
  cell: {
    width: width * 0.13,
    height: 45,
    lineHeight: 38,
    fontSize: 30,
    // borderWidth: 0,
    borderBottomWidth: 3,
    borderColor: '#00000030',
    textAlign: 'center',
    fontWeight: 'bold',
    // marginBottom: 5,
  },
});
