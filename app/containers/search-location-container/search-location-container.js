import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Alert} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {color, fontSize, typography, spacing} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import {Button} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// const getAddress = (latitude, longitude) => {
//   let params = {
//     key: 'YOUR_API_KEY',
//     latlng: `${latitude},${longitude}`,
//   };
//   let qs = querystring.stringify(params);

//   return fetch(`https://maps.googleapis.com/maps/api/geocode/json?${qs}`)
//     .then((res) => res.json())
//     .then((json) => {
//       if (json.status !== 'OK') {
//         throw new Error(`Geocode error: ${json.status}`);
//       }
//       return json;
//     });
// };
const getGeolocation = () => {
  Geolocation.getCurrentPosition(
    (info) => console.log(info),
    (error) => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
};
const AUTOCOMPLETE_FIELD = {
  container: {
    width,
    alignItems: 'center',
    backgroundColor: color.transparent,
  },
  textInputContainer: {
    backgroundColor: color.palette.backgroundWhite,
    width: width * 0.9,
    borderColor: color.palette.iconsColor,
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  textInput: {
    color: color.palette.primaryTextColor,
    fontSize: fontSize.body2,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: color.transparent,
  },
  listView: {
    backgroundColor: color.palette.backgroundWhite,
    marginTop: 15,
    borderColor: color.palette.iconsColor,
    borderTopWidth: 1.9,
    paddingHorizontal: 10,
    paddingTop: 35,
  },
  row: {
    paddingBottom: 10,
    marginBottom: 15,
    borderColor: color.palette.iconsColor,
    borderBottomWidth: 0.7,
  },
  description: {
    fontFamily: typography.primary,
    letterSpacing: 0.6,
  },
  poweredContainer: {
    paddingVertical: 15,
    // backgroundColor: 'red',
  },
};

export const SearchLocationContainer = () => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('searchLocation');
  const [location, setLocation] = useState({});

  return (
    <View style={styles.container}>
      <Button
        text="< Back"
        style={{alignItems: 'flex-start', marginBottom: spacing.small}}
        preset="skipLink"
        onPress={() => {}}
      />

      <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        onFail={(error) => console.error(error)}
        textInputProps={{
          onChangeText: (data) => {
            setLocation({data});
          },
        }}
        renderLeftButton={() => (
          <Icon name="search" color={color.palette.iconsColor} size={20} />
        )}
        suppressDefaultStyles
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.        // textInputProps={{onBlur: () => {}}}
        fetchDetails={true}
        styles={AUTOCOMPLETE_FIELD}
        placeholder="Enter your location"
        query={{
          // key: '',
          //GET IT FROM .env files via configs
          language: 'en', // language of the results
          //types: '(cities)'  default: 'geocode'
        }}
      />
      <Button
        onPress={getGeolocation}
        style={styles.locationLink}
        text="Use current location"
        preset="location"
        icon="location-arrow"
        iconColor={color.palette.primaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.backgroundWhite2,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  locationLink: {
    borderWidth: 0,
    marginVertical: spacing.medium,
    width: width,
    justifyContent: 'center',
  },
});
