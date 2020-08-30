
import React from 'react'
import { Button, FlatList, Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { useTrackContext } from 'context/track'
import Mapview, { Polyline } from 'react-native-maps'

const TrackDetail = ({navigation}) => {
  const { state: {tracks}} = useTrackContext()
  const _id = navigation.getParam('_id')

  const track = tracks.find(tr => tr._id === _id)

  const initialCoords = track.locations[0].coords

  return (
    <>
      <Text>{track.name}</Text>
      <Mapview
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)} 
        />
      </Mapview>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default TrackDetail
