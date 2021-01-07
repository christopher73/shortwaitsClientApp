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
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
const width = Dimensions.get('screen').width;

const CELL_COUNT = 4;

export const OTCInputContainer = ({value, setValue}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <Text
        text={t('auth.verifyOTC.header')}
        preset="header"
        style={{textAlign: 'left'}}
      />
      <Text
        text={t('auth.verifyOTC.description')}
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
        // WILL CHANGE !!!
        onPress={() => navigation.navigate('signup')}
        disabled={value.length !== CELL_COUNT}
        style={
          value.length === CELL_COUNT
            ? {backgroundColor: color.palette.primaryColor}
            : {backgroundColor: color.palette.subtitleTextColor}
        }
        text={t('actions.verifyNow')}
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
