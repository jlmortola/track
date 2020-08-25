import React from 'react';
import { Button, Input, Text } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import Mapview, { Polyline } from 'react-native-maps'
import { requestPermissionsAsync } from 'expo-location'




const Map = () => {
  const points = []

  for(let i = 0; i < 20; i++) {
    points.push({
      latitude: 41.384260 + i * 0.01,
      longitude: 2.174070 + i * 0.01
    })
  }



  return (
    <Mapview initialRegion={initialRegion} style={styles.map}>
      <Polyline coordinates={points}/>
    </Mapview>
  );
};

const initialRegion = {
  latitude: 41.384260,
  longitude: 2.174070,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}
const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map;