import React from 'react';
import { Button, Input, Text } from 'react-native-elements'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Mapview, { Polyline, Circle } from 'react-native-maps'
import { requestPermissionsAsync } from 'expo-location'
import { useTrackContext } from 'context/track'

const Map = () => {
  const { state: { currentLocation, locations } } = useTrackContext()
  if(!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}}/>
  }

  return (
    <Mapview 
      initialRegion={{...currentLocation.coords, ...initialRegion}}
      region={{...currentLocation.coords, ...initialRegion}}
      style={styles.map}>
    <Circle 
      center={currentLocation.coords}
      radius={20}
      strokeColor="rgba(158, 158, 255, 1.0)"
      fillColor="rgba(158, 158, 255, 0.3)"
    />
    <Polyline 
      coordinates={locations.map(loc => loc.coords)}
    />
    </Mapview>
  );
};

const initialRegion = {
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map;