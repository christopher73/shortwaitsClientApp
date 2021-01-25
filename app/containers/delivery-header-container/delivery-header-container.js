import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {color, fontSize, typography, spacing} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const DeliveryHeaderContainer = () => {
  const navigation = useNavigation();
  const updateLocation = () =>
    navigation.navigate('utils', {screen: 'updateDeliveryAddress'});

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.center} onPress={updateLocation}>
        <MaterialCommunityIcons
          name="map-marker-radius-outline"
          color={color.palette.primaryColor}
          size={22}
        />
        <Text preset="deliveryHeader">54 Madison St</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.right}>
        <MaterialCommunityIcons
          name="account-settings-outline"
          color={color.palette.primaryTextColor}
          size={27}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    backgroundColor: color.palette.backgroundWhite,
    borderBottomWidth: 1.5,
    borderColor: color.palette.primaryBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  right: {
    position: 'absolute',
    right: 10,
  },
});

//
//
//  ************************************************************************************
//
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
// const getGeolocation = () => {
//   Geolocation.getCurrentPosition(
//     (info) => console.log(info),
//     (error) => Alert.alert('Error', JSON.stringify(error)),
//     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//   );
// };
// const AUTOCOMPLETE_FIELD = {
//   container: {
//     width,
//     alignItems: 'center',
//     backgroundColor: color.transparent,
//   },
//   textInputContainer: {
//     backgroundColor: color.palette.backgroundWhite,
//     width: width * 0.9,
//     borderColor: color.palette.iconsColor,
//     borderWidth: 0.8,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//   },
//   textInput: {
//     color: color.palette.primaryTextColor,
//     fontSize: fontSize.body2,
//     paddingHorizontal: 10,
//     flex: 1,
//     backgroundColor: color.transparent,
//   },
//   listView: {
//     backgroundColor: color.palette.backgroundWhite,
//     marginTop: 15,
//     borderColor: color.palette.iconsColor,
//     borderTopWidth: 1.9,
//     paddingHorizontal: 10,
//     paddingTop: 35,
//   },
//   row: {
//     paddingBottom: 10,
//     marginBottom: 15,
//     borderColor: color.palette.iconsColor,
//     borderBottomWidth: 0.7,
//   },
//   description: {
//     fontFamily: typography.primary,
//     letterSpacing: 0.6,
//   },
//   poweredContainer: {
//     paddingVertical: 15,
//     // backgroundColor: 'red',
//   },
// };
