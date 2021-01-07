/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {spacing} from '../../themes';
import {Text} from '../../components';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('screen').width;

export const SelectServicesContainer = () => {
  const {t} = useTranslation();
  const SERVICES = [
    {
      serviceName: 'food',
      labelName: t('signin.getUserData.food'),
      serviceImage: require('./food.png'),
      isSelected: false,
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
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{alignSelf: 'flex-start'}}
        text="Select services you care about"
        preset="fieldLabel"
      />
      <View style={styles.imageContainer}>
        {SERVICES.map((elem, i) => {
          return <Service key={elem.serviceName} elem={elem} />;
        })}
      </View>
    </View>
  );
};
const Service = ({elem}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsSelected((s) => !s);
      }}>
      <ImageBackground
        style={styles.background}
        imageStyle={styles.backgroundImage}
        source={elem.serviceImage}>
        <View style={styles.overlay}>
          <Text
            preset="products"
            text={elem.labelName}
            style={{
              ...styles.imageText,
              backgroundColor: isSelected
                ? 'rgba(245, 45, 86,.1)'
                : 'rgba(230, 240, 250,.2)',
            }}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
  },
  imageContainer: {
    marginVertical: spacing.large,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  background: {
    marginBottom: width * 0.04,
    height: width * 0.4,
    width: width * 0.4,
  },
  backgroundImage: {
    resizeMode: 'contain',
    borderRadius: 10,
  },
  overlay: {
    flexGrow: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: 'rgba(250,250,250,.7)',
  },
  imageText: {
    flex: 1,
    textAlignVertical: 'center',
    borderRadius: 10,
    textAlign: 'center',
    color: '#4a4854',
    fontWeight: 'bold',
  },
});
