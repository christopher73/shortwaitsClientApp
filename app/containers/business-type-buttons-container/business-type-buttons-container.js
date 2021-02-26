import React, {useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View} from 'react-native';
import {BusinessTypeButton} from '../../components';
import {color, spacing} from '../../themes';
import {DEFAULT_BUSINESS} from './business-types';
const width = Dimensions.get('screen').width;

export const BusinessTypeButtonsContainer = () => {
  const [selection, setSelection] = useState('all');
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DEFAULT_BUSINESS.map((elem) => (
          <BusinessTypeButton
            selection={selection}
            setSelection={setSelection}
            key={elem.businessType}
            logoImage={elem.logoImage}
            logoImageSelected={elem.logoImageSelected}
            text={elem.businessTypeTitle}
            businessType={elem.businessType}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.backgroundWhite,
    paddingLeft: spacing.medium,
  },
});
