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
import {Text, Button} from '../../components';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('screen').width;

export const SelectServicesContainer = ({services, setServices}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text
        style={{alignSelf: 'flex-start', fontWeight: 'bold'}}
        text="Select services you care about"
        preset="fieldLabel"
      />
      <View style={styles.imageContainer}>
        {services.map((elem, i) => {
          return (
            <Service
              key={elem.serviceName}
              setServices={setServices}
              elem={elem}
              i={i}
            />
          );
        })}
      </View>
    </View>
  );
};
const Service = ({elem, setServices, i}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setServices((s) =>
          s.map((e, index) => {
            if (index === i) {
              return {...e, isSelected: !e.isSelected};
            } else {
              return {...e};
            }
          }),
        );
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
              backgroundColor: elem.isSelected
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
